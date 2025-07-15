import { useEffect, useState } from 'react';

export default function useCountUp(target: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = Number(target);
    let current = 0;

    const step = end / 60;
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return count;
}
