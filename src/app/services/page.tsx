import PageHeader from "@/components/sections/PageHeader";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { Home, Building2, Factory, Settings, CheckCircle2 } from "lucide-react";

const serviceDetails = [
  {
    id: "residential",
    icon: <Home size={48} />,
    title: "Residential Solar",
    description: "Full-service residential installations designed to eliminate your electricity bill.",
    features: [
      "Custom system design",
      "Tier 1 solar panels",
      "Battery storage integration",
      "25-year performance warranty",
      "Smart monitoring app"
    ]
  },
  {
    id: "commercial",
    icon: <Building2 size={48} />,
    title: "Commercial Solar",
    description: "Scalable energy solutions for businesses to reduce operational costs.",
    features: [
      "Zero down financing",
      "Tax incentive assistance",
      "Roof & carport systems",
      "ESG reporting data",
      "Peak shaving technology"
    ]
  },
  {
    id: "industrial",
    icon: <Factory size={48} />,
    title: "Industrial Solar",
    description: "Heavy-duty power systems for manufacturing and industrial facilities.",
    features: [
      "Multi-megawatt capacity",
      "Ground-mount solutions",
      "Grid-tie or Off-grid",
      "Load management",
      "Substation integration"
    ]
  },
  {
    id: "maintenance",
    icon: <Settings size={48} />,
    title: "Maintenance & Support",
    description: "Continuous monitoring and repair services for maximum uptime.",
    features: [
      "Real-time monitoring",
      "Annual cleaning service",
      "Component testing",
      "Inverter replacement",
      "Rapid response team"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Comprehensive Solar Services"
        description="From residential rooftops to industrial solar farms, we provide the expertise and technology to power any project."
        breadcrumb="Our Expertise"
      />

      <Section>
        <div className="space-y-24">
          {serviceDetails.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <FadeIn direction={index % 2 === 0 ? "right" : "left"} className="flex-1">
                <div className="w-20 h-20 bg-solar-green-600 text-white rounded-2xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-solar-green-900 mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.description} We use only the highest quality materials and most efficient technologies to ensure your system performs at peak capacity for decades.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-solar-green-900 font-medium">
                      <CheckCircle2 className="text-solar-yellow-500" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn direction={index % 2 === 0 ? "left" : "right"} className="flex-1 w-full">
                <Card className="aspect-video bg-solar-green-50 flex items-center justify-center border-2 border-dashed border-solar-green-200">
                  <p className="text-solar-green-400 font-bold uppercase tracking-widest">Service Image Placeholder</p>
                </Card>
              </FadeIn>
            </div>
          ))}
        </div>
      </Section>

      <div className="h-24 md:h-32" />
    </>
  );
}
