import { NavItem, Service, Project, Testimonial, FAQItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Subsidies", href: "/subsidies" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "residential",
    title: "Residential Solar",
    description: "Switch your home to clean energy and slash your electricity bills with our premium residential solar solutions. Ideal for independent houses and apartments.",
    icon: "Home",
  },
  {
    id: "commercial",
    title: "Commercial Solar",
    description: "Empower your business with sustainable energy. Reduce overheads and benefit from Accelerated Depreciation (AD) benefits.",
    icon: "Building2",
  },
  {
    id: "industrial",
    title: "Industrial Solar",
    description: "Large-scale energy solutions for manufacturing units and factories to ensure reliable power and grid independence.",
    icon: "Factory",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Expert monitoring and cleaning services to keep your solar panels performing at peak efficiency in Indian weather conditions.",
    icon: "Settings",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Skyline Residency",
    category: "Residential",
    location: "Mumbai, Maharashtra",
    capacity: "10kW",
    savings: "₹1,20,000/year",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Tech Park Solar Wing",
    category: "Commercial",
    location: "Bangalore, Karnataka",
    capacity: "250kW",
    savings: "₹35,00,000/year",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Gujarat Industrial Estate",
    category: "Industrial",
    location: "Ahmedabad, Gujarat",
    capacity: "1.2MW",
    savings: "₹1.5 Crore/year",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "Villa Owner",
    content: "Installing solar with Volt-Power Solution was seamless. My monthly bill has dropped from ₹8,000 to almost zero. Best decision for my home.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Amit Sharma",
    role: "MD, Sharma Textiles",
    content: "Volt-Power Solution's industrial installation was top-notch. The ROI was clear from month one, and the AD tax benefits were a huge plus.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is the PM-Surya Ghar: Muft Bijli Yojana?",
    answer: "It is a government scheme providing subsidies for rooftop solar installations to households, aiming to provide up to 300 units of free electricity per month.",
  },
  {
    question: "How much subsidy can I get in India?",
    answer: "Under current MNRE guidelines, residential consumers can get up to ₹78,000 subsidy for a 3kW system. Commercial users can benefit from Accelerated Depreciation.",
  },
  {
    question: "What is net metering in India?",
    answer: "Net metering allows you to export excess solar power back to the DISCOM (like Tata Power, MSEDCL, Bescom) and get credited in your monthly bill.",
  },
];
