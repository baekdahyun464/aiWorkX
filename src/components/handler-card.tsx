import DutCard from './dut-card';
import './handler-card.scss';
import ProgressCircle from './progress circle';
import ToggleBtn from './toggle-btn';
import { dutListData } from '../testLoading.ts';

interface CardData {
  id: number;
  tested: number;
  goal: number;
  isStatus?: boolean;
}

interface CardProps {
  data: CardData;
}

export default function HandlerCard({ data }: CardProps) {
  const { id, tested, goal, isStatus } = data;

  return (
    <a href="#" className="handler-wrap">
      <div className="handler-head">
        <p>handler {id}</p>
        <ToggleBtn id={id} name={id} check={isStatus} />
      </div>

      <figure>
        <figcaption>
          <ProgressCircle current={tested} />
          <p className="goal-count">
            Goal chip count <span>{goal}</span>
          </p>
        </figcaption>
        <figcaption>
          <ul className="status-color">
            <li>pass rate</li>
            <li>pass</li>
            <li>fail</li>
            <li>total</li>
          </ul>
          <ul className="dut-wrap">
            {dutListData.map(item => (
              <DutCard
                key={item.label}
                data={{
                  ...item,
                  status: item.isStatus as 'testing' | 'ready' | 'running',
                }}
              />
            ))}
          </ul>
        </figcaption>
      </figure>
    </a>
  );
}
