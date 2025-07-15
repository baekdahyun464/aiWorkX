interface TestProps {
  data: (string | number)[][];
}
import './test-card.scss';

import { testTitle } from '../testLoading.ts';
import Button from './button.tsx';

export default function TestCard({ data }: TestProps) {
  return (
    <div className="bg-box">
      <h4 className="sub-title">Test History</h4>
      <p className="total">Total {data.length}</p>
      <ul className="test-card">
        {/* 각 카드 */}
        {data.map((item, index) => (
          <li key={index}>
            <ul className="test-txt">
              {/* 카드 내부 각 데이터 */}
              {item.map((item, idx) => (
                <li key={idx}>
                  <p className="title" key={idx}>
                    {testTitle[idx]}
                  </p>
                  {item}
                </li>
              ))}
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
