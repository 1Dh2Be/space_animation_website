import { color, motion } from "motion/react";
import { SiSpacex } from "react-icons/si";

const Nav = () => {
  return (
    <nav className="fixed z-20 top-5 w-full mt-5 flex justify-center items-center">
      <ul className="flex items-center gap-4 bg-zinc-900 px-3 rounded-lg border border-[#383939]">
        <li>
          <SiSpacex color="white" size="45px" />
        </li>
        <li>
          <FlipLink href="/">Home</FlipLink>
        </li>
        <li>
          <FlipLink href="/">About</FlipLink>
        </li>
        <li>
          <FlipLink href="/">Pricing</FlipLink>
        </li>
        <motion.li
          {...anim(buttonVariants)}
          className="relative border border-[#383939] rounded-lg overflow-hidden"
        >
          <motion.a
            initial="initial"
            whileHover="hover"
            href="/"
            className="relative py-1 px-3 block w-full h-full"
          >
            <motion.span variants={textVariant} className="relative z-10">
              Join waitlist
            </motion.span>
            <motion.div
              variants={backgroundVariants}
              className="absolute inset-0 bg-white"
            ></motion.div>
          </motion.a>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Nav;

const anim = (variants) => {
  return {
    initial: "initial",
    whileHover: "hover",
    variants,
  };
};

const linkVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.85, 0, 0.15, 1],
    },
  },
};

const linkVariant2 = {
  initial: {
    color: "#6f6e6f",
    y: 20,
  },
  hover: {
    color: "#fff",
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.85, 0, 0.15, 1],
      delay: 0.1,
    },
  },
};

const buttonVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const textVariant = {
  initial: { color: "#fff" },
  hover: {
    color: "#000",
    transition: {
      duration: 0.2,
    },
  },
};

const backgroundVariants = {
  initial: {
    y: "100%",
  },
  hover: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease: [0.85, 0, 0.15, 1],
    },
  },
};

const FlipText = ({ children, variant, position }) => {
  return (
    <motion.div variants={variant} className={`inset-0 ${position}`}>
      {children}
    </motion.div>
  );
};

const FlipLink = ({ href, children }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      className="whitespace-nowrap relative block overflow-hidden"
      href={href}
    >
      <FlipText variant={linkVariant} position="relative">
        {children}
      </FlipText>
      <FlipText variant={linkVariant2} position="absolute">
        {children}
      </FlipText>
    </motion.a>
  );
};
