import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

import halfDayImg from "@/assets/images/half-day-escape.jpg";
import fullDayImg from "@/assets/images/full-day-voyage.jpg";
import sunsetImg from "@/assets/images/sunset-champagne.jpg";
import afterPartyImg from "@/assets/images/after-party.jpg";

const packages = [
  {
    title: "Half-Day Escape",
    price: "$1,750 - $2,000",
    description: "A refined 4-hour introduction to the luxury yachting lifestyle. Experience the Potomac with unparalleled elegance and dedicated service.",
    features: [
      "4 Hours Cruising", 
      "Fuel Included", 
      "Ice & Water Included", 
      "Food & Beverages Allowed",
      "Upgrades: Hookah, Pre-order Menu",
      "Cleaning Fee: $150",
      "Gratuity: 20% of package"
    ],
    image: halfDayImg,
    note: "Weekday: $1,750 | Weekend: $2,000"
  },
  {
    title: "Full-Day Voyage",
    price: "$3,500 - $4,000",
    description: "Immerse yourself in a complete day on the Potomac. Eight hours of pure luxury, adventure, and bespoke celebration.",
    features: [
      "8 Hours of Fun",
      "Upgrades: Water Sports, Jet Car, Jet Skies",
      "Swimming, Grilling & Pre-order Menu",
      "Gourmet Lunch & Full Bar Service",
      "Water Toys & Tender Included",
      "Perfect for Birthday Parties & Hookah",
      "Cleaning Fee: $150 | Gratuity: 20%"
    ],
    image: fullDayImg,
    note: "Weekday: $3,500 | Weekend: $4,000"
  },
  {
    title: "Date Night, Sunset & Champagne",
    price: "$1,250 - $1,650",
    description: "Watch the sun dip below the horizon from the most exclusive venue in the city. Romantic, serene, and unforgettable.",
    features: [
      "3 Hours Evening Cruise", 
      "Premium Champagne", 
      "Canapés", 
      "Atmospheric Lighting",
      "Cleaning Fee: $150 | Gratuity: 20%"
    ],
    image: sunsetImg,
    note: "Weekday: $1,250 | Weekend: $1,650"
  },
  {
    title: "After Party",
    price: "$2,250",
    description: "The ultimate late-night experience on the water. Start your celebration when the city sleeps with bespoke service and vibrant energy.",
    features: [
      "3 Hours (Starts after Midnight)",
      "Premium Bottle Service",
      "Hookah Service Available",
      "Pre-order Food Menu",
      "Cleaning Fee: $150 | Gratuity: 20%",
      "Atmospheric Lighting & Sound"
    ],
    image: afterPartyImg,
    note: "Flat Rate: $2,250"
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
                <div className="absolute top-0 right-0 bg-primary text-white py-4 px-8 font-serif text-xl italic flex flex-col items-end">
                  <span>{pkg.price}</span>
                  {pkg.note && <span className="text-[10px] uppercase tracking-widest font-sans not-italic mt-1">{pkg.note}</span>}
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
