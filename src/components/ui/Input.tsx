import { FC, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={twMerge(
        "w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500",
        className
      )}
      {...props}
    />
  );
};

export default Input;