import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Half-Day Escape",
    price: "From €2,500",
    description: "A perfect 4-hour introduction to the luxury yachting lifestyle. Ideal for a morning swim or afternoon cocktail cruise.",
    features: ["4 Hours Cruising", "Welcome Champagne", "Snorkeling Gear", "Fuel Included (Local)"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Full-Day Voyage",
    price: "From €4,000",
    description: "Immerse yourself in a complete day at sea. Explore hidden coves, enjoy a gourmet lunch on deck, and swim in crystal clear waters.",
    features: ["8 Hours Cruising", "Gourmet Lunch", "Full Bar Service", "Water Toys & Tender"],
    image: "https://images.unsplash.com/photo-1544143360-6458d511394c?q=80&w=1900&auto=format&fit=crop"
  },
  {
    title: "Sunset & Champagne",
    price: "From €1,800",
    description: "Watch the sun dip below the horizon from the most exclusive venue in the city. Romantic, serene, and unforgettable.",
    features: ["3 Hours Evening Cruise", "Premium Champagne", "Canapés", "Atmospheric Lighting"],
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop"
  }
];

export default function Charters() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container-wide py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading centered subtitle="Experiences" title="Curated Itineraries" />
        </motion.div>
      </div>

      <div className="container-wide pb-32 space-y-32">
        {packages.map((pkg, index) => (
          <motion.div 
            key={pkg.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`order-2 lg:order-${index % 2 === 1 ? '1' : '2'}`}>
              <div className="relative h-[400px] lg:h-[500px] shadow-2xl">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-primary text-white py-4 px-8 font-serif text-xl italic">
                  {pkg.price}
                </div>
              </div>
            </div>
            
            <div className={`order-1 lg:order-${index % 2 === 1 ? '2' : '1'}`}>
              <h3 className="text-3xl font-serif mb-6">{pkg.title}</h3>
              <p className="text-muted-foreground text-lg font-light mb-8 leading-relaxed">
                {pkg.description}
              </p>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm font-medium tracking-wide text-foreground/80">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                      <Check className="w-3 h-3" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link href="/booking">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-6 text-lg font-serif italic">
                  Reserve This Package
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
