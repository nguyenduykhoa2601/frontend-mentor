import React from 'react';

import { dataLesson1 } from '../../constants/Lesson1';
import { findMaxMount } from '../../helpers';

import './Lesson1.scss';

const Lesson1: React.FC<any> = () => {
  return (
    <div className='main'>
      <div className='main__card'>
        <div className='main__card-header'>
          <div className='main__card-header-title'>
            <div className='main__card-header-text'>My balance</div>
            <div className='main__card-header-number'>$921.48</div>
          </div>
          <div className='main__card-header-icon'>
            <svg
              width='72'
              height='48'
              viewBox='0 0 72 48'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g fill='none' fillRule='evenodd'>
                <circle fill='#382314' cx='48' cy='24' r='24' />
                <circle stroke='#FFF' strokeWidth='2' cx='24' cy='24' r='23' />
              </g>
            </svg>
          </div>
        </div>
        <div className='main__card-body'>
          <div className='main__card-body-header'>Spending - Last 7 days</div>
          <div className='main__card-body-chart'>
            {dataLesson1.map((item, index) => (
              <div
                className='main__card-body-chart--item'
                style={{
                  marginTop: `${-item.amount}px`,
                  backgroundColor:
                    item.amount === findMaxMount(dataLesson1)
                      ? 'hsl(186, 34%, 60%)'
                      : 'auto',
                }}
                key={index}
              >
                <div className='main__card-body-chart--item hover-item'>
                  ${item.amount}
                </div>
              </div>
            ))}
          </div>
          <div className='main__card-body-day'>
            {dataLesson1.map((item, index) => (
              <div className='main__card-body-day--item' key={index}>
                {item.day}
              </div>
            ))}
          </div>
          <div className='main__card-line' />
          <div className='main__card-footer'>
            <div className='main__card-footer-title'>Total this month</div>
            <div className='main__card-footer-detail'>
              <div className='main__card-footer-total'>$478.33</div>
              <div className='main__card-footer-increase'>
                <div className='main__card-footer-increase--number'>+2.4%</div>
                <div className='main__card-footer-increase--from'>
                  from last month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson1;
