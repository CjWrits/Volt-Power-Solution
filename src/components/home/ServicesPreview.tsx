import { Home, Building2, Factory, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import { SERVICES } from "@/lib/data";

const iconMap = {
  Home: Home,
  Building2: Building2,
  Factory: Factory,
  Settings: Settings,
};

export default function ServicesPreview() {
  return (
    <Section id="services">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-5xl font-bold text-solar-green-900 mb-6">
              Our Professional Solar Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide end-to-end solar energy services tailored to your specific needs, from initial consultation to long-term maintenance.
            </p>
          </FadeIn>
        </div>
        <FadeIn direction="left">
          <Link href="/services" className="inline-flex items-center gap-2 text-solar-green-600 font-bold hover:gap-3 transition-all">
            View All Services <ArrowRight size={20} />
          </Link>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <FadeIn key={service.id} direction="up" delay={index * 0.1}>
              <Card className="p-8 h-full flex flex-col group border-b-4 border-b-transparent hover:border-b-solar-yellow-500">
                <div className="mb-6 p-4 rounded-xl bg-solar-green-600 text-white w-fit group-hover:rotate-6 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-solar-green-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">{service.description}</p>
                <Link 
                  href={`/services#${service.id}`} 
                  className="text-solar-green-600 font-semibold inline-flex items-center gap-2 group/link"
                >
                  Learn More 
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
