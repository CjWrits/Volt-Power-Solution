import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  variant?: "default" | "alternate" | "dark";
}

export default function Section({
  children,
  className,
  containerClassName,
  id,
  variant = "default",
}: SectionProps) {
  const variants = {
    default: "bg-white",
    alternate: "bg-solar-green-50/50",
    dark: "bg-solar-green-950 text-white",
  };

  return (
    <section 
      id={id} 
      className={cn("py-16 md:py-24", variants[variant], className)}
    >
      <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
