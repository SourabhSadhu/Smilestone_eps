package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.ValidationException;
import com.my.portal.entities.ToothQuadrent;
import com.my.portal.model.ErrorCode;
import com.my.portal.model.ToothQuadrentView;
import com.my.portal.repositories.ToothQuadrentRepository;
import com.my.portal.service.ToothQuadrentService;

@Service
public class ToothQuadrentServiceImpl implements ToothQuadrentService {

	private List<ToothQuadrentView> tqvList = new ArrayList<>();
	@Autowired ToothQuadrentRepository repo;
	
	@PostConstruct
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	private void loadAll(){
		mapAll();
	}
	
	@Override
	public List<ToothQuadrentView> getToothQuadrent() {
		return mapAll();
	}

	@Override
	public ToothQuadrentView addToothQuadrent(ToothQuadrentView view) {
		if(null != view && 
				0 != view.getToothIndex() &&
				BigDecimal.ZERO.compareTo(view.getToothQdr()) < 0 &&
				BigDecimal.ZERO.compareTo(view.getToothNumber()) < 0
				)	
		{
			ToothQuadrentView v = map(repo.saveAndFlush(map(view)));
			return v;
		}else {
			throw new ValidationException(ErrorCode.INVALID_TOOTH_QUADRENT);
		}
		
	}
	
	@Override
	public boolean isToothQuadrentAvailable(long toothIndex) {
		return repo.exists(Long.valueOf(toothIndex));
	}

	private ToothQuadrentView map(ToothQuadrent tq){
		ToothQuadrentView tqv = new ToothQuadrentView();
		if(null != tq){
			tqv.setToothIndex (tq.getToothIndex());
			tqv.setToothNumber(tq.getToothNumber());
			tqv.setToothQdr   (tq.getToothQdr());
		}
		return tqv;
	}
	
	@Override
	public ToothQuadrent findById(long id) {
		return repo.findOne(id);
	}

	private ToothQuadrent map(ToothQuadrentView tqv){
		ToothQuadrent tq = new ToothQuadrent();
		if(null != tqv){
			tq.setToothIndex(tqv.getToothIndex());
			tq.setToothNumber(tqv.getToothNumber());
			tq.setToothQdr(tqv.getToothQdr());
		}
		return tq;
	}
	
	private List<ToothQuadrentView> mapAll(){
		if(null == tqvList){
			tqvList = new ArrayList<>();
		}
		if(repo.findAll().size() != tqvList.size()) {
			for(ToothQuadrent tq : repo.findAll()){
				tqvList.add(map(tq));
			}
		}
		return tqvList;
	}

}
