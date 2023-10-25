import { AnimatePresence, motion } from 'framer-motion';

export default function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence mode='wait'>
      {showModal && (
        <motion.div
          className='h-full w-full fixed left-0 right-0 flex items-center justify-center z-50'
          style={{
            backdropFilter: 'blur(10px)'
          }}
        >
          <motion.div
            className='h-[200px] w-[300px] bg-red-500 rounded-2xl '
            
          >

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};