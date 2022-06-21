import AvatarImage from '../assets/Lesson3/images/image-avatar.png';
import ImageProduct1 from '../assets/Lesson3/images/image-product-1.jpg';
import ImageThumbnailProduct1 from '../assets/Lesson3/images/image-product-1-thumbnail.jpg';
import ImageProduct2 from '../assets/Lesson3/images/image-product-2.jpg';
import ImageThumbnailProduct2 from '../assets/Lesson3/images/image-product-2-thumbnail.jpg';
import ImageProduct3 from '../assets/Lesson3/images/image-product-3.jpg';
import ImageThumbnailProduct3 from '../assets/Lesson3/images/image-product-3-thumbnail.jpg';
import ImageProduct4 from '../assets/Lesson3/images/image-product-4.jpg';
import ImageThumbnailProduct4 from '../assets/Lesson3/images/image-product-4-thumbnail.jpg';

export const dataLesson3 = {
  productDetail: {
    id: '1',
    company: 'sneaker company',
    name: 'Fall Limit Edition Sneakers',
    detail:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    price: '250.00',
    sale: '50',
    images: [
      {
        image: ImageProduct1,
        imageThumbnail: ImageThumbnailProduct1,
      },
      {
        image: ImageProduct2,
        imageThumbnail: ImageThumbnailProduct2,
      },
      {
        image: ImageProduct3,
        imageThumbnail: ImageThumbnailProduct3,
      },
      {
        image: ImageProduct4,
        imageThumbnail: ImageThumbnailProduct4,
      },
    ],
  },
  avatar: AvatarImage,
};
export const fakeDataCart = [];
export const MenuLesson3 = ['Collections', 'Men', 'Women', 'About', 'Contact'];
