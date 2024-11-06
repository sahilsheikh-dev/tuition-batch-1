package com.firstproject.corejava.classesObjectsAndConstructors;

public class ConstructorsExample {

	public static void main(String[] args) {
		
		BankClass sbi = new BankClass();
		System.out.println(sbi.intrestRate);
		System.out.println(sbi.minimumBalance);

		BankClass hdfc = new BankClass(7.5f, 5000.0f);
		System.out.println(hdfc.intrestRate);
		System.out.println(hdfc.minimumBalance);

	}

}
