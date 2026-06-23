import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ServicesPreview />
      <ProjectsShowcase />
      <Testimonials />
    </>
  );
}
