import { FC, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'icon';
}

const Button: FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'default',
  ...props 
}) => {
  const baseStyles = "rounded-full transition-colors";
  const variants = {
    default: "px-4 py-2 bg-gray-100 hover:bg-gray-200",
    icon: "p-2 hover:bg-gray-100"
  };

  return (
    <button 
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;