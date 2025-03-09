import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { uit } from '../assets';

const School: React.FC = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant(0)}>
          <p className={styles.sectionSubText}>My Education</p>
          <h2 className={styles.sectionHeadText}>University.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <motion.div
          variants={fadeIn('up', 'spring', 0.1, 0.75)}
          className='bg-black-200 p-10 rounded-3xl w-full'
        >
          <div className='flex items-center gap-5'>
            <img src={uit} alt='UIT' className='w-20 h-20 object-contain' />
            <div>
              <h3 className='text-white text-[24px] font-bold'>
                University of Information Technology
              </h3>
              <p className='text-secondary text-[16px]'>2020 - 2024</p>
            </div>
          </div>

          <div className='mt-5'>
            <p className='text-white text-[18px] tracking-wider'>
              Bachelor of Information Technology
            </p>
            <div className='mt-3 flex items-center gap-2'>
              <span className='text-white font-medium'>GPA:</span>
              <span className='text-[#00ff00] font-bold text-[20px]'>
                8.3/10
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(School, 'education');
