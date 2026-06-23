import Link from "next/link";
import { Sun, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-solar-green-950 text-white px-4">
      <div className="w-24 h-24 bg-solar-yellow-500 rounded-full flex items-center justify-center mb-8 animate-pulse">
        <Sun className="text-solar-yellow-950 w-12 h-12" />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Page Not Found</h2>
      
      <p className="text-solar-green-100/70 text-center max-w-md mb-12 text-lg">
        It looks like the page you&apos;re looking for has moved to another orbit. Let&apos;s get you back home.
      </p>

      <Link href="/">
        <Button size="lg" className="group">
          <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Homepage
        </Button>
      </Link>
    </div>
  );
}
