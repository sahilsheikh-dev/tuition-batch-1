package com.firstproject.corejava.classesObjectsAndConstructors;

public class BankUserClass {

	String userName;
	float currentBalance;
	float remainingLoanAmount;

	public void addBalance(float amountAdded) {
		currentBalance = currentBalance + amountAdded;
	}

	public void emiPaid(float emiAmount) {
		remainingLoanAmount = remainingLoanAmount - emiAmount;
	}

}
