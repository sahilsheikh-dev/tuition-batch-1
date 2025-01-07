package com.myhibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.myhibernate.tuition.Students;

/**
 * Hello world!
 *
 */
public class AnotherApp {
	public static void main(String[] args) {
		System.out.println("Hibernate Application Started");

		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");

		SessionFactory sf = cfg.buildSessionFactory();

//		Employee employee1 = new Employee();
//		employee1.setEmpName("Sahil");
//		employee1.setSalary(100000);
//		employee1.setEmpPosition("Intern");

		Students student1 = new Students();
		student1.setName("Shadab");

		Students student2 = new Students();
		student2.setName("Sanchit");

		Session session = sf.openSession();
		session.beginTransaction();
//		session.save(employee1);
		session.save(student1);
		session.save(student2);
		session.getTransaction().commit();
		session.close();

		System.out.println("Hibernate Application Stopped");
	}
}
