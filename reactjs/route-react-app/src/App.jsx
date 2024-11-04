import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NavBar from "./components/commonComponents/navBarComponent/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about/:id" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>

      <NavBar />
    </>
  );
}

export default App;
