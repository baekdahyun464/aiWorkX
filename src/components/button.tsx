import './button.scss';

type BtnProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={e => {
        e.currentTarget.blur();
        onClick?.(e);
      }}
      className={`btn ${className}`.trim()}
    >
      <i>{children}</i>
      <span></span>
    </button>
  );
}
