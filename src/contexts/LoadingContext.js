import { createContext, useCallback, useContext, useState } from 'react';

const LoadingContext = createContext();

function LoadingContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => setIsLoading(true), []);
  const stopLoading = useCallback(() => setIsLoading(false), []);
  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingContextProvider;

export const useLoading = () => useContext(LoadingContext);
