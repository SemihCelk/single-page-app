import React, { ReactNode } from "react";
import Image from "next/image";

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
  className,
}: ButtonProps) => {
  const buttonClassName = ` py-3 rounded-lg border-2 border-amber-900 text-amber-900   ${
    hasIcon ? "flex items-center" : ""
  } ${className || ""}`;

  return (
    <button
      type={type || "button"}
      className={buttonClassName.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {hasIcon && (
        <Image
          className="me-2"
          src="/shopping-cart.svg"
          alt="Shoes"
          height={25}
          width={25}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
