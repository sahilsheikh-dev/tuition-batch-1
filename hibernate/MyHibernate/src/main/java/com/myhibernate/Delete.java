package com.myhibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Delete {

	public static void main(String[] args) {

		System.out.println("Hibernate Application Started");

		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");

		SessionFactory sf = cfg.buildSessionFactory();

		Employee deleteEmployee1 = new Employee();
		deleteEmployee1.setEmpId(6);

		Session session = sf.openSession();
		session.beginTransaction();

		try {
			session.delete(deleteEmployee1);
			session.getTransaction().commit();
		} catch (Exception e) {
			System.out.println("Unable to find record with this ID");
		}

		session.close();

		System.out.println("Hibernate Application Stopped");

	}

}
