import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-solar-green-600 text-white hover:bg-solar-green-700 shadow-lg shadow-solar-green-900/20",
      secondary: "bg-solar-yellow-500 text-solar-yellow-950 hover:bg-solar-yellow-600 shadow-lg shadow-solar-yellow-900/20",
      outline: "border-2 border-solar-green-600 text-solar-green-600 hover:bg-solar-green-50",
      ghost: "text-solar-green-600 hover:bg-solar-green-50",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-2.5",
      lg: "px-8 py-3.5 text-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
