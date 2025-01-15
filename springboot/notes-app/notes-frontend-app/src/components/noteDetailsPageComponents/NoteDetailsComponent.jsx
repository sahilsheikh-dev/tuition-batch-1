import React, { useEffect, useState } from "react";

const NoteDetailsComponent = ({ id }) => {
  const BASE_URL = "http://localhost:3000/";
  const [note, setNote] = useState({});

  const fetchNote = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(BASE_URL + "getNote/" + id, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNote(data);
        console.log(note.json);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <>
      <div>
        <h1>{note.title}</h1>

        <p
          style={{
            minHeight: "400px",
            maxHeight: "65vh",
            maxWidth: "700px",
            padding: "15px",
          }}
        >
          {note.description}
        </p>
      </div>
    </>
  );
};

export default NoteDetailsComponent;
