interface BadgeProps {
  children: string;
  className?: string;
}

export default function Badge({ className = 'badge', children }: BadgeProps) {
  return <span className={className}>{children}</span>;
}
