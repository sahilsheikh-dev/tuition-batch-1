import React from "react";
import NotesCardsSection from "../components/homepageComponents/NotesCardsSection";
import AddNoteButtonComponent from "../components/homepageComponents/AddNoteButtonComponent";

const Homepage = () => {
  return (
    <>
      <h1>My Notes Application</h1>
      <NotesCardsSection />
      <AddNoteButtonComponent />
    </>
  );
};

export default Homepage;
