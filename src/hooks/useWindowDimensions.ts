import { useState, useEffect, useCallback } from 'react';

// I don't like how many times we have to check if window exists, could use a debouncer here
export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : 0
    const isMobile = width < 800;
    return {
      isMobile,
    };
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  const handleResize = useCallback(()=> {
    setWindowDimensions(getWindowDimensions())
  }, [getWindowDimensions])

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, hasWindow])

  return windowDimensions
}