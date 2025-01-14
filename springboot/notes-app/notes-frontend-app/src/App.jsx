import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotesDetailPage from "./pages/NotesDetailPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/noteDetails/:id" element={<NotesDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
