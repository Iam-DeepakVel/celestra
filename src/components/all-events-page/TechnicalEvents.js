import EventCard from "../../common/EventCard";
import { technicalEvents } from "../../constants/allEvents-summary";

export default function TechnicalEvents() {
  return (
    <>
      <div className="celestraHeroFont text-center">
        <h2 className="text-3xl font-bold tracking-wider text-white sm:text-4xl">
          Technical Events
        </h2>
        <p className="mt-2 text-lg leading-8 text-white tracking-wider">
          unleash your knowledge with our technical events!!
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr px-8 grid-cols-1 gap-12  sm:mt-20 lg:mx-auto lg:max-w-[90%] lg:grid-cols-3">
        {technicalEvents?.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </>
  );
}
