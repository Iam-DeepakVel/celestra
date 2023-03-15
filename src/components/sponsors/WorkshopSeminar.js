import bosch from "../../assets/sponsors/bosch.png";

export default function WorkshopSeminar() {
  return (
    <div className="bg-black-900 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-4xl tracking-wider font-semibold celestraHeroFont leading-8 text-white"> 
            <span className="text-5xl text-red-500">S</span>eminar by
        </h2>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <img
            className="col-span-2 max-h-32  w-full object-contain lg:col-span-4"
            src={bosch}
            alt="bosch"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
