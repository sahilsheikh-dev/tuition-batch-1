package com.firstproject.basicjava.arrays;

public class Array1000 {

	public static void main(String[] args) {

		int arr[] = new int[1000];

//		assigning array values
		for (int i = 1; i <= 1000; i++) {
			arr[i - 1] = i;
		}

//		printing array values
		for (int i = 0; i < 1000; i++) {
			System.out.print(arr[i] + ", ");
		}

	}

}
