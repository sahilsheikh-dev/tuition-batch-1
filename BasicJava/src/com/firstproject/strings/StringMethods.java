package com.firstproject.strings;

public class StringMethods {

	public static void main(String[] args) {

		String randomString = "Software Engineer";

		System.out.println(randomString.charAt(15));

		System.out.println(randomString.concat(" Developer"));
		System.out.println(randomString + " Developer");

		System.out.println(randomString.contains("Software"));
		System.out.println(randomString.contains("O"));

		System.out.println(randomString.indexOf('w'));

		System.out.println("".isEmpty());

		System.out.println(randomString.length());

		randomString = randomString.replace('e', 'i');
		System.out.println(randomString);

		randomString = randomString.replace("Softwari", "Software");
		System.out.println(randomString);

		randomString = randomString.replace("e", "Software");
		System.out.println(randomString);

		char[] randomArray = randomString.toCharArray();
		System.out.println(randomArray);

		System.out.println(randomString.toLowerCase());
		System.out.println(randomString.toUpperCase());

		String temp = "             aiseudfbaisdfbasd asjdkbfsdf           ";
		System.out.println(temp);
		System.out.println(temp.trim());

		System.out.println(String.valueOf(randomString));

	}

}
