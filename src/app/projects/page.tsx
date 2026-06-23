import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { PROJECTS } from "@/lib/data";
import { MapPin, Zap, Banknote } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader 
        title="Our Global Footprint"
        description="Explore how Volt-Power Solution is transforming energy landscapes across the globe through innovative solar engineering."
        breadcrumb="Project Portfolio"
      />

      {/* Stats Ribbon */}
      <div className="bg-solar-yellow-500 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-solar-yellow-950/60 text-sm font-bold uppercase tracking-wider mb-2">Total Power</p>
              <p className="text-3xl md:text-5xl font-extrabold text-solar-yellow-950">250 MW</p>
            </div>
            <div className="text-center">
              <p className="text-solar-yellow-950/60 text-sm font-bold uppercase tracking-wider mb-2">Carbon Saved</p>
              <p className="text-3xl md:text-5xl font-extrabold text-solar-yellow-950">85k Tons</p>
            </div>
            <div className="text-center">
              <p className="text-solar-yellow-950/60 text-sm font-bold uppercase tracking-wider mb-2">Customer Savings</p>
              <p className="text-3xl md:text-5xl font-extrabold text-solar-yellow-950">$12M+</p>
            </div>
            <div className="text-center">
              <p className="text-solar-yellow-950/60 text-sm font-bold uppercase tracking-wider mb-2">Systems Online</p>
              <p className="text-3xl md:text-5xl font-extrabold text-solar-yellow-950">12,500</p>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.1}>
              <Card className="group h-full flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-solar-green-900 text-xs font-bold uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <MapPin size={14} className="text-solar-green-600" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-solar-green-900 mb-6">{project.title}</h3>
                  
                  <div className="mt-auto space-y-4 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Zap size={18} className="text-solar-yellow-500" />
                        <span className="text-sm">Capacity</span>
                      </div>
                      <span className="font-bold text-solar-green-900">{project.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Banknote size={18} className="text-solar-green-600" />
                        <span className="text-sm">Annual Savings</span>
                      </div>
                      <span className="font-bold text-solar-green-600">{project.savings}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <div className="h-24 md:h-32" />
    </>
  );
}
