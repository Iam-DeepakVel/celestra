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
import ReverseCoding from "./technical-events/ReverseCoding";
import CodeObfuscation from "./technical-events/CodeObfuscation";
import Codejam from "./technical-events/CodeJam";
import WebDesign from "./technical-events/WebDesign";
import Ideathon from "./technical-events/Ideathon";

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
        <Route path="/events/reversecoding" element={<ReverseCoding />} />
        <Route path="/events/codeObfuscation" element={<CodeObfuscation />} />
        <Route path="/events/codeJam" element={<Codejam />} />
        <Route path="/events/webDesign" element={<WebDesign />} />
        <Route path="/events/ideathon" element={<Ideathon />} />
      </Routes>
    </>
  );
}

export default App;
