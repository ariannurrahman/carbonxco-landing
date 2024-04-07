import { useEffect, useState } from 'react';

export const useHydrate = () => {
  const [isHydrate, setIsHydrate] = useState(false);

  useEffect(() => {
    setIsHydrate(true);
  }, []);

  return {
    isHydrate,
  };
};
