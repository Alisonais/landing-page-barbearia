'use client'
import { motion } from 'framer-motion';
import { pathVariants, svgVariants } from '../../svgAnimate';

export default function Linkedin({url}) {

  function handlelink(){
    window.open(url)
  }

  return (
    <motion.svg
      variants={svgVariants}
      initial='hidden'
      whileInView='visible'
      onClick={handlelink}
      className="cursor-pointer hover:scale-125 transition-all ease-in-out duration-500 "
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={pathVariants}
        d="M35 10.4444V25.5556C35 30.7715 30.7715 35 25.5556 35H10.4444C5.22843 35 1 30.7715 1 25.5556V10.4444C1 5.22843 5.22843 1 10.4444 1H25.5556C30.7715 1 35 5.22843 35 10.4444Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={pathVariants}
        d="M8.55566 27.4445V20.8334V14.2223"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={pathVariants}
        d="M16.1111 27.4445V21.3056M16.1111 21.3056V14.2223M16.1111 21.3056C16.1111 14.2223 27.4444 14.2223 27.4444 21.3056V27.4445"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={pathVariants}
        d="M8.55566 8.57445L8.57455 8.55347"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};
