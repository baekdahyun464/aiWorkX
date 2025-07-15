import CountUp from 'react-countup';
import ProgressBar from './progress';
import './card.scss';

interface CardData {
  id: number;
  tested: number;
  goal: number;
}

interface CardProps {
  data: CardData;
}

export default function Card({ data }: CardProps) {
  const { id, tested, goal } = data;

  return (
    <>
      <li>
        <a href="#" className="id-link">
          <p>handler ID:{id}</p>
          <figure>
            <figcaption>
              <CountUp end={tested} duration={1} separator="," />
              <span>{goal}</span>
            </figcaption>
            <ProgressBar current={tested} />
          </figure>
          <div>
            <p>Tested chip count</p>
            <p>Goal chip count</p>
          </div>
        </a>
      </li>
    </>
  );
}
