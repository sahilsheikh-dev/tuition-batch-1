package com.myhibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Update {

	public static void main(String[] args) {

		System.out.println("Hibernate Application Started");

		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");

		SessionFactory sf = cfg.buildSessionFactory();

		Employee updateEmployee1 = new Employee();
		updateEmployee1.setEmpId(3);
		updateEmployee1.setEmpName("Shadab");
		updateEmployee1.setSalary(10000);
		updateEmployee1.setEmpPosition("Software Engineer Intern");

		Employee updateEmployee2 = new Employee();
		updateEmployee2.setEmpId(4);
		updateEmployee2.setEmpName("Sanchit");
		updateEmployee2.setSalary(10000);
		updateEmployee2.setEmpPosition("Software Engineer Intern");

		Session session = sf.openSession();
		session.beginTransaction();

		session.update(updateEmployee1);
		session.update(updateEmployee2);

		session.getTransaction().commit();
		session.close();

		System.out.println("Hibernate Application Stopped");

	}

}
