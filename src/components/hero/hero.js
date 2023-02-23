import logo from "../../assets/logo.png";
import CIT_Logo from "../../assets/CIT_Logo.png";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div
        id="hero-container"
        className="flex flex-col items-center p-4 min-h-screen max-w-screen-7xl mx-auto"
      >
        {/* CIT Logo */}
        <div className="mb-3 lg:absolute lg:left-3 lg:top-4">
          <img src={CIT_Logo} alt="CIT-LOGO" className="w-20 sm:w-32 lg:w-24" />
        </div>
        {/* Hero-Text */}
        <div className="text-white text-center celestraHeroFont tracking-widest">
          <h2 className="text-xl sm:text-3xl lg:text-5xl mb-2 lg:mb-4">
            Coimbatore Institute of Technology
          </h2>
          <h5 className="text-md sm:text-xl lg:text-3xl">
            Department of Information Technology
          </h5>
        </div>

        <div className="flex flex-col-reverse lg:flex-row w-full justify-around px-10 items-center">
          {/*  */}
          <div className="flex flex-col mt-4 justify-center items-center gap-7 text-white celestraHeroFont tracking-widest">
            <h2 className="text-center text-xl  lg:text-4xl">Prepare Yourself for the</h2>
            <h1 className="text-center text-2xl lg:text-5xl">Big Event</h1>
            <h1 className="text-center text-4xl lg:text-7xl tracking-wider ">
            <span className="text-6xl lg:text-8xl   text-red-500">C</span>ELESTR<span className="text-6xl lg:text-8xl">A</span>
            </h1>
            <h1 className="text-4xl lg:text-7xl tracking-wider">2<span className="text-red-500">k</span>23</h1>
          </div>
          {/* Celestra Logo */}
          <img
            src={logo}
            alt="celestra-logo"
            id="logo"
            className=" rounded-full lg:w-[40%]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
