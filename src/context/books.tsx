import { createContext, useState } from 'react';

interface IncrementCountFunc {
  (): void;
}
interface BooksContextType {
  count: number;
  incrementCount: IncrementCountFunc;
}

const BooksContext = createContext<BooksContextType>({
  count: 0,
  incrementCount: () => {},
});

function Provider({ children }: any) {
  const [count, setCount] = useState(5);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const valueToShare = {
    count,
    incrementCount,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
