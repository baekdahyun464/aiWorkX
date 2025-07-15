interface InputProps {
  type?: 'text' | 'password' | 'number' | 'email';
  placeHolder?: string;
  className?: string;
  id?: string;
  name?: string;
}

export default function Input({
  type = 'text',
  placeHolder,
  className = '',
  id,
  name,
}: InputProps) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        className={`input ${className}`.trim()}
      />
    </>
  );
}
