import React from 'react';
import {reactjs, android, nextjs} from '../assets';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        <div className='w-40 h-40 relative group' key={'React JS'}>
            <BallCanvas icon={reactjs} />
            <div className='absolute -top-16 left-1/2 -translate-x-1/2 hidden group-hover:block'>
              <div className='relative px-4 py-2 text-white bg-[#1d1836] rounded-lg text-sm font-medium shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <div className='text-center whitespace-nowrap'>
                 React JS
                </div>
                <div className='absolute left-1/2 -bottom-3 w-0 h-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#1d1836]'></div>
              </div>
            </div>
          </div>
        <div className='w-40 h-40 relative group' key={'Next.js'}>
            <BallCanvas icon={nextjs} />
            <div className='absolute -top-16 left-1/2 -translate-x-1/2 hidden group-hover:block'>
              <div className='relative px-4 py-2 text-white bg-[#1d1836] rounded-lg text-sm font-medium shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <div className='text-center whitespace-nowrap'>
                 Next.js
                </div>
                <div className='absolute left-1/2 -bottom-3 w-0 h-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#1d1836]'></div>
              </div>
            </div>
          </div>
        <div className='w-40 h-40 relative group' key={'Android'}>
            <BallCanvas icon={android} />
            <div className='absolute -top-16 left-1/2 -translate-x-1/2 hidden group-hover:block'>
              <div className='relative px-4 py-2 text-white bg-[#1d1836] rounded-lg text-sm font-medium shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <div className='text-center whitespace-nowrap'>
                 Android
                </div>
                <div className='absolute left-1/2 -bottom-3 w-0 h-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#1d1836]'></div>
              </div>
            </div>
          </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 relative group' key={technology.name}>
            <BallCanvas icon={technology.icon} />
  
            <div className='absolute -top-16 left-1/2 -translate-x-1/2 hidden group-hover:block'>
              <div className='relative px-4 py-2 text-white bg-[#1d1836] rounded-lg text-sm font-medium shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <div className='text-center whitespace-nowrap'>
                  {technology.name}
                </div>
                <div className='absolute left-1/2 -bottom-3 w-0 h-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#1d1836]'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');
