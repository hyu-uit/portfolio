import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Language = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Language Proficiency</p>
        <h2 className={styles.sectionHeadText}>Languages</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <div className='mb-10'>
          <h3 className='text-white text-[24px] font-bold'>English</h3>
          <p className='text-secondary text-[16px] font-semibold'>
            Professional Working Proficiency
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Language, 'language');
