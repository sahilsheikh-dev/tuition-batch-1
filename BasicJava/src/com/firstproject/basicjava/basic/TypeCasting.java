package com.firstproject.basicjava.basic;

public class TypeCasting {

	public static void main(String[] args) {

		/*
		 * we caste one data type to another data type
		 * 
		 * Types of Type Casting:
		 * 
		 * Widening Casting (automatically) - converting a smaller type to a larger type
		 * size byte -> short -> char -> int -> long -> float -> double
		 * 
		 * Narrowing Casting (manually) - converting a larger type to a smaller size
		 * type double -> float -> long -> int -> char -> short -> byte
		 */

		byte n1 = 50;
		short n2 = n1;
		int n3 = n2;
		float f1 = n3;

		long n7 = 4866;
		int n6 = (int) n7;
		short n4 = (short) n6;
		byte n5 = (byte) n4;

	}

}