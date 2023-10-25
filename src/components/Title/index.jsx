import { motion } from "framer-motion";

export default function Title({title}) {

  const h1Container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 1 },
    },
  };

  const titleVariants = {
    hidden: {
      display: 'inline-block',
      opacity: 0,
      x: 30,
    },
    show: {
      display: 'inline-block',
      opacity: 1,
      x: 0,
      transition: {
        // type: 'tween',
        // ease: 'easeIn',
      },
    },
  };

  return (
    <motion.div
    >
      <motion.h1
        variants={h1Container}
        initial="hidden"
        whileInView="show"
      >
        {Array.from(title).map((letra, index) => (
          <motion.span
            variants={titleVariants}
            key={index}
          >
            {letra === ' ' ? '\u00A0' : letra}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};