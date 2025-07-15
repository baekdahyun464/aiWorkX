import ProgressCircle from '../progress circle';

export default function ScrollX() {
  return (
    <div className="scroll-x-wrap">
      <ProgressCircle current={6} />
      <ProgressCircle current={1} />
      <ProgressCircle current={3} />
    </div>
  );
}
