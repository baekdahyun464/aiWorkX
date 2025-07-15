import { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const LoadingSpinner = memo(({ size = 'medium', text = 'Loading...' }: LoadingSpinnerProps) => {
  const sizeClass = {
    small: '20px',
    medium: '40px',
    large: '60px'
  }[size];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      gap: '16px'
    }}>
      <div 
        style={{
          width: sizeClass,
          height: sizeClass,
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />
      <span style={{ fontSize: '16px', color: '#666' }}>{text}</span>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;