import OurTeam from "./components/our-team/OurTeam";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/contact-us/ContactUs";
import Chronoline from "./components/chronoline/Chronoline";
import AllEvents from "./components/all-events-page/AllEvents";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
// Technical Events
import CelestraCoding from "./technical-events/CelestraCoding";
import Debugging from "./technical-events/Debugging";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/chronoline" element={<Chronoline />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Technical-Events */}
        <Route path="/events/celestra-coding" element={<CelestraCoding />} />
        <Route path="/events/debugging" element={<Debugging />} />
      </Routes>
    </>
  );
}

export default App;
