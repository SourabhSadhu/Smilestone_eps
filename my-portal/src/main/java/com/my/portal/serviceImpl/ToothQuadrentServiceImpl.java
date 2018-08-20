package com.my.portal.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.entities.ToothQuadrent;
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
		if(null == tqvList){
			tqvList = new ArrayList<>();
		}
		for(ToothQuadrent tq : repo.findAll()){
			tqvList.add(toView(tq));
		}
	}
	
	@Override
	public List<ToothQuadrentView> getToothQuadrent() {
		if(null != tqvList && !tqvList.isEmpty()){
			return tqvList;
		}
		return new ArrayList<>();
	}

	@Override
	public ToothQuadrentView addToothQuadrent(ToothQuadrentView view) {
//		if(null != view && 
//				0 != view.getToothIndex() &&
//				BigDecimal.ZERO.compareTo(view.getToothQdr())
//				)	
		/**
		 * Not required yet
		 */
		return null;
	}
	
	private ToothQuadrentView toView(ToothQuadrent tq){
		ToothQuadrentView tqv = new ToothQuadrentView();
		if(null != tq){
			tqv.setToothIndex (tq.getToothIndex());
			tqv.setToothNumber(tq.getToothNumber());
			tqv.setToothQdr   (tq.getToothQdr());
		}
		return tqv;
	}
	
	private ToothQuadrent toEntity(ToothQuadrentView tqv){
		ToothQuadrent tq = new ToothQuadrent();
		if(null != tqv){
			tq.setToothIndex(tqv.getToothIndex());
			tq.setToothNumber(tqv.getToothNumber());
			tq.setToothQdr(tqv.getToothQdr());
		}
		return tq;
	}

}
