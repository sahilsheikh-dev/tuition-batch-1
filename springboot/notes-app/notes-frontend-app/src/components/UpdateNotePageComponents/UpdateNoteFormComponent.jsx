import React, { useEffect, useState } from "react";

const UpdateNoteFormComponent = ({ id }) => {
  const BASE_URL = "http://localhost:3000/";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateNote = () => {
    const noteBody = {
      id: id,
      title: title,
      description: description,
    };

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteBody),
    };

    fetch(BASE_URL + "updateNote", options)
      .then((res) => {
        if (res.ok) {
          alert("Note Updated");
          window.location.href = "/";
        } else {
          alert("Error while Updating a Note");
        }
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });
  };

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

        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <>
      <div>
        <h1>Edit your Note</h1>
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
            value={title}
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
            value={description}
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
            backgroundColor: "blue",
          }}
          onClick={() => updateNote()}
        >
          Update Note
        </button>
      </div>
    </>
  );
};

export default UpdateNoteFormComponent;
