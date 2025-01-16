import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotesDetailPage from "./pages/NotesDetailPage";
import AddNotePage from "./pages/AddNotePage";
import UpdateNotePage from "./pages/UpdateNotePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/noteDetails/:id" element={<NotesDetailPage />} />
          <Route path="/addNote" element={<AddNotePage />} />
          <Route path="/updateNote/:id" element={<UpdateNotePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
