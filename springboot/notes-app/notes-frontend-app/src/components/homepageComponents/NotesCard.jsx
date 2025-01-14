import React from "react";

const NotesCard = ({ id, title }) => {
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
        }}
      >
        <h2># {title}</h2>
      </div>
    </>
  );
};

export default NotesCard;
