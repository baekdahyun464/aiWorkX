import { useEffect, useState } from 'react';
import './progress.scss';
import CountUp from 'react-countup';

interface ProgressProps {
  current: number;
  total?: number;
  size?: number; // 도넛 크기
  strokeWidth?: number; // 도넛 두께
}

export default function ProgressCircle({
  current,
  total = 10,
  size = 120,
  strokeWidth = 13,
}: ProgressProps) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min((current / total) * 10, 10);
  const offset = circumference - (progress / 10) * circumference;

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className="progress-circle" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className="bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="ring"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <p className="current-num">
        <span>Tested chip count</span>
        <CountUp end={current} duration={1.5} />
      </p>
    </div>
  );
}
