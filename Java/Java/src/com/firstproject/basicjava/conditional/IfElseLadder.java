package com.firstproject.basicjava.conditional;

public class IfElseLadder {

	public static void main(String[] args) {
		
		int percentage = 90;
		
		/*
		 * A	above 90
		 * B	75 to 89
		 * C	60 to 74
		 * D	45 to 59
		 * E	35 to 44
		 * F	below 34 (fail)
		 * */
		
		if (percentage >= 90) {
			System.out.println("A Grade");
		} else if (percentage >= 75 && percentage <= 89) {
			System.out.println("B Grade");
		} else if (percentage >= 60 && percentage <= 74) {
			System.out.println("C Grade");
		} else if (percentage >= 45 && percentage <= 59) {
			System.out.println("D Grade");
		} else if (percentage >= 35 && percentage <= 44) {
			System.out.println("E Grade");
		} else {
			System.out.println("Failed");
		}

	}

}
