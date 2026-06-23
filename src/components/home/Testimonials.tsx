import Image from "next/image";
import { Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-solar-green-900 mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Don&apos;t just take our word for it. Hear from our satisfied customers who have made the switch to Volt-Power Solution.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS.map((testimonial, index) => (
          <FadeIn key={testimonial.id} direction={index % 2 === 0 ? "right" : "left"}>
            <Card className="p-8 md:p-12 relative h-full">
              <Quote className="absolute top-8 right-8 text-solar-green-100" size={64} />
              <div className="relative z-10">
                <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-solar-green-500">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-green-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
