import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { PiMapPinSimpleFill } from "react-icons/pi";

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <CenterImage />
    </div>
  );
};

export default Hero;

const CenterImage = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["170%", "100%"]
  );

  const clip1 = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const clip2 = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const clip3 = useTransform(scrollYProgress, [0, 1], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip2}%, ${clip3}% ${clip2}%, ${clip3}% ${clip3}%, ${clip1}% ${clip3}%)`;

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
