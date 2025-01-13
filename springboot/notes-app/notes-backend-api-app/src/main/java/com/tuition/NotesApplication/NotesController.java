package com.tuition.NotesApplication;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class NotesController {

	@Autowired
	NotesService notesService;

	@GetMapping("/")
	public String helloWorld() {
		return "Hello World, this is my first notes project";
	}

//	to get all the notes
	@GetMapping("/getAllNotes")
	public List<NotesModal> getAllNotes() {
		return notesService.getAllNotes();
	}

// to get specific note
	@GetMapping("/getNote/{id}")
	public NotesModal getNote(@PathVariable int id) {
		return notesService.getNote(id);
	}

// to add a new note
	@PostMapping("/addNote")
	public NotesModal addNote(@RequestBody NotesModal note) {
		return notesService.addNote(note);
	}

// to update the note
	@PutMapping("/updateNote")
	public NotesModal updateNote(@RequestBody NotesModal note) {
		return notesService.updateNote(note);
	}

// to delete the note
	@DeleteMapping("/deleteNote/{id}")
	public void deleteNote(@PathVariable int id) {
		notesService.deleteNote(id);
	}

}
