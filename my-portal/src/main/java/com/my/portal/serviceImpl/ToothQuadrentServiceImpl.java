package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
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
		mapAll(true);
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<ToothQuadrentView> findAll() {
		return mapAll(false);
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public ToothQuadrentView addToothQuadrent(ToothQuadrentView view) {
		if(null != view && 
				0 != view.getToothIndex() &&
				BigDecimal.ZERO.compareTo(view.getToothQdr()) < 0 &&
				BigDecimal.ZERO.compareTo(view.getToothNumber()) < 0 &&
				11 <= view.getToothIndex() &&  view.getToothIndex() <= 48
				)	
		{			
			//TODO: GOJ DANT MAPPING??			
			if(view.getToothQdr().longValue() <= 4  && view.getToothQdr().longValue() == view.getToothIndex()/10) {
				if(view.getToothNumber().longValue() <= 8  && view.getToothNumber().longValue() == view.getToothIndex()%10) {
					if(null != repo.findOne(view.getToothIndex())) {
						throw new ValidationException(ErrorCode.DUPLICATE_TOOTH_INDEX);
					}
					ToothQuadrentView v = map(repo.saveAndFlush(map(view)));
					mapAll(true);
					return v;
				}else {
					throw new ValidationException(ErrorCode.INVALID_TOOTH_QUADRENT_NUMBER);
				}
			}else {
				throw new ValidationException(ErrorCode.INVALID_TOOTH_QUADRENT_QUADRENT);
			}
		}else {
			throw new ValidationException(ErrorCode.INVALID_TOOTH_QUADRENT_INDEX);
		}
		
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public boolean isToothQuadrentAvailable(long toothIndex) {
		return repo.exists(Long.valueOf(toothIndex));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public ToothQuadrentView findById(long id) {
		return map(repo.findOne(id));
	}
	

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public boolean isToothGrpIdAvailable(long toothIndex) {
		List<ToothQuadrent> el = repo.isToothGrpIdAvailable(new BigDecimal(toothIndex));
		return el != null && !el.isEmpty();
	}
	
	@Override
	public ToothQuadrentView map(ToothQuadrent tq){
		ToothQuadrentView tqv = new ToothQuadrentView();
		if(null != tq){
			tqv.setToothIndex (tq.getToothIndex());
			tqv.setToothNumber(tq.getToothNumber());
			tqv.setToothQdr   (tq.getToothQdr());
			tqv.setToothGroup(tq.getToothGroup());
		}
		return tqv;
	}

	@Override
	public ToothQuadrent map(ToothQuadrentView tqv){
		ToothQuadrent tq = new ToothQuadrent();
		if(null != tqv){
			tq.setToothIndex(tqv.getToothIndex());
			tq.setToothNumber(tqv.getToothNumber());
			tq.setToothQdr(tqv.getToothQdr());
		}
		return tq;
	}
	
	@Override
	public List<ToothQuadrentView> mapAll(boolean reload){
		if(null == tqvList){
			tqvList = new ArrayList<>();
		}
		if(reload && repo.findAll().size() != tqvList.size()) {
			for(ToothQuadrent tq : repo.findAll()){
				tqvList.add(map(tq));
			}
		}
		return tqvList;
	}

	@Override
	public List<ToothQuadrent> mapAll(List<ToothQuadrentView> v) {
		// TODO Auto-generated method stub
		return null;
	}

}
