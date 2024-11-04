import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent/CardComponent";

function ApiFetchComponent() {
  const [apiData, setApiData] = useState([]);

  function fetchApiData() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <>
      {apiData.map((data, key) => (
        <CardComponent
          key={key}
          imgUrl={data.picture.large}
          name={data.name.title + " " + data.name.first + " " + data.name.last}
          email={data.email}
        />
      ))}

      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <button onClick={() => fetchApiData()}>Refresh Details</button>
      </div>
    </>
  );
}

export default ApiFetchComponent;
