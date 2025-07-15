import Button from './button';

type BtnClass = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function IconBtn({
  className = '',
  children,
  onClick,
}: BtnClass) {
  return (
    <Button className={`icon-btn ${className}`.trim()} onClick={onClick}>
      {children}
    </Button>
  );
}
