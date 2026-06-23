import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { Award, Shield, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Our Mission to Power the World"
        description="Founded with a vision to make clean energy accessible to everyone, Volt-Power Solution has grown into a leader in sustainable power solutions."
        breadcrumb="About Volt-Power Solution"
      />

      {/* Story Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1594398044700-ee49a0088894?q=80&w=1000&auto=format&fit=crop"
                alt="Our team working"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-green-900 mb-6">A Decade of Excellence in Solar Innovation</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Since 2014, Volt-Power Solution has been at the forefront of the renewable energy revolution. What started as a small team of engineers in a garage has evolved into a nationwide provider of premium solar solutions.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe that every roof is an opportunity to contribute to a greener planet. Our commitment to quality, transparency, and customer satisfaction has earned us a reputation as the most trusted solar partner in the industry.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-solar-yellow-500 bg-solar-green-50/50">
                <p className="text-3xl font-bold text-solar-green-900">10k+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Clients Served</p>
              </div>
              <div className="p-4 border-l-4 border-solar-yellow-500 bg-solar-green-50/50">
                <p className="text-3xl font-bold text-solar-green-900">150MW+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Installed Capacity</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Mission/Vision */}
      <Section variant="alternate">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn direction="up">
            <Card className="p-12 h-full">
              <Target className="text-solar-green-600 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-solar-green-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To accelerate the transition to sustainable energy by providing reliable, affordable, and high-performance solar solutions to homes and businesses everywhere.
              </p>
            </Card>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <Card className="p-12 h-full">
              <Shield className="text-solar-green-600 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-solar-green-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where clean energy is the primary source of power, creating a healthier environment and energy independence for all communities.
              </p>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Team Section Placeholder */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-solar-green-900 mb-6">The Minds Behind the Power</h2>
            <p className="text-gray-600 text-lg">Our diverse team of experts is dedicated to delivering excellence in every installation.</p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <Card className="p-0 overflow-hidden text-center">
                <div className="relative h-64 w-full bg-gray-100">
                  {/* Placeholder for team member image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users size={48} className="text-gray-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-solar-green-900">Team Member {i}</h4>
                  <p className="text-gray-500">Expert Consultant</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section variant="alternate">
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-2xl text-solar-green-900">
            <Award className="text-solar-yellow-500" /> ISO 9001
          </div>
          <div className="flex items-center gap-2 font-bold text-2xl text-solar-green-900">
            <Shield className="text-solar-yellow-500" /> Tier 1 Solar
          </div>
          <div className="flex items-center gap-2 font-bold text-2xl text-solar-green-900">
            <Award className="text-solar-yellow-500" /> NABCEP Certified
          </div>
        </div>
      </Section>

      <div className="h-24 md:h-32" />
    </>
  );
}
