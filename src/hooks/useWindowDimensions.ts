import { useState, useEffect, useCallback } from "react"

// Could use a debouncer here to reduce the number of times the window dimensions are calculated
const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined"

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : 0
    const isNarrowViewport = width < 800;
    return {
      isNarrowViewport,
    };
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  const handleResize = useCallback(()=> {
    setWindowDimensions(getWindowDimensions())
  }, [getWindowDimensions])

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [handleResize, hasWindow])

  return windowDimensions
}

export default useWindowDimensions