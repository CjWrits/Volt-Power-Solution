"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { NAV_ITEMS } from "@/lib/data";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll();
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-solar-yellow-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
            <Sun className="text-solar-yellow-950 w-6 h-6" />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight",
            isScrolled ? "text-solar-green-900" : "text-white"
          )}>
            Volt-Power<span className="text-solar-yellow-500">Solution</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-solar-yellow-500",
                isScrolled ? "text-solar-green-900" : "text-white",
                pathname === item.href && "text-solar-yellow-500"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button variant={isScrolled ? "primary" : "secondary"} size="sm">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-solar-green-900" : "text-white"
          )}
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
