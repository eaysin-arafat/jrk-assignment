import { useCallback, useEffect, useState } from "react";

// Custom hook to detect whether the window size is smaller than a specified threshold
const useWindow = (screenSize: number) => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  // Function to check the window size and update state accordingly
  const checkScreenSize = useCallback(() => {
    setOnSmallScreen(window?.innerWidth < screenSize);
  }, [screenSize]);

  // Effect to run the checkScreenSize function on initial render and window resize
  useEffect(() => {
    checkScreenSize();

    window?.addEventListener("resize", checkScreenSize);

    return () => window?.removeEventListener("resize", checkScreenSize);
  }, [checkScreenSize]);

  // Return the state indicating whether the window is considered small
  return onSmallScreen;
};

export default useWindow;
