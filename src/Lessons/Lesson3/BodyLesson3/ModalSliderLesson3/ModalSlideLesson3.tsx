import { useRef, useState } from 'react';
import { IconClose } from '../../../../assets/Lesson3/svg/IconClose';
import { IconNext } from '../../../../assets/Lesson3/svg/IconNext';
import { IconPrevious } from '../../../../assets/Lesson3/svg/IconPrevious';
import './ModalSlideLesson3.scss';

const ModalSlideLesson3: React.FC<any> = ({
  images,
  currentActive,
  setIsOpen,
}) => {
  const [activeImage, setActiveImage] = useState(currentActive || 0);
  const refAnimationBorder =
    useRef<HTMLImageElement>() as React.MutableRefObject<HTMLDivElement>;

  const handleChangeMainImage = (index: number) => {
    setActiveImage(index);
    refAnimationBorder.current.style.transform = `translateX(${
      index === 0 ? 0 : index * 80 + 10 * index
    }px)`;
    const currentEle = document.getElementById(
      `modal-slide-image-main-${index}`
    );
    currentEle?.scrollIntoView({ behavior: 'smooth' });

    refAnimationBorder.current.style.transitionDuration = `0.2s`;
  };

  const handleNextImageMobile = () => {
    const index = activeImage === 3 ? 0 : activeImage + 1;
    setActiveImage(index);
    refAnimationBorder.current.style.transform = `translateX(${
      index === 0 ? 0 : index * 80 + 10 * index
    }px)`;
    refAnimationBorder.current.style.transitionDuration = `0.2s`;
    const currentEle = document.getElementById(
      `modal-slide-image-main-${index}`
    );
    currentEle?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePreviousImageMobile = () => {
    const index = activeImage === 0 ? 3 : activeImage - 1;
    setActiveImage(index);
    refAnimationBorder.current.style.transform = `translateX(${
      index === 0 ? 0 : index * 80 + 10 * index
    }px)`;
    refAnimationBorder.current.style.transitionDuration = `0.2s`;
    const currentEle = document.getElementById(
      `modal-slide-image-main-${index}`
    );
    currentEle?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='modal-slide-lesson3'>
      <div className='modal-slide-lesson3__desktop'>
        <div className='modal-slide-lesson3__desktop-main-image'>
          {images.map((image: any, index: number) => {
            return (
              <img
                src={image.image}
                alt=''
                key={index}
                id={`modal-slide-image-main-${index}`}
              />
            );
          })}
          {/* <img src={currentSourceImage} alt='' /> */}
        </div>
        <div className='modal-slide-lesson3__action'>
          <div
            className='modal-slide-lesson3__action-icon-previous'
            onClick={handlePreviousImageMobile}
          >
            <IconPrevious />
          </div>
          <div
            className='modal-slide-lesson3__action-icon-next'
            onClick={handleNextImageMobile}
          >
            <IconNext />
          </div>
          <div
            className='modal-slide-lesson3__action-icon-close'
            onClick={() => {
              setIsOpen && setIsOpen(false);
            }}
          >
            <IconClose />
          </div>
        </div>
        <div className='modal-slide-lesson3__desktop-list-images'>
          <div
            className='modal-slide-lesson3__desktop-border'
            ref={refAnimationBorder}
          ></div>
          {images.map((item: any, index: number) => {
            return (
              <div
                className='modal-slide-lesson3__desktop-thumbnail'
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
    </div>
  );
};

export default ModalSlideLesson3;
