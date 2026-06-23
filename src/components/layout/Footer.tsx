import Link from "next/link";
import { Sun, Mail, Phone, MapPin, Globe, Share2, MessageCircle, Info } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-solar-green-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Sun className="text-solar-yellow-500 w-8 h-8" />
              <span className="text-2xl font-bold">Volt-Power Solution</span>
            </Link>
            <p className="text-solar-green-100/70 leading-relaxed">
              Leading India&apos;s transition to sustainable energy with cutting-edge solar technology and world-class installation services.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-yellow-500 hover:text-solar-yellow-950 transition-all">
                <Globe size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-yellow-500 hover:text-solar-yellow-950 transition-all">
                <Share2 size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-yellow-500 hover:text-solar-yellow-950 transition-all">
                <MessageCircle size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-yellow-500 hover:text-solar-yellow-950 transition-all">
                <Info size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-solar-green-100/70 hover:text-solar-yellow-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-solar-green-100/70 hover:text-solar-yellow-500 transition-colors">Residential Solar</Link></li>
              <li><Link href="/services" className="text-solar-green-100/70 hover:text-solar-yellow-500 transition-colors">Commercial Solar</Link></li>
              <li><Link href="/services" className="text-solar-green-100/70 hover:text-solar-yellow-500 transition-colors">Industrial Solar</Link></li>
              <li><Link href="/services" className="text-solar-green-100/70 hover:text-solar-yellow-500 transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-solar-green-100/70">
                <MapPin className="text-solar-yellow-500 shrink-0 mt-1" size={18} />
                <span>Vip Boys Hostel, Atif Vihar,Lucknow 226028</span>
              </li>
              <li className="flex items-center gap-3 text-solar-green-100/70">
                <Phone className="text-solar-yellow-500 shrink-0" size={18} />
                <span>+91 9999999999</span>
              </li>
              <li className="flex items-center gap-3 text-solar-green-100/70">
                <Mail className="text-solar-yellow-500 shrink-0" size={18} />
                <span>contact@Volt-Power Solution.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-solar-green-100/50">
          <p>© 2026 Volt-Power Solution India. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
