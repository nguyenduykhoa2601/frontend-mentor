import { createContext, useState } from 'react';
import { fakeDataCart } from '../../constants/Lesson3';

//@ts-ignore
export const GlobalStateLesson3 = createContext();

export const DataProviderLesson3: React.FC<any> = ({ children }) => {
  const [cart, setCart] = useState(fakeDataCart);

  const state = {
    cart: [cart, setCart],
  };

  return (
    <GlobalStateLesson3.Provider value={state}>
      {children}
    </GlobalStateLesson3.Provider>
  );
};
