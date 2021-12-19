import { useState, useEffect, useCallback } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkWidth = useCallback(() => {
    const width = window.innerWidth;
    if(width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  },[]);

  useEffect(() => {
    checkWidth();
    window.addEventListener('resize', () => checkWidth());

    return window.removeEventListener('resize', () => checkWidth());
  },[])

  return isMobile;
}

export default useMobile;