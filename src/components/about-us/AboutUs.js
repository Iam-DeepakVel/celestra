import React from "react";
import "./about-us.css";
import C1 from "../../assets/c1.jpg";
import Anitha from "../../assets/staffs/anitha-mam.jpg";
import Arul from "../../assets/staffs/arul-sir.jpg";
import Devi from "../../assets/staffs/Devi_mam.jpg";
import Geetha from "../../assets/staffs/Geetha-mam.jpg";
import Sangeetha from "../../assets/staffs/M.Sangeetha.jpg";
import Malarvizhi from "../../assets/staffs/malarvizhi mam.jpg";
import Murali from "../../assets/staffs/murali-sir.jpg";
import NKK from "../../assets/staffs/nkk-sir.jpg";
import Poornima from "../../assets/staffs/poornima-mam.jpg";
import Principal from "../../assets/staffs/principal.jpg";
import Rajalakshimi from "../../assets/staffs/rajalakshimi-mam.jpg";
import Rajasree from "../../assets/staffs/Rajasree-mam.jpg";
import Thilagavathi from "../../assets/staffs/Thilaga-mam.jpg";

const About = () => {
  const people = [
    {
      name: "Dr.A.Rajeswari",
      role: "Principal",
      imageUrl: Principal,
    },
    {
      name: "Dr.N.K. Karthikeyan",
      role: "Professor & Head of the Department",
      imageUrl: NKK,
    },
    {
      name: "Dr.M.Rajalakshmi",
      role: "Associate Professor",
      imageUrl: Rajalakshimi,
    },
    {
      name: "Dr.M.Sangeetha",
      role: "Associate Professor",
      imageUrl: Sangeetha,
    },
    {
      name: "Dr.N.Anithadevi",
      role: "Assistant Professor",
      imageUrl: Anitha,
    },
    {
      name: "Ms.K.Malarvizhi",
      role: "Assistant Professor",
      imageUrl: Malarvizhi,
    },
    {
      name: "Ms.S.Poornima",
      role: "Assistant Professor",
      imageUrl: Poornima,
    },
    {
      name: "Mr.C.Murale",
      role: "Assistant Professor",
      imageUrl: Murali,
    },
    {
      name: "Dr.E.Arul",
      role: "Assistant Professor",
      imageUrl: Arul,
    },
    {
      name: "Dr.N.Geetha",
      role: "Assistant Professor",
      imageUrl: Geetha,
    },
    {
      name: "Ms.S.Rajasree",
      role: "Assistant Professor",
      imageUrl: Rajasree,
    },
    {
      name: "Ms.G.Thilagavathi",
      role: "Assistant Professor",
      imageUrl: Thilagavathi,
    },
    {
      name: "Ms.S.Devi",
      role: "Assistant Professor",
      imageUrl: Devi,
    },
  ];
  return (
    <div>
      {/* about section */}
      <div className="about">
        <div className="about-content">
          <img src={C1} alt="" />
          <div className="about-text">
            <h1 className="heading-text">About Us</h1>
            <h5 className="heading-small">
              Coimbatore institute of technology
            </h5>
            <p className="about-para">
              The V. Rangasamy Naidu Educational Trust devoted to the cause of
              promoting technical and scientific literacy, established
              Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil
              Nadu, South India in 1956. CIT is one of the most reputed and
              prestigious educational institutions in India. The Institute
              backed by World Class research and development over the years
              attained autonomous status in 1987
            </p>
            <button className="about-button" type="button">
              Know More
            </button>
          </div>
        </div>
      </div>
      {/* out Dept */}
      <div className="about">
        <div className="about-content flex-row-reverse">
          <img src={C1} alt="" />
          <div className="about-text">
            <h1 className="heading-text">Our Department</h1>
            <h5 className="heading-small">Information Technology</h5>
            <p className="about-para">
              The Department of Information of Technology was started in 2001
              with a vision to provide a place for Innovation, Scientific
              Discovery and New Technology to evolve as a Centre of Excellence
              for research and learning, integrating Computer and Information
              Sciences with Natural Sciences and Basic Engineering. The
              department prepares over 72 graduates (UG) every year to become
              leaders in diverse fields such as academia, industry and
              government.
            </p>
            <button className="about-button" type="button">
              Know More
            </button>
          </div>
        </div>
      </div>
      {/* cards section */}
      <div className="bg-black py-32" >
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-wider text-white sm:text-4xl">
              Our Sincere Thanks To
            </h2>
            <p className="mt-4 text-lg leading-8 text-white">
              We’re a dynamic group of individuals who are passionate about what
              we do.
            </p>
          </div>
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {people.map((person) => (
              <li key={person.name} className="bg-[#111111] rounded-xl">
                <img
                  className="mx-auto mt-6 h-56 w-56 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-[18px] font-semibold leading-7 tracking-wider text-white">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-white">{person.role}</p>
                <ul className="mt-6 flex justify-center gap-x-6">
                  <li></li>
                  <li></li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;