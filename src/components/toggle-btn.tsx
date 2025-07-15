import { useEffect, useState } from 'react';
import './check-radio.scss';

interface ToggleProps {
  id: number | string;
  name: number | string;
  check?: boolean;
  label?: [string, string];
  className?: string;
}

export default function ToggleBtn({
  id,
  name,
  check,
  label = ['Stop', 'Start'],
  className,
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState(check ?? false);
  const toggleBtn = () => setIsChecked(!isChecked);

  useEffect(() => {
    if (typeof check === 'boolean') {
      setIsChecked(check);
    }
  }, [check]);

  const labelText = isChecked ? label[0] : label[1];

  return (
    <>
      <input
        type="checkbox"
        id={`toggle-${id}`}
        name={`toggle-${name}`}
        onClick={toggleBtn}
        checked={isChecked}
        onChange={() => {}}
        hidden
      />
      <label htmlFor={`toggle-${id}`} className={`toggle ${className}`}>
        <span>{labelText}</span>
      </label>
    </>
  );
}
