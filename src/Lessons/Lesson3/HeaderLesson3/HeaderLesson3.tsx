import { useContext, useState } from 'react';
import { IconCart } from '../../../assets/Lesson3/svg/IconCart';
import { IconClose } from '../../../assets/Lesson3/svg/IconClose';
import { IconMenu } from '../../../assets/Lesson3/svg/IconMenu';
import { dataLesson3, MenuLesson3 } from '../../../constants/Lesson3';
import { GlobalStateLesson3 } from '../GlobalStateLesson3';
import CartLesson3 from './CartLesson3/CartLesson3';
import './HeaderLesson3.scss';

const HeaderLesson3: React.FC<any> = () => {
  const [currentHoverMenu, setCurrentHoverMenu] = useState<number>(-1);
  const [isHoverCart, setIsHoverCart] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  //@ts-ignore
  const [cart] = useContext(GlobalStateLesson3).cart;
  return (
    <div className='header-lesson3'>
      <div className='header-lesson3__left'>
        <div
          className='header-lesson3__left-icon-menu'
          onClick={() => setIsOpenMenu(true)}
        >
          <IconMenu />
        </div>
        <div className='header-lesson3__left-logo'>sneakers</div>
        <div
          className='overlay-lesson3'
          style={{ display: isOpenMenu ? 'block' : 'none' }}
        ></div>

        <ul
          className='header-lesson3__left-menu'
          style={{
            animationName: isOpenMenu
              ? 'animationMenuMobileFadeIn'
              : 'animationMenuMobileFadeOut',
          }}
        >
          <div
            className='header-lesson3__left-menu-close'
            onClick={() => {
              setIsOpenMenu(false);
            }}
          >
            <IconClose />
          </div>
          {MenuLesson3.map((item, index) => {
            return (
              <li
                className='header-lesson3__left-menu-item'
                key={index}
                onMouseLeave={() => {
                  setCurrentHoverMenu(-1);
                }}
                onMouseEnter={() => setCurrentHoverMenu(index)}
              >
                {item}
                <div
                  style={{
                    animationName:
                      index === currentHoverMenu
                        ? 'animationHoverLine'
                        : 'animationOutLine',
                    width: currentHoverMenu === index ? '100%' : 'auto',
                  }}
                  className='header-lesson3__left-menu-item hover-line'
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='header-lesson3__right'>
        <div
          className='header-lesson3__right-cart'
          onMouseEnter={() => {
            setIsHoverCart(true);
          }}
          onMouseLeave={() => {
            setIsHoverCart(false);
          }}
        >
          <IconCart />
          <div
            className='header-lesson3__right-cart-detail cart-detail'
            style={{
              animationName: isHoverCart
                ? 'animationCartHover'
                : 'animationCartOutHover',
            }}
          >
            <CartLesson3 />
          </div>
          {cart.length > 0 && (
            <div className='header-lesson3__right-cart-number'>
              {cart.length}
            </div>
          )}
        </div>
        <div className='header-lesson3__right-avatar'>
          <img src={dataLesson3.avatar} alt='' />
        </div>
      </div>
    </div>
  );
};

export default HeaderLesson3;
