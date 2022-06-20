import { dataLesson3 } from '../../constants/Lesson3';
import BodyLesson3 from './BodyLesson3/BodyLesson3';
import { DataProviderLesson3 } from './GlobalStateLesson3';
import HeaderLesson3 from './HeaderLesson3/HeaderLesson3';
import './Lesson3.scss';

const Lesson3: React.FC<any> = () => {
  return (
    <DataProviderLesson3>
      <div className='lesson3'>
        <HeaderLesson3 />
        <BodyLesson3 productDetail={dataLesson3.productDetail} />
      </div>
    </DataProviderLesson3>
  );
};

export default Lesson3;
