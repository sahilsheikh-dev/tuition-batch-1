package com.myhibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Retrieve {

	public static void main(String[] args) {

		System.out.println("Hibernate Application Started");

		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");

		SessionFactory sf = cfg.buildSessionFactory();

		Session session = sf.openSession();
		session.beginTransaction();

		try {
			Employee employeeData1 = session.get(Employee.class, 1);
			System.out.println("Employee ID: " + employeeData1.getEmpId());
			System.out.println("Employee Name: " + employeeData1.getEmpName());
			System.out.println("Employee Salary: " + employeeData1.getSalary());
			System.out.println("Employee Position: " + employeeData1.getEmpPosition());
		} catch (Exception e) {
			System.out.println("Employee with 5 ID is not available");
			System.out.println(e.getMessage());
		}

		Employee employeeData2 = session.load(Employee.class, 2);
		System.out.println("Employee ID: " + employeeData2.getEmpId());
		System.out.println("Employee Name: " + employeeData2.getEmpName());
		System.out.println("Employee Salary: " + employeeData2.getSalary());
		System.out.println("Employee Position: " + employeeData2.getEmpPosition());

		session.getTransaction().commit();
		session.close();

		System.out.println("Hibernate Application Stopped");

	}

}
