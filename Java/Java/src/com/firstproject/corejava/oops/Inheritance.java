package com.firstproject.corejava.oops;

//Parent Class
public class Inheritance {

	public static void property() {
		System.out.println("Property1");
	}

}

class ChidClassA extends Inheritance {

	public static void main(String[] args) {
		property();
	}

	public static void property1() {
		System.out.println("Child Property");
	}

}

class GrandChildA extends ChidClassA {

	public static void main(String[] args) {
		property();
		property1();
	}

}

//----------------------
//OVERRIDDING
class Bank {
	public static void interestRateCalculation() {
		System.out.println("General 7% Interest on loans");
	}
}

class HDFCBank extends Bank {
	public static void interestRateCalculation() {
		System.out.println("General 19% Interest on loans");
	}
}

class ICICIBank extends Bank {
	public static void interestRateCalculation() {
		System.out.println("General 23% Interest on loans");
	}
}

class SBIBank extends Bank {
	public static void interestRateCalculation() {
		System.out.println("General 13% Interest on loans");
	}
}
