package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.ToothQuadrent;
import com.my.portal.model.ToothQuadrentView;

public interface ToothQuadrentService {
	
	ToothQuadrent findById(long id);
	List<ToothQuadrentView> getToothQuadrent();
	boolean isToothQuadrentAvailable(long toothIndex);
	ToothQuadrentView addToothQuadrent(ToothQuadrentView view);
}
