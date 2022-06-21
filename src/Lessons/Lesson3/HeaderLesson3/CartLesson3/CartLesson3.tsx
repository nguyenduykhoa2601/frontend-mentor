import { useContext } from 'react';
import { IconDelete } from '../../../../assets/Lesson3/svg/IconDelete';
import { GlobalStateLesson3 } from '../../GlobalStateLesson3';
import './CartLesson3.scss';

const CartLesson3: React.FC<any> = () => {
  //@ts-ignore
  const [cart, setCart] = useContext(GlobalStateLesson3).cart;
  const handleDeleteItem = (item: any) => {
    setCart([]);
  };

  return (
    <div className='cart-lesson3'>
      <div className='cart-lesson3-header'>Cart</div>
      <div className='cart-lesson3-info'>
        {cart.length > 0 ? (
          cart.map((item: any, index: number) => {
            return (
              <div className='cart-lesson3-info__item' key={index}>
                <div className='cart-lesson3-info__item-thumbnail'>
                  <img src={item?.images[0]?.imageThumbnail} alt='' />
                </div>
                <div className='cart-lesson3-info__item-info'>
                  <div className='cart-lesson3-info__item-name'>
                    {item?.name}
                  </div>
                  <div className='cart-lesson3-info__item-recipe'>
                    <div className='cart-lesson3-info__item-price'>
                      ${item.price} &nbsp;
                    </div>
                    <div className='cart-lesson3-info__item-numberous'>
                      x {item.numberous}
                    </div>
                    <div className='cart-lesson3-info__item-total'>
                      $
                      {(
                        parseFloat(item.price) * parseFloat(item.numberous)
                      ).toFixed(2)}
                    </div>
                  </div>
                </div>
                <div
                  className='cart-lesson3-info__item-action'
                  onClick={() => handleDeleteItem(item)}
                >
                  <IconDelete />
                </div>
              </div>
            );
          })
        ) : (
          <div className='cart-lesson3-empty'>Your cart is empty.</div>
        )}
      </div>
    </div>
  );
};

export default CartLesson3;
