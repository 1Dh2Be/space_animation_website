import { motion } from "motion/react";
import { LuMapPin } from "react-icons/lu";

const anim = (variants) => {
  return {
    initial: "initial",
    whileInView: "whileInView",
    variants,
  };
};

const scheduleVariant = {
  initial: {
    y: 48,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Schedule = () => {
  return (
    <section className="h-[150vh] w-11/12 lg:w-3/5 mx-auto lg:py-32 bg-zinc-950">
      <motion.h1
        {...anim(scheduleVariant)}
        className="text-white lg:text-4xl font-extrabold pb-28"
      >
        LAUNCH SCHEDULE
      </motion.h1>
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
    <motion.div
      {...anim(scheduleVariant)}
      className="flex justify-between items-center mb-4 border-b border-gray-500"
    >
      <div className="flex flex-col py-7 px-2">
        <span className="lg:text-xl">{name}</span>
        <span className="text-gray-400">{date}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-400">{state}</span>
        <LuMapPin color="#9ca3af" />
      </div>
    </motion.div>
  );
};
