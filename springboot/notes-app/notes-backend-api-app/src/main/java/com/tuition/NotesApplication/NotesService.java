package com.tuition.NotesApplication;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotesService {

	@Autowired
	NotesDAO notesDAO;

	public List<NotesModal> getAllNotes() {
		return notesDAO.findAll();
	}

	public NotesModal getNote(int id) {
		return notesDAO.findById(id).get();
	}

	public NotesModal addNote(NotesModal note) {
		return notesDAO.save(note);
	}

	public NotesModal updateNote(NotesModal note) {
		return notesDAO.save(note);
	}

	public void deleteNote(int id) {
		notesDAO.deleteById(id);
	}

}
