package com.firstproject.corejava.classesObjectsAndConstructors;

public class ProjectMainClass {

	public static void main(String[] args) {

//		Class		object 	= new Constructor();
		BankClass	hdfc 	= new BankClass();
		hdfc.minimumBalance = 5000.00f;
		hdfc.intrestRate = 7.5f;
		System.out.println(hdfc.minimumBalance);
		System.out.println(hdfc.intrestRate);

//		instance of an object
		BankUserClass user1 = new BankUserClass();
		user1.userName = "Sahil";
		user1.currentBalance = 100000.00f;
		user1.addBalance(10000);

		BankUserClass user2 = new BankUserClass();
		user2.userName = "Shadab";
		user2.currentBalance = 10000.00f;

		BankUserClass user3 = new BankUserClass();
		user3.userName = "Sanchit";
		user3.currentBalance = 1000.00f;

		System.out.println(user1.currentBalance);
		System.out.println(user2.currentBalance);
		System.out.println(user3.currentBalance);

		BankClass sbi = new BankClass();
		System.out.println(sbi.minimumBalance);

	}

}
