import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import HolidaysPage from "./pages/HolidaysPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import holidaysData from "./data/holidays.json";
import specialOffers from "./data/specialOffers.json";




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home items={holidaysData} specialOffers={specialOffers} />} />
        <Route path="/holidays" element={<HolidaysPage items={holidaysData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
