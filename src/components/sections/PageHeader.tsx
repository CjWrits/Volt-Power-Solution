import FadeIn from "@/components/animations/FadeIn";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="bg-solar-green-950 pt-32 pb-20 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-solar-yellow-500/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          {breadcrumb && (
            <p className="text-solar-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">
              {breadcrumb}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-solar-green-100/70 text-lg md:text-xl max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
