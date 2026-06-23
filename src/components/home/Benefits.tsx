import { Leaf, DollarSign, Zap, TrendingDown } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

const benefits = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Significant Savings",
    description: "Lower your monthly electricity bills by up to 100% and protect yourself against rising utility costs.",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint and contribute to a cleaner, more sustainable future for the next generation.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Energy Independence",
    description: "Generate your own power and reduce reliance on the grid with reliable solar and battery storage solutions.",
  },
  {
    icon: <TrendingDown className="w-8 h-8" />,
    title: "Low Maintenance",
    description: "Solar systems are incredibly durable and require minimal upkeep, offering long-term peace of mind.",
  },
];

export default function Benefits() {
  return (
    <Section variant="alternate">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-solar-green-900 mb-6">
            Why Choose Solar Energy?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Harnessing the power of the sun is one of the smartest investments you can make for your home or business.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <FadeIn key={index} direction="up" delay={index * 0.1}>
            <Card className="p-8 h-full">
              <div className="w-16 h-16 bg-solar-green-50 rounded-2xl flex items-center justify-center text-solar-green-600 mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-solar-green-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
