import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "glass-dark";
  hover?: boolean;
}

export default function Card({ 
  children, 
  className, 
  variant = "default",
  hover = true 
}: CardProps) {
  const variants = {
    default: "bg-white border border-gray-200",
    glass: "glass",
    "glass-dark": "glass-dark",
  };

  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-300",
        variants[variant],
        hover && "hover:-translate-y-1 hover:shadow-2xl hover:shadow-solar-green-900/10",
        className
      )}
    >
      {children}
    </div>
  );
}
