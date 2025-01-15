import React from "react";

const NotesCard = ({ id, title, deleteNotes }) => {
  const deleteNote = () => {
    if (confirm("Do you really wants to delete this note?") == true) {
      deleteNotes(id);
    } else {
      alert("Not Deleted");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#FAFAFA",
          color: "#010101",
          padding: "1px 20px 1px 20px",
          margin: "10px 0px",
          borderRadius: "10px",
          textAlign: "left",
          maxWidth: "700px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #D3D3D3",
        }}
      >
        <a href={"/noteDetails/" + id}>
          <h2 style={{ color: "#010101" }}># {title}</h2>
        </a>

        <button
          style={{
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => deleteNote()}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default NotesCard;
