package com.my.portal;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ReadListener;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.ServletOutputStream;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.WriteListener;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

public class LoggerFilter implements Filter{
	private static Logger log;

	private static final String HEADER_CONTENT_TYPE = "Content-Type";
	
	static {
		try {
			log = LoggerFactory.getLogger("api");
		} catch (Exception e1) {
			log = LoggerFactory.getLogger(LoggerFilter.class);
		}
	}
	
	private List<String> noLoggingUrlList;
	
	// default constructor
	public LoggerFilter() {
		this.noLoggingUrlList = null;		
	}
	
	public LoggerFilter(List<String> noLoggingUrlList) {
		this.noLoggingUrlList = noLoggingUrlList;
	}
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		if(null == noLoggingUrlList){
			this.noLoggingUrlList = new ArrayList<>();
		}if (null != filterConfig && null != filterConfig.getInitParameter("initParam")){
			this.noLoggingUrlList.addAll(Arrays.asList(filterConfig.getInitParameter("initParam").split(",")));
		}
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		String requestContentType = null;
		String responseContentType = null;
		
		HttpServletRequest httpServletRequest = (HttpServletRequest) request;
		HttpServletResponse httpServletResponse = (HttpServletResponse) response;

		requestContentType = httpServletRequest.getHeader(HEADER_CONTENT_TYPE);
		
		if (requestContentType != null && requestContentType.toLowerCase().contains("form")){ // for form submissions, bypass the logging
			chain.doFilter(httpServletRequest, httpServletResponse);
			return;
		}

		// Request and Response are converted to a Custom Wrapper to achieve the
		// capability
		// of accessing request and response body more than once.
		BufferedRequestWrapper bufferedReqest = new BufferedRequestWrapper(httpServletRequest);
		BufferedResponseWrapper bufferedResponse = new BufferedResponseWrapper(httpServletResponse);

		String requestBody = bufferedReqest.getRequestBody();

		StringBuilder urlBuilder = new StringBuilder(httpServletRequest.getRequestURL().toString());
		
		if (StringUtils.hasText(httpServletRequest.getQueryString())){
			urlBuilder.append("?");
			urlBuilder.append(httpServletRequest.getQueryString());
		}
		
		Date requestTime = new Date();
		
		chain.doFilter(bufferedReqest, bufferedResponse);

		String res=new String(bufferedResponse.getCopy(),bufferedResponse.getCharacterEncoding());
		
		int status = bufferedResponse.getStatus();
		
		requestContentType = bufferedReqest.getHeader(HEADER_CONTENT_TYPE);
		responseContentType = bufferedResponse.getHeader(HEADER_CONTENT_TYPE);

		Date responseTime = new Date();
		
