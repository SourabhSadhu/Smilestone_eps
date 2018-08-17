package com.my.portal;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.thymeleaf.extras.springsecurity4.dialect.SpringSecurityDialect;
import org.thymeleaf.spring4.SpringTemplateEngine;
import org.thymeleaf.spring4.templateresolver.SpringResourceTemplateResolver;
import org.thymeleaf.spring4.view.ThymeleafViewResolver;
import org.thymeleaf.templatemode.TemplateMode;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages="com.indepay.portal")
public class WebAppConfig extends WebMvcConfigurerAdapter implements ApplicationContextAware {


    private ApplicationContext applicationContext;
    private int maxUploadSizeInMb = 5 * 1024 * 1024; // 5 MB

    public WebAppConfig() {
        super();
    }

    public void setApplicationContext(final ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    /* ******************************************************************* */
    /*  Defines callback methods to customize the Java-based configuration */
    /*  for Spring MVC enabled via {@code @EnableWebMvc}                   */
    /* ******************************************************************* */

    /**
     *  Dispatcher configuration for serving static resources
     */
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        super.addResourceHandlers(registry);
        registry.addResourceHandler("/img/**").addResourceLocations("/img/");
        registry.addResourceHandler("/css/**").addResourceLocations("/css/");
        registry.addResourceHandler("/js/**").addResourceLocations("/js/");
        registry.addResourceHandler("/customjs/**").addResourceLocations("/customjs/");
        registry.addResourceHandler("/fonts/**").addResourceLocations("/fonts/");
        registry.addResourceHandler("/lib/**").addResourceLocations("/lib/");
        registry.addResourceHandler("/icons-reference/**").addResourceLocations("/icons-reference/");
        registry.addResourceHandler("/certificate-template/**").addResourceLocations("/certificate-template/");
        
    }
    
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
    	registry.addViewController("/remittance/login").setViewName("remittance/login");
    	registry.addViewController("/remittance/remittancelogout").setViewName("remittance/remittancelogout");
        registry.addViewController("/remittance/home").setViewName("remittance/home");
        registry.addViewController("/remittance/header").setViewName("remittance/header");
        registry.addViewController("/remittance/footer").setViewName("remittance/footer");
        registry.addViewController("/remittance/nav").setViewName("remittance/nav");
        registry.addViewController("/remittance/error").setViewName("remittance/error");
        
        registry.addViewController("/remittance/remittanceFlow").setViewName("remittance/remittanceFlow");
        registry.addViewController("/remittance/aepsFlow").setViewName("remittance/aepsFlow");        
        registry.addViewController("/remittance/cashPickUp").setViewName("remittance/cashPickUp");
        registry.addViewController("/remittance/statement").setViewName("remittance/statement");
        registry.addViewController("/remittance/aepsStatement").setViewName("remittance/aepsStatement");
        registry.addViewController("/remittance/accountDetails").setViewName("remittance/accountDetails");
        registry.addViewController("/remittance/myOutbox").setViewName("remittance/myOutbox");
        registry.addViewController("/remittance/changePassword").setViewName("remittance/changePassword");
        registry.addViewController("/remittance/ekyc").setViewName("remittance/ekyc");
        registry.addViewController("/remittance/help").setViewName("remittance/help");
        registry.addViewController("/remittance/certificate").setViewName("remittance/certificate");
        registry.addViewController("/remittance/applyForLoan").setViewName("remittance/applyForLoan");
        registry.addViewController("/remittance/limitRequest").setViewName("remittance/limitRequest");
        registry.addViewController("/remittance/userProfile").setViewName("remittance/userProfile");
        registry.addViewController("/remittance/limitReport").setViewName("remittance/limitReport");
    }
    
    
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
       configurer.enable();
    }

    /**
     *  Message externalization/internationalization
     */
    @Bean
    public ResourceBundleMessageSource messageSource() {
        ResourceBundleMessageSource resourceBundleMessageSource = new ResourceBundleMessageSource();
        resourceBundleMessageSource.setBasename("Messages");
        return resourceBundleMessageSource;
    }

    /* **************************************************************** */
    /*  THYMELEAF-SPECIFIC ARTIFACTS                                    */
    /*  TemplateResolver <- TemplateEngine <- ViewResolver              */
    /* **************************************************************** */

    @Bean
    public SpringResourceTemplateResolver templateResolver(){
        SpringResourceTemplateResolver templateResolver = new SpringResourceTemplateResolver();
        templateResolver.setApplicationContext(this.applicationContext);
        templateResolver.setPrefix("/WEB-INF/templates/");
        templateResolver.setSuffix(".html");
        templateResolver.setTemplateMode(TemplateMode.HTML);
        // Template cache is true by default. Set to false if you want
        // templates to be automatically updated when modified.
        templateResolver.setCacheable(true);
        return templateResolver;
    }

    @Bean
    public SpringTemplateEngine templateEngine(){
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setEnableSpringELCompiler(true); // Compiled SpringEL should speed up executions
        templateEngine.setTemplateResolver(templateResolver());
        templateEngine.addDialect(new SpringSecurityDialect());
        return templateEngine;
    }

    @Bean
    public ThymeleafViewResolver viewResolver(){
        ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();
        viewResolver.setTemplateEngine(templateEngine());
        return viewResolver;
    }
    
    @Bean
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver cmr = new CommonsMultipartResolver();
        cmr.setMaxUploadSize(maxUploadSizeInMb * 2);
        cmr.setMaxUploadSizePerFile(maxUploadSizeInMb); //bytes
        return cmr;
    }

}
