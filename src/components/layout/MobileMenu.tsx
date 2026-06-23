"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Sun } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[60] bg-white flex flex-col"
        >
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sun className="text-solar-yellow-500 w-8 h-8" />
              <span className="text-xl font-bold text-solar-green-900">
                Volt-Power Solution
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-solar-green-900 hover:bg-solar-green-50 rounded-lg"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-2xl font-bold">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-solar-yellow-500",
                  pathname === item.href ? "text-solar-yellow-500" : "text-solar-green-900"
                )}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-8">
              <Button size="lg" onClick={onClose}>
                Request Consultation
              </Button>
            </div>
          </nav>

          <div className="p-8 text-center text-sm text-gray-500">
            © 2024 Volt-Power Solution. All rights reserved.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
