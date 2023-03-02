import EventCard from "../../common/EventCard";
import { flagshipEvents } from "../../constants/allEvents-summary";

export default function FlagshipEvents() {
  return (
    <>
      <div className="celestraHeroFont text-center">
        <h2 className="text-3xl font-bold tracking-wider text-white sm:text-4xl">
        <span className="text-5xl text-red-600">F</span>lagship <span className="text-5xl text-red-600">E</span>vents
        </h2>
        <p className="mt-2 text-lg leading-8 text-white tracking-wider">
          unleash your knowledge with our flagship events!!
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl px-8 auto-rows-fr grid-cols-1 gap-12 sm:mt-20 lg:mx-auto lg:max-w-[90%] lg:grid-cols-3">
        {flagshipEvents?.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </>
  );
}
