import { useRef, useState } from 'react';
import { IconNext } from '../../../../assets/Lesson3/svg/IconNext';
import { IconPrevious } from '../../../../assets/Lesson3/svg/IconPrevious';
import ModalSlideLesson3 from '../ModalSliderLesson3/ModalSlideLesson3';
import './SliderLesson3.scss';

const SliderLesson3: React.FC<any> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isOpenModalSlider, setIsOpenModalSlider] = useState<boolean>(false);
  const refAnimationBorder =
    useRef<HTMLImageElement>() as React.MutableRefObject<HTMLDivElement>;

  const handleChangeMainImage = (index: number) => {
    setActiveImage(index);
    refAnimationBorder.current.style.transform = `translateX(${
      index === 0 ? 0 : index * 80 + 10 * index
    }px)`;
    const currentEle = document.getElementById(`slider-image-main-${index}`);
    currentEle?.scrollIntoView({ behavior: 'smooth' });

    refAnimationBorder.current.style.transitionDuration = `0.2s`;
  };

  const handleNextImageMobile = () => {
    const index = activeImage === 3 ? 0 : activeImage + 1;
    setActiveImage(index);
    const currentEle = document.getElementById(`slider-image-mobile-${index}`);
    currentEle?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePreviousImageMobile = () => {
    const index = activeImage === 0 ? 3 : activeImage - 1;
    setActiveImage(index);
    const currentEle = document.getElementById(`slider-image-mobile-${index}`);
    currentEle?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='slider-lesson3'>
      <div className='slider-lesson3__desktop'>
        <div className='slider-lesson3__desktop-main-image'>
          {images.map((image: any, index: number) => {
            return (
              <img
                src={image.image}
                alt=''
                key={index}
                id={`slider-image-main-${index}`}
                onClick={() => setIsOpenModalSlider(true)}
              />
            );
          })}
          {/* <img src={currentSourceImage} alt='' /> */}
        </div>
        <div className='slider-lesson3__desktop-list-images'>
          <div
            className='slider-lesson3__desktop-border'
            ref={refAnimationBorder}
          ></div>
          {images.map((item: any, index: number) => {
            return (
              <div
                className='slider-lesson3__desktop-thumbnail'
                key={index}
                onClick={() => handleChangeMainImage(index)}
                style={{
                  opacity: index === activeImage ? 0.55 : 1,
                }}
              >
                <img src={item.imageThumbnail} alt='' />
              </div>
            );
          })}
        </div>
      </div>
      <div className='slider-lesson3__mobile'>
        <div className='slider-lesson3__mobile-main-image'>
          {images.map((image: any, index: number) => {
            return (
              <img
                src={image.image}
                alt=''
                key={index}
                id={`slider-image-mobile-${index}`}
              />
            );
          })}
        </div>
        <div className='slider-lesson3__mobile-action'>
          <div
            className='slider-lesson3__mobile-icon-previous'
            onClick={handlePreviousImageMobile}
          >
            <IconPrevious />
          </div>
          <div
            className='slider-lesson3__mobile-icon-next'
            onClick={handleNextImageMobile}
          >
            <IconNext />
          </div>
        </div>
      </div>
      {isOpenModalSlider && (
        <ModalSlideLesson3
          images={images}
          currentActive={activeImage}
          setIsOpen={setIsOpenModalSlider}
        />
      )}
    </div>
  );
};

export default SliderLesson3;
