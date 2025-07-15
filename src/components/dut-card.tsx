interface DutData {
  label: string;
  rate: number;
  pass: number;
  fail: number;
  total: number;
  status: 'testing' | 'ready' | 'running';
}
interface DutProps {
  data: DutData;
}

export default function DutCard({ data }: DutProps) {
  const { label, rate, pass, fail, total, status } = data;

  return (
    <>
      <li className={status}>
        <p>{label}</p>
        <p className="dut-num">
          <b>{rate}</b>
          <span>
            <i>{pass}</i>
            <i>{fail}</i>
            <i>{total}</i>
          </span>
        </p>
      </li>
    </>
  );
}
