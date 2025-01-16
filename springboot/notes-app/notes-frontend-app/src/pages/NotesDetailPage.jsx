import React from "react";
import { useParams } from "react-router-dom";
import NoteDetailsComponent from "../components/noteDetailsPageComponents/NoteDetailsComponent";
import UpdateNoteButtonComponent from "../components/noteDetailsPageComponents/UpdateNoteButtonComponent";

const NotesDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <NoteDetailsComponent id={id} />
      <UpdateNoteButtonComponent id={id} />
    </>
  );
};

export default NotesDetailPage;
