interface TagProps {
  className: 'com' | 'err' | 'run-b' | 'run-g' | 'rd' | 'test';
  label: string;
}

export default function Tag({ className, label }: TagProps) {
  return <span className={`tag ${className}`}>{label}</span>;
}
