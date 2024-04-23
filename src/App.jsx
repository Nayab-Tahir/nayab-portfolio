import "./App.css";
import Ruler from "./components/Ruler/Ruler";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import ResumePage from "./Pages/ResumePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Ruler />
      <Header />
      <Routes>
        <Route path="/nayab-portfolio/" element={<HomePage />} />
        <Route path="/nayab-portfolio/about" element={<AboutPage />} />
        <Route path="/nayab-portfolio/services" element={<ServicesPage />} />
        <Route path="/nayab-portfolio/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </>
  );
}
