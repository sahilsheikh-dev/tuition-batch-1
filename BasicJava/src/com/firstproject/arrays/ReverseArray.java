package com.firstproject.arrays;

public class ReverseArray {

	public static void main(String[] args) {

		int[] arr1 = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

		for (int i = arr1.length - 1; i >= 0; i--) {
			System.out.print(arr1[i] + ", ");
		}

	}

}
