import React from 'react';

import BodyLesson2 from './BodyLesson2/BodyLesson2';
import HeaderLesson2 from './HeaderLesson2/HeaderLesson2';

import './Lesson2.scss';

const Lesson2: React.FC<any> = () => {
  return (
    <div className='lesson2'>
      <HeaderLesson2 />
      <BodyLesson2 />
    </div>
  );
};

export default Lesson2;
