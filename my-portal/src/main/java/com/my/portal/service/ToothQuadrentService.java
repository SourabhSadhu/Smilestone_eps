package com.my.portal.service;

import java.util.List;

import com.my.portal.model.ToothQuadrentView;

public interface ToothQuadrentService {
	
	List<ToothQuadrentView> getToothQuadrent();
	ToothQuadrentView addToothQuadrent(ToothQuadrentView view);
}
