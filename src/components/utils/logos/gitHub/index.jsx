'use client'
import { motion } from "framer-motion";
import { pathVariants, svgVariants } from "../../svgAnimate";

export default function GitHub({url}) {
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
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={pathVariants}
        d="M17 33C25.8365 33 33 25.8365 33 17C33 8.16344 25.8365 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8365 8.16344 33 17 33Z"
        stroke="content"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={pathVariants}
        d="M20.7339 28.2005V25.2197C20.7739 24.7245 20.7053 24.2266 20.5323 23.7592C20.3595 23.2919 20.0864 22.8656 19.7313 22.509C23.0806 22.1455 26.6006 20.9095 26.6006 15.2388C26.6003 13.7886 26.0275 12.3941 25.0006 11.3439C25.4869 10.0753 25.4525 8.67296 24.9046 7.42834C24.9046 7.42834 23.6459 7.06483 20.7339 8.96549C18.2891 8.32032 15.7121 8.32032 13.2673 8.96549C10.3553 7.06483 9.0966 7.42834 9.0966 7.42834C8.54872 8.67296 8.51436 10.0753 9.0006 11.3439C7.96607 12.4019 7.39263 13.809 7.40059 15.2698C7.40059 20.8991 10.9206 22.1351 14.2699 22.54C13.919 22.8932 13.6483 23.3143 13.4756 23.776C13.3028 24.2376 13.2319 24.7295 13.2673 25.2197V28.2005"
        stroke="content"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={pathVariants}
        d="M13.2664 26.1226C10.0664 27.1333 7.39968 26.1226 5.79968 23.0067"
        stroke="content"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};