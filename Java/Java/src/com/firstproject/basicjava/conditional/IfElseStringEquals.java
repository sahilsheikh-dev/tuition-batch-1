package com.firstproject.basicjava.conditional;

public class IfElseStringEquals {

	public static void main(String[] args) {

		String country = "India";

		if (country.equals("India")) {
			System.out.println("Country name is " + country);
		} else {
			System.out.println("Other Country");
		}

		if (country.equalsIgnoreCase("india")) {
			System.out.println("Country name is " + country);
		} else {
			System.out.println("Other Country");
		}

	}

}
