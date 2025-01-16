import React from "react";

const AddNoteButtonComponent = () => {
  return (
    <>
      <a
        href="/addNote"
        className="btn btn-primary"
        style={{
          position: "fixed",
          bottom: "10%",
          right: "20%",
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          height: "100px",
          width: "100px",
          border: "2px solid #FAFAFA",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: "1000",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "18px",
          }}
        >
          Add Note
        </span>
      </a>
    </>
  );
};

export default AddNoteButtonComponent;
