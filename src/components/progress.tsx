import { useEffect, useState } from 'react';
import './progress.scss';

interface ProgressProps {
  current: number;
  total?: number;
}

export default function ProgressBar({ current, total = 10 }: ProgressProps) {
  const [width, setWidth] = useState(0);
  const percentage = (current / total) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 50);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="progress-bar">
      <span className="percent" style={{ width: `${width}%` }} />
    </div>
  );
}
