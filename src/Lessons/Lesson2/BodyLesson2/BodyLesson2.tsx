import React from 'react';

import BackgroundDesk from '../../../assets/Lesson2/images/BackgroundDesk.png';
import { IconAudiophile } from '../../../assets/Lesson2/svg/IconAudiophile';
import { IconDatabiz } from '../../../assets/Lesson2/svg/IconDatabiz';
import { IconMaker } from '../../../assets/Lesson2/svg/IconMaker';
import { IconMeet } from '../../../assets/Lesson2/svg/IconMeet';

import './BodyLesson2.scss';

const BodyLesson2: React.FC<any> = () => {
  return (
    <div className='body-lesson2'>
      <div className='body-lesson2-info'>
        <div className='body-lesson2-info-title'>Make remote work</div>
        <div className='body-lesson2-info-text'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </div>
        <div className='body-lesson2-info-learn'>Learn more</div>
        <ul className='body-lesson2-info-list-logo'>
          <li className='body-lesson2-info-list-logo-item'>
            <IconDatabiz />
          </li>
          <li className='body-lesson2-info-list-logo-item'>
            <IconAudiophile />
          </li>
          <li className='body-lesson2-info-list-logo-item'>
            <IconMeet />
          </li>
          <li className='body-lesson2-info-list-logo-item'>
            <IconMaker />
          </li>
        </ul>
      </div>

      <div className='body-lesson2-bg'>
        <img alt='' />
      </div>
    </div>
  );
};

export default BodyLesson2;
