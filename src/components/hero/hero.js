import logo from "../../assets/logo.png";
import CIT_Logo from "../../assets/CIT_Logo.png";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div
        id="hero-container"
        className="flex flex-col pb-10 items-center p-4 h-screen max-w-screen-7xl mx-auto"
      >
        {/* CIT Logo */}
        <div className="mb-3 lg:absolute lg:left-3 lg:top-4">
          <img src={CIT_Logo} alt="CIT-LOGO" className="w-20 sm:w-32 lg:w-24" />
        </div>
        {/* Hero-Text */}
        <div className="text-white md:mt-4  text-center celestraHeroFont tracking-widest">
          <h2 className="text-xl tracking-widest md:tracking-wide sm:text-3xl lg:text-5xl mb-2 lg:mb-4">
            <span className="text-3xl md:text-4xl lg:text-6xl">C</span>oimbatore{" "}
            <span className="text-3xl md:text-4xl lg:text-6xl">I</span>nstitute
            of <span className="text-3xl md:text-4xl lg:text-6xl">T</span>
            echnology
          </h2>
          <h5 className="text-md sm:text-xl lg:text-3xl">
            Department of{" "}
            <span className="text-3xl md:text-4xl lg:text-5xl text-red-500">I</span>
            nformation{" "}
            <span className="text-3xl md:text-4xl lg:text-5xl text-red-500">T</span>
            echnology
          </h5>
        </div>

        <div className="flex flex-col-reverse lg:mt-12 lg:flex-row w-full justify-around px-10 items-center">
          <div className="flex flex-col mt-4  justify-center items-center gap-7 text-white celestraHeroFont tracking-widest">
            <h2 className="text-center text-xl dynamic-text-shadow lg:text-3xl">
              Prepare Yourself for the
            </h2>
            <h1 className="text-center text-2xl lg:text-4xl dynamic-text-shadow">
              Big Event
            </h1>
            <h1 className="text-center text-4xl  dynamic-celestra-shadow lg:text-7xl tracking-wider  ">
              <span className="text-6xl lg:text-8xl dynamic-celestra-white-shadow-mobile lg:dynamic-celestra-white-shadow text-red-500">
                C
              </span>
              ELESTR<span className="text-6xl lg:text-8xl">A</span>
            </h1>
            <h1 className="text-4xl lg:text-7xl tracking-wider">
              2<span className="text-red-500">k</span>23
            </h1>
            <button className="w-[90%] lg:w-[60%] h-14 rounded-xl text-white text-xl tracking-widest bg-gradient-to-b from-[#fb3e38] via-[#fffdfd00] to-[#fb3e38]">
              <span className="text-red-500 text-3xl">J</span>oin the  Exc
              <span className="text-3xl text-red-500">it</span>ement
            </button>
          </div>
          {/* Celestra Logo */}
          <img
            src={logo}
            alt="celestra-logo"
            id="logo"
            className=" rounded-full w-[80%] lg:max-w-[40%]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
