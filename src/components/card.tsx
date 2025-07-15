import { memo } from 'react';
import './card.scss';

interface CardProps {
  data: {
    id: number;
    tested: number;
    goal: number;
    isStatus: boolean;
  };
}

const Card = memo(function Card({ data }: CardProps) {
  const { tested, goal, isStatus } = data;
  const percentage = Math.round((tested / goal) * 100);

  return (
    <div className={`card ${isStatus ? 'active' : ''}`}>
      <div className="card-header">
        <h3>Test Progress</h3>
        <span className="status">{isStatus ? 'Active' : 'Inactive'}</span>
      </div>
      <div className="card-content">
        <div className="progress-info">
          <span className="tested">{tested}</span>
          <span className="separator">/</span>
          <span className="goal">{goal}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="percentage">{percentage}%</span>
      </div>
    </div>
  );
});

export default Card;
