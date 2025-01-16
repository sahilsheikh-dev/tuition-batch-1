import React from "react";
import { useParams } from "react-router-dom";
import UpdateNoteFormComponent from "../components/UpdateNotePageComponents/UpdateNoteFormComponent";

const UpdateNotePage = () => {
  const { id } = useParams();

  return (
    <>
      <UpdateNoteFormComponent id={id} />
    </>
  );
};

export default UpdateNotePage;
