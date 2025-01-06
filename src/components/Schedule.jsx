import { PiMapPinSimpleFill } from "react-icons/pi";

const Schedule = () => {
  return (
    <section className="h-[150vh] w-3/5 mx-auto py-48">
      <h1 className="text-white lg:text-4xl font-extrabold pb-28">
        LAUNCH SCHEDULE
      </h1>
      <div>
        <ScheduleItem name="NG-21" date="Dec 9th" state="Florida" />
        <ScheduleItem name="Starlink" date="Dec 20th" state="Texas" />
        <ScheduleItem name="Starlink" date="Jan 13th" state="Florida" />
        <ScheduleItem name="Turksat 6A" date="Feb 22nd" state="Florida" />
        <ScheduleItem name="NROL-186" date="Mar 1st" state="California" />
        <ScheduleItem name="GOES-U" date="Mar 8th" state="California" />
        <ScheduleItem name="ASTRA 1P" date="Apr 8th" state="Texas" />
      </div>
    </section>
  );
};

export default Schedule;

const ScheduleItem = ({ name, date, state }) => {
  return (
    <div>
      <div>
        <span>{name}</span>
        <span>{date}</span>
      </div>
      <div>
        <span>{state}</span>
        <PiMapPinSimpleFill color="white" />
      </div>
    </div>
  );
};
