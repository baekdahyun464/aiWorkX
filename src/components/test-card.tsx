import React from 'react';
import Button from './button.tsx';
import { withPerformanceOptimization } from '@/utils/optimization';
import './test-card.scss';

interface TestCardProps {
  data: string[][];
}

function TestCard({ data }: TestCardProps) {
  return (
    <div className="bg-box">
      <h4 className="sub-title">Test History</h4>
      <p className="total">Total {data.length}</p>
      <ul className="test-card">
        {data.map((item, index) => (
          <li key={index}>
            <ul className="test-txt">
              {item.map((text, idx) => (
                <li key={idx}>
                  <p className="title" key={idx}>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
            <ul className="btn-wrap">
              <li className="btn-wrap">
                <Button className="pri sm">Test Result</Button>
                <Button className="pri sm">Defect</Button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export optimized version
export default withPerformanceOptimization(TestCard, {
  name: 'TestCard',
  customProps: (prevProps, nextProps) => {
    // Only re-render if data length changes or data content changes
    return prevProps.data.length === nextProps.data.length &&
           JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data);
  }
});
