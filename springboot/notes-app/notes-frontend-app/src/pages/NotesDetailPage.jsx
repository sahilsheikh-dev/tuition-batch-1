import React from "react";
import { useParams } from "react-router-dom";
import NoteDetailsComponent from "../components/noteDetailsPageComponents/NoteDetailsComponent";

const NotesDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <NoteDetailsComponent id={id} />
    </>
  );
};

export default NotesDetailPage;
