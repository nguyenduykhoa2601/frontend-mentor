import { useContext, useState } from 'react';
import { IconCart } from '../../../assets/Lesson3/svg/IconCart';
import { IconMinus } from '../../../assets/Lesson3/svg/IconMinus';
import { IconPlus } from '../../../assets/Lesson3/svg/IconPlus';
import { GlobalStateLesson3 } from '../GlobalStateLesson3';
import './BodyLesson3.scss';
import SliderLesson3 from './SliderLesson3/SliderLesson3';

const BodyLesson3: React.FC<any> = ({ productDetail }) => {
  const [numberous, setNumberous] = useState<number>(0);
  //@ts-ignore
  const [cart, setCart] = useContext(GlobalStateLesson3).cart;
  const handleAddToCart = () => {
    if (numberous === 0) {
      return;
    } else {
      const newData = { ...productDetail, numberous: numberous };
      let newCart = [...cart];
      newCart.push(newData);
      setCart(newCart);
    }
  };
  return (
    <div className='body-lesson3'>
      <iframe src='http://157.119.251.140:5015/write-book/493' />
      <SliderLesson3 images={productDetail.images} />
      <div className='body-lesson3__detail'>
        <div className='body-lesson3__detail-company'>
          {productDetail.company}
        </div>
        <div className='body-lesson3__detail-header'>{productDetail.name}</div>
        <div className='body-lesson3__detail-info'>{productDetail.detail}</div>
        <div className='body-lesson3__detail-price'>
          <div className='body-lesson3__detail-price-info'>
            <div className='body-lesson3__detail-price-current'>
              $
              {(
                (parseFloat(productDetail.price) *
                  parseFloat(productDetail.sale)) /
                100
              ).toFixed(2)}
            </div>
            <div className='body-lesson3__detail-price-sale'>
              {productDetail.sale}%
            </div>
          </div>
          <div className='body-lesson3__detail-price-origin'>
            ${productDetail.price}
          </div>
        </div>

        <div className='body-lesson3__detail-action'>
          <div className='body-lesson3__detail-action-numberous'>
            <div
              className='body-lesson3__detail-action-numberous-reduce'
              onClick={() => setNumberous((num) => (num === 0 ? 0 : num - 1))}
            >
              <IconMinus />
            </div>

            <div className='body-lesson3__detail-action-numberous-current'>
              {numberous}
            </div>
            <div
              className='body-lesson3__detail-action-numberous-raise'
              onClick={() => setNumberous((num) => num + 1)}
            >
              <IconPlus />
            </div>
          </div>
          <div
            className='body-lesson3__detail-action-button'
            onClick={handleAddToCart}
            style={{ opacity: numberous === 0 ? '0.8' : '1' }}
          >
            <IconCart />
            <span>Add to cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyLesson3;
