package com.firstproject.corejava.classesObjectsAndConstructors;

public class BankClass {

	float intrestRate;
	float minimumBalance;

//	default constructor OR non-parameterized constructor
	public BankClass() {
	}

//	parameterized constructor
	public BankClass(float intrestRate, float minimumBalance) {
		this.intrestRate = intrestRate;
		this.minimumBalance = minimumBalance;
	}

}
