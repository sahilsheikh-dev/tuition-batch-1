package com.firstproject.basicjava.conditional;

public class NestedIfElse {
	
	public static void main(String[] args) {
		
		boolean isPrimeMember = false;
		int purchasedAmount = 10000;
		
		if (isPrimeMember == true) {
			if (purchasedAmount >= 1000) {
				System.out.println("You got 10% off");
			} else {
				System.out.println("You got 5% off");
			}
		} else {
			System.out.println("You are not a prime member, hence no discount");
		}
		
		
		
		/*	HOMEWORK
		 * 10%	more than 1000
		 * 7%	700 - 999
		 * 5%	500 - 699
		 * 2%	below 500
		 * */
	}

}
