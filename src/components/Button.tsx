import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  icon,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center border font-medium rounded-md uppercase';
  const variantClasses = {
    primary: 'bg-[#9C42AB] text-white border-transparent hover:bg-[#893794]',
    secondary: 'bg-gray-500 text-white border-transparent hover:bg-gray-600 ',
    danger: 'bg-red-500 text-white border-transparent hover:bg-red-600 ',
  };
  const sizeClasses = {
    small: 'px-2.5 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-lg',
  };
  const fullWidthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidthClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {icon && <span className={`${text ? 'mr-2' : ''}`}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
