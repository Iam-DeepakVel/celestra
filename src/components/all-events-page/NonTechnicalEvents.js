import EventCard from "../../common/EventCard";
import { nonTechnicalEvents } from "../../constants/allEvents-summary";

export default function NonTechnicalEvents() {
  return (
    <>
      <div className="celestraHeroFont text-center">
        <h2 className="text-3xl font-bold tracking-wider text-white sm:text-4xl">
        <span className="text-5xl text-red-600">N</span>on - <span className="text-5xl text-red-600">T</span>echnical <span className="text-5xl text-red-600">E</span>vents 
        </h2>
        <p className="mt-2 text-lg leading-8 text-white tracking-wider">
          unleash your knowledge with our non-technical events!!
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl px-8 auto-rows-fr grid-cols-1 gap-12 sm:mt-20 lg:mx-auto lg:max-w-[90%] lg:grid-cols-3">
        {nonTechnicalEvents?.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </>
  );
}
