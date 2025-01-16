import React, { useState } from "react";

const AddNoteFormComponent = () => {
  const BASE_URL = "http://localhost:3000/";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNote = () => {
    const noteBody = {
      title: title,
      description: description,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteBody),
    };

    fetch(BASE_URL + "addNote", options)
      .then((res) => {
        if (res.ok) {
          alert("Note Added");
          window.location.href = "/";
        } else {
          alert("Error while Adding a Note");
        }
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });
  };

  return (
    <>
      <div>
        <h1>Add a New Note</h1>
        <div style={{ margin: "10px", padding: "10px" }}>
          <label style={{ fontSize: "18px" }} for="title">
            Title:
          </label>{" "}
          <br />
          <input
            style={{
              margin: "10px",
              padding: "10px",
              border: "2px solid #FAFAFA",
              borderRadius: "5px",
              fontSize: "18px",
              width: "100%",
              maxWidth: "700px",
            }}
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label style={{ fontSize: "18px" }} for="description">
            Description:
          </label>{" "}
          <br />
          <textarea
            style={{
              margin: "10px",
              padding: "10px",
              border: "2px solid #FAFAFA",
              borderRadius: "5px",
              fontSize: "18px",
              width: "100%",
              maxWidth: "700px",
            }}
            id="description"
            name="description"
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button
          style={{
            margin: "10px",
            padding: "10px",
            border: "20x solid #FAFAFA",
            borderRadius: "5px",
            backgroundColor: "green",
          }}
          onClick={() => addNote()}
        >
          Add Note
        </button>
      </div>
    </>
  );
};

export default AddNoteFormComponent;
