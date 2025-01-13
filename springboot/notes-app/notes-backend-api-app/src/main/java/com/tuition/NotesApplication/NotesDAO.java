package com.tuition.NotesApplication;

import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesDAO extends JpaRepository<NotesModal, Integer> {

}
