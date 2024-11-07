package com.firstproject.corejava.oops;

public class A_Introduction {

	/*
	 * What is OOPs?
	 * 
	 * OOPs stands for Object Oriented Programming. OOPs is a methodology which used
	 * to write code using classes, objects, variables and methods.
	 * 
	 * What are the 4 Piller of OOPs?
	 * 
	 * 1. Abstraction 2. Encapsulation 3. Inheritance 4. Polymorphism
	 * 
	 */

	public static void main(String[] args) {

		Encapsulation obj1 = new Encapsulation();
		obj1.setName("Sahil");
		obj1.setAge(26);

		System.out.println(obj1.getName());
		System.out.println(obj1.getAge());

	}

}
