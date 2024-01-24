import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  hasIcon?: boolean;
  icon?: any;
  className?: string;
}

const Button = ({
  children,
  onClick,
  type,
  disabled,
  hasIcon,
  icon: IconComponent,
  className,
}: ButtonProps) => {
  const buttonClassName = `px-6 py-3 rounded-lg border-2 border-amber-900 text-amber-900 text-base font-semibold font-roboto tracking-wide ${
    hasIcon ? "flex items-center" : ""
  } ${className || ""}`;
 
  return (
    <button
      type={type || "button"}
      className={buttonClassName.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {hasIcon && IconComponent && <IconComponent className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
