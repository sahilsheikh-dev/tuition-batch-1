package com.firstproject.corejava.exceptionHandling;

public class ExceptionHandling {

	public static void main(String[] args) {

		int n = 10;
		int b = 0;

		try {
			int divide = n / b;
			System.out.println(divide);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		int[] arr = { 1, 5, 3, 6, 9, 8, 5 };
		int getIndexNumber = 6;

		try {
			System.out.println(arr[getIndexNumber]);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			System.out.println("Program Executed");
		}

	}

}