		createLogEntryForAPICall(urlBuilder.toString(), requestContentType, responseContentType, requestBody, requestTime, res, status, responseTime);
		
	}

	private void createLogEntryForAPICall(String url,String requestContentType, String responseContentType, String request, Date requestTime, String response, int responseStatusCode, Date responseTime){
		boolean shouldLogURL = shouldLogURL(url);
		StringBuilder sb = new StringBuilder("HIT URL:");
		sb.append(url);
		sb.append('\n');
		sb.append("At:");
		sb.append(requestTime);
		sb.append('\n');
		if (shouldLogURL){
			sb.append("Request:");
			sb.append(request);
			sb.append('\n');
		}
		sb.append("Response At:");
		sb.append(responseTime);
		sb.append('\n');
		sb.append("Response Code:");
		sb.append(responseStatusCode);
		sb.append('\n');
		if (shouldLogURL){
			sb.append("Response:");
			sb.append(response);
		}
		
		log.info(sb.toString());
	}
	
	private boolean shouldLogURL(String url){
		if (url != null && this.noLoggingUrlList != null && !this.noLoggingUrlList.isEmpty()){
			for (String noLogURL:this.noLoggingUrlList){
				if (url.indexOf(noLogURL) >= 0){
					return false;
				}
			}
		}
		return true;
	}
	
	@Override
	public void destroy() {
	}

	/*
	 * This is a wrapper class of HttpServletRequestWrapper so that we can read
	 * request more than once.
	 */
	public static final class BufferedRequestWrapper extends HttpServletRequestWrapper {
		/*
		 * The object where the request will be stored
		 */
		private ByteArrayOutputStream baos = null;

		/*
		 * the object where the request is stored in byte array format.
		 */
		private byte[] buffer = null;

		/*
		 * Following initialization is done here <ul> <li>Get InputStream from
		 * request</li> <li>Copy the InputStream to ByteArrayInputStream using
		 * while loop</li> <li>Convert ByteArrayInputStream to byte array for
		 * further use in the class</li> </ul>
		 */
		public BufferedRequestWrapper(HttpServletRequest req) throws IOException {
			super(req);
			// Read InputStream and store its content in a buffer.
			InputStream is = req.getInputStream();
			this.baos = new ByteArrayOutputStream();
			byte buf[] = new byte[1024];
			int letti;

			while ((letti = is.read(buf)) > 0) {
				this.baos.write(buf, 0, letti);
			}

			this.buffer = this.baos.toByteArray();
		}

		/*
		 * (non-Javadoc)
		 * 
		 * @see javax.servlet.ServletRequestWrapper#getInputStream() Return
		 * BufferedServletInputStream here so that the wrapper can be used for
		 * reading request more than once.
		 */
		@Override
		public ServletInputStream getInputStream() {
			return new BufferedServletInputStream(new ByteArrayInputStream(this.buffer));
		}

		/*
		 * @return the request body in String
		 */
		public String getRequestBody() throws IOException {
			BufferedReader reader = new BufferedReader(new InputStreamReader(this.getInputStream()));
			StringBuilder inputBuffer = new StringBuilder();
			try {
				String line = null;

				do {
					line = reader.readLine();

					if (null != line) {
						inputBuffer.append(line.trim());
					}

				} while (line != null);
			} finally {
				reader.close();
			}

			return inputBuffer.toString().trim();
		}
	}

	/**
	 * The thumb rule in I/O is, if we do not open/create the inputstream source
	 * ourself, then we do not necessarily need to close it as well. Here we are
	 * just wrapping the request's inputstream, so we don't necessarily need to
	 * close it.
	 * 
	 * If we open the input ourself by e.g. new FileInputStream("c:/file.ext")
	 * then you obviously need to close it ourself in the finally block. The
	 * container ought to do so under the hood.
	 * 
	 */
	private static final class BufferedServletInputStream extends ServletInputStream {
		private ByteArrayInputStream bais;

		public BufferedServletInputStream(ByteArrayInputStream bais) {
			this.bais = bais;
		}

		@Override
		public int available() {
			return this.bais.available();
		}

		@Override
		public int read() {
			return this.bais.read();
		}

		@Override
		public int read(byte[] buf, int off, int len) {
			return this.bais.read(buf, off, len);
		}

		@Override
		public boolean isFinished() {
			return false;
		}

		@Override
		public boolean isReady() {
			return false;
		}

		@Override
		public void setReadListener(ReadListener arg0) {

		}
	}

	/*
	 * The wrapper class for HttpServletResponse so that response body can be
	 * read more than once.
	 */
	private class BufferedResponseWrapper extends HttpServletResponseWrapper {
		private ServletOutputStream outputStream;
		private PrintWriter writer;
		private CustomServletOutputStream copier;

		public BufferedResponseWrapper(HttpServletResponse response) throws IOException {
			super(response);
		}

		/*
		 * (non-Javadoc)
		 * 
		 * @see javax.servlet.ServletResponseWrapper#getOutputStream() Override
		 * this method to return the CustomServletOutputStream
		 */
		@Override
		public ServletOutputStream getOutputStream() throws IOException {
			if (writer != null) {
				throw new IllegalStateException("getWriter() has already been called on this response.");
			}

			if (outputStream == null) {
				outputStream = getResponse().getOutputStream();
				copier = new CustomServletOutputStream(outputStream);
			}

			return copier;
		}

		/*
		 * (non-Javadoc)
		 * 
		 * @see javax.servlet.ServletResponseWrapper#getWriter()
		 * 
		 * Overriding this method so that we can write in the
		 * ServletOutputStream without distorting the actual response
		 */
		@Override
		public PrintWriter getWriter() throws IOException {
			if (outputStream != null) {
				throw new IllegalStateException("getOutputStream() has already been called on this response.");
			}

			if (writer == null) {
				copier = new CustomServletOutputStream(getResponse().getOutputStream());
				writer = new PrintWriter(new OutputStreamWriter(copier, getResponse().getCharacterEncoding()), true);
			}

			return writer;
		}

		/*
		 * (non-Javadoc)
		 * 
		 * @see javax.servlet.ServletResponseWrapper#flushBuffer()
		 * 
		 * Flush the custom buffer
		 */
		@Override
		public void flushBuffer() throws IOException {
			if (writer != null) {
				writer.flush();
			} else if (outputStream != null) {
				copier.flush();
			}
		}

		/*
		 * @returns the copy of response body.
		 */
		public byte[] getCopy() {
			if (copier != null) {
				return copier.getCopy();
			} else {
				return new byte[0];
			}
		}
	}

	/*
	 * This is custom implementation of ServletOutputStream so that we can I/O
	 * ServletOutputStream more than once.
	 */
	private class CustomServletOutputStream extends ServletOutputStream {
		private OutputStream outputStream;
		private ByteArrayOutputStream copy;

		public CustomServletOutputStream(OutputStream outputStream) {
			this.outputStream = outputStream;
			this.copy = new ByteArrayOutputStream(1024);
		}

		@Override
		public void write(int b) throws IOException {
			outputStream.write(b);
			copy.write(b);
		}

		public byte[] getCopy() {
			return copy.toByteArray();
		}

		@Override
		public boolean isReady() {
			return false;
		}

		@Override
		public void setWriteListener(WriteListener arg0) {

		}
	}

	
}
