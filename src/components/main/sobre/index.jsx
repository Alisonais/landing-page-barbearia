'use client'
import Title from '@/components/Title';
import { motion } from 'framer-motion';
import Image from 'next/image';
import imagemSobre1 from '../../../../public/imagem-sobre-1.png';
import imagemSobre2 from '../../../../public/imagem-sobre-2.png';
import imagemSobre3 from '../../../../public/imagem-sobre-3.png';
export default function Sobre() {

  const cardVariants = {
    hidden: {
      x: 300,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const imageCenterVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageLeftVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      }
    }
  };

  const imageRightVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      }
    }
  };

  return (
    <section
      className=" bg-azulEscuro h-[100vh] flex flex-col justify-evenly px-4 py-8 "
    >
      <motion.div
        className='flex justify-center relative'
      // variants={cardVariants}
      // initial='hidden'
      // whileInView='visible'
      >

        <motion.div
          className='md:absolute md:top-14 md:z-10'
          variants={imageLeftVariant}
          initial='hidden'
          whileInView='visible'
        >
          <Image
            alt="barbearia"
            className="w-[300px] rotate-3 md:w-[350px] rounded-lg md:-rotate-6 md:translate-x-[-45%] lg:translate-x-[-80%] lg:w-[350px] "
            src={imagemSobre1}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className='absolute'
          variants={imageCenterVariant}
          initial='hidden'
          whileInView='visible'
        >
          <Image
            alt="barbearia"
            className=" w-[300px] hidden lg:inline md:w-[250px] rounded-lg z-[5] "
            src={imagemSobre3}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className='absolute'
          variants={imageRightVariant}
          initial='hidden'
          whileInView='visible'
        >
          <Image
            alt="barbearia"
            className=" w-full hidden md:inline md:w-[250px] rounded-lg md:rotate-6 md:translate-x-[45%] lg:translate-x-[95%] "
            src={imagemSobre2}
            loading="lazy"
          />
        </motion.div>

      </motion.div>

      <h2 className='text-white text-[40px] text-center font-bold md:pt-72 ' >
        <Title
          title='Sobre'
        />
      </h2>

      <p className='text-white text-center md:p-8 md:px-20 ' >
        Lorem ipsum dolor sit amet consectetur. Sed vitae egestas risus in eleifend porttitor nam. Amet ut dictumst commodo aliquam eget augue at mi. Commodo sollicitudin ultrices ut nulla venenatis quam at.
      </p>
    </section>
  );
};