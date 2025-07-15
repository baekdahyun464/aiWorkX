import './check-radio.scss';

type CheckProps = {
  id: string;
  name: string;
  text?: string;
  onClick?: () => void;
  className?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
  id,
  name,
  text,
  onClick,
  className = '',
  checked,
  onChange,
}: CheckProps) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        hidden
        onClick={onClick}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className={className}>
        <span>{text}</span>
      </label>
    </>
  );
}
