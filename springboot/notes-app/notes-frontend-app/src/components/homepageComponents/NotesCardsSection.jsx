import React, { useEffect, useState } from "react";
import NotesCard from "./NotesCard";

const NotesCardsSection = () => {
  const URL = "http://localhost:3000/";
  const [notes, setNotes] = useState();

  const fetchNotes = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(URL + "getAllNotes", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNotes(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <div
        style={{
          minHeight: "400px",
          padding: "15px",
          border: "solid 2px #FAFAFA",
          borderRadius: "10px",
          maxHeight: "65vh",
          overflowY: "scroll",
        }}
      >
        {notes?.map((item, key) => (
          <NotesCard key={key} id={item.id} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default NotesCardsSection;
