package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.ToothQuadrent;
import com.my.portal.model.ToothQuadrentView;

public interface ToothQuadrentService {
	
	ToothQuadrentView findById(long id);
	List<ToothQuadrentView> findAll();
	boolean isToothQuadrentAvailable(long toothIndex);
	boolean isToothGrpIdAvailable(long toothIndex);
	ToothQuadrentView addToothQuadrent(ToothQuadrentView view);
	ToothQuadrent map(ToothQuadrentView v);
	ToothQuadrentView map(ToothQuadrent e);
	List<ToothQuadrent> mapAll(List<ToothQuadrentView> v);
	List<ToothQuadrentView> mapAll(boolean reload);
}
