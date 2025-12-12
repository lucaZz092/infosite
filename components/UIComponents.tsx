import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  withIcon?: boolean;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  withIcon = false,
  className = '',
  children,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/20 focus:ring-brand-500 border border-transparent",
    secondary: "bg-white text-dark-900 hover:bg-gray-100 focus:ring-white border border-transparent",
    outline: "bg-transparent border border-gray-700 text-white hover:border-brand-500 hover:text-brand-500 focus:ring-gray-700",
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  );
};

export const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}> = ({ title, subtitle, align = 'center', light = true }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} max-w-3xl mx-auto`}>
      {subtitle && (
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-6 ${light ? 'text-white' : 'text-dark-900'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-brand-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`bg-dark-800 border border-dark-700 p-6 rounded-2xl hover:border-brand-500/50 transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
};