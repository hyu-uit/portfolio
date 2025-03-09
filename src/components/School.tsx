import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { uit, se, gdsc } from '../assets';

const School: React.FC = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`-mt-20 py-14 ${styles.paddingX} flex flex-col gap-5`}>
        <motion.div variants={textVariant(0)}>
          <p className={styles.sectionSubText}>My Education</p>
          <h2 className={styles.sectionHeadText}>University.</h2>
        </motion.div>
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
              Bachelor of Software Engineering
            </p>
            <div className='mt-3 flex items-center gap-2'>
              <span className='text-white font-medium'>GPA:</span>
              <span className='text-[#00ff00] font-bold text-[20px]'>
                8.3/10
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={textVariant(0)} className='mt-10'>
          <h3 className='text-white font-black md:text-[35px] sm:text-[25px] xs:text-[20px] text-[15px]'>
            Activities.
          </h3>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 0.75)}
          className='bg-black-200 p-5 rounded-3xl w-full'
        >
          <div className='flex items-center gap-3'>
            <img src={gdsc} alt='GDSC' className='w-20 h-20 object-contain' />
            <div className='ml-[20px]'>
              <h6 className='text-white text-[24px] font-bold'>
                Google Developer Student Clubs
              </h6>
              <p className='text-secondary text-[16px]'>2022 - 2023</p>
            </div>
          </div>

          <div className='mt-5'>
            <p className='text-white text-[18px] tracking-wider'>
              Core Team Member
            </p>
            <ul className='mt-3 list-disc ml-5 space-y-2'>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                Heade of Design & Media
              </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                Attending GDSC Solution Challange
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 0.75)}
          className='bg-black-200 p-5 rounded-3xl w-full'
        >
          <div className='flex items-center gap-3'>
            <img
              src={se}
              alt='GDSC'
              className='w-[100px] h-[100px] object-contain'
            />
            <div>
              <h6 className='text-white text-[24px] font-bold'>
                Game UIT Hackathon 2022 Contest
              </h6>
              <p className='text-secondary text-[16px]'>2022</p>
            </div>
          </div>

          <div className='mt-5'>
            <p className='text-white text-[18px] tracking-wider'>
              Lead of Design Team
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(School, 'education');
