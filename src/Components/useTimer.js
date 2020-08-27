import { useState, useEffect } from 'react';

const useTimer = (stop) => {
  const [roundTime, setRoundTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoundTime((t) => t + 1), 1000);
    if (stop) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [stop]);

  return { roundTime, setRoundTime };
};

export default useTimer;
