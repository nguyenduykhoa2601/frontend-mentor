import React, { useState } from 'react';

import { IconCloseMenu } from '../../../assets/Lesson2/svg/IconCloseMenu';
import { IconDown } from '../../../assets/Lesson2/svg/IconDown';
import { IconMenu } from '../../../assets/Lesson2/svg/IconMenu';
import { IconUp } from '../../../assets/Lesson2/svg/IconUp';
import { Logo } from '../../../assets/Lesson2/svg/Logo';
import { MenuAuthLesson2, MenuLesson2 } from '../../../constants/Lesson2';
import { checkTypeMenu } from '../../../helpers';

import './HeaderLesson2.scss';

const HeaderLesson2: React.FC<any> = () => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);

  return (
    <div className='header-lesson2'>
      <div className='header-lesson2__left'>
        <div className='header-lesson2__left-logo'>
          <Logo />
        </div>
      </div>
      {isOpenMenu && <div className='overlay-modal'></div>}
      <div
        className='header-lesson2__right'
        style={{
          animationName: isOpenMenu
            ? 'animationMenuAppear'
            : 'animationMenuHide',
        }}
        id='idMenuMobile'
      >
        <div
          className='header-lesson2__close'
          onClick={() => {
            setIsOpenMenu(false);
          }}
        >
          <IconCloseMenu />
        </div>
        <ul className='header-lesson2__right-menu-left'>
          {MenuLesson2.map((item, index) => (
            <li
              key={index}
              className='header-lesson2__right-item'
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <div
                className='header-lesson2__right-item--name'
                style={{ minWidth: '120px' }}
              >
                <span>{item.name} </span>
                {item.items.length > 0 && (
                  <span>
                    {hoverIndex !== index ? <IconDown /> : <IconUp />}
                  </span>
                )}
              </div>
              {item.items.length > 0 && (
                <ul className='header-lesson2__right-item list-item-hover'>
                  {item.items.map((itemMenu: any, index: number) => (
                    <li
                      className='header-lesson2__right-item item-hover'
                      key={index}
                    >
                      {checkTypeMenu(itemMenu) && (
                        <div className='header-lesson2__right-item--icon'>
                          {itemMenu?.icon}
                        </div>
                      )}
                      <div className='header-lesson2__right-item--name'>
                        {checkTypeMenu(itemMenu) ? itemMenu?.name : itemMenu}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <ul className='header-lesson2__right-menu-right'>
          {MenuAuthLesson2.map((item, index) => {
            return (
              <li key={index} className='header-lesson2__right-menu-right-item'>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className='header-lesson2__right-icon-menu'
        onClick={() => {
          setIsOpenMenu(true);
        }}
      >
        <IconMenu />
      </div>
    </div>
  );
};

export default HeaderLesson2;
