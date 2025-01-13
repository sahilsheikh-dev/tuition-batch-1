package com.tuition.NotesApplication;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class NotesModal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Lob
	@Column(nullable = false, length = 65000)
	private String title;

	@Lob
	@Column(nullable = false, length = 65000)
	private String description;

	public NotesModal() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NotesModal(String title, String description) {
		super();
		this.title = title;
		this.description = description;
	}

	public NotesModal(int id, String title, String description) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
