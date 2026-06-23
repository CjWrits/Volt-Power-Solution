import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import { PROJECTS } from "@/lib/data";

export default function ProjectsShowcase() {
  return (
    <Section variant="dark">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Recent <span className="text-solar-yellow-500">Success Stories</span>
            </h2>
            <p className="text-solar-green-100/70 text-lg leading-relaxed">
              Explore our portfolio of diverse solar installations across residential, commercial, and industrial sectors.
            </p>
          </FadeIn>
        </div>
        <FadeIn direction="left">
          <Link href="/projects" className="inline-flex items-center gap-2 text-solar-yellow-500 font-bold hover:gap-3 transition-all">
            View All Projects <ArrowRight size={20} />
          </Link>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <FadeIn key={project.id} direction="up" delay={index * 0.1}>
            <Card variant="glass-dark" className="group">
              <div className="relative h-64 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-solar-yellow-500 text-solar-yellow-950 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-solar-green-100/50 text-sm mb-3">
                  <MapPin size={14} />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{project.title}</h3>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-solar-green-100/40 text-xs uppercase tracking-widest mb-1">Capacity</p>
                    <p className="text-solar-yellow-500 font-bold">{project.capacity}</p>
                  </div>
                  <div>
                    <p className="text-solar-green-100/40 text-xs uppercase tracking-widest mb-1">Savings</p>
                    <p className="text-solar-green-400 font-bold">{project.savings}</p>
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
