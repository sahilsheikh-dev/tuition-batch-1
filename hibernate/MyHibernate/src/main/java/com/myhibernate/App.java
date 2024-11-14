package com.myhibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {
		System.out.println("Hibernate Application Started");

		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");

		SessionFactory sf = cfg.buildSessionFactory();

		Employee employee1 = new Employee();
		employee1.setEmpName("Sahil");
		employee1.setSalary(100000);
		employee1.setEmpPosition("Intern");

		Session session = sf.openSession();
		session.beginTransaction();
		session.save(employee1);
		session.getTransaction().commit();
		session.close();

		System.out.println("Hibernate Application Stopped");
	}
}
