import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

import halfDayImg from "@/assets/images/half-day-escape.jpg";
import fullDayImg from "@/assets/images/full-day-voyage.jpg";
import sunsetImg from "@/assets/images/sunset-champagne.jpg";
import afterPartyImg from "@/assets/images/after-party.jpg";
import yachtPartyImg from "@assets/WhatsApp_Image_2026-01-26_at_7.18.11_PM_(1)_1769455016115.jpeg";
import justCruisingImg from "@assets/WhatsApp_Image_2026-01-26_at_7.18.11_PM_1769455016113.jpeg";
import hookahImg from "@assets/WhatsApp_Image_2026-01-31_at_5.49.47_PM_1769878313478.jpeg";

const hookahFlavors = [
  "Tropical", "Blueberry Mint", "Mint", "Gum Mint", "Orange Mint", 
  "Pineapple", "Lady Killer", "Jamaican Vibes", "Love 66", "Apple", "Guava"
];

type Feature = string | { text: string; bold: boolean };

const packages: {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  image: string;
  note: string;
  charterType: string;
}[] = [
  {
    title: "Just Cruising",
    price: "$900 - $1,150",
    description: "A perfect 2-hour escape for those who want to experience the Potomac without the commitment of a full day. Ideal for quick sightseeing or a refreshing break.",
    features: [
      "2 Hour Cruise",
      "Fuel Included",
      "Water & Ice Included",
      "Food and Beverages Allowed",
      "Cleaning Fee: $150",
      "Gratuity: 20% of package"
    ],
    image: justCruisingImg,
    note: "Weekday: $900 | Weekend: $1,150",
    charterType: "Just-Cruising"
  },
  {
    title: "The Yacht Party",
    price: "$1,250 - $1,650",
    description: "The ultimate 3-hour social experience. Whether it's a birthday, celebration, or just a group of friends, this package sets the perfect stage for a vibrant party.",
    features: [
      "3 Hours Cruising",
      "Fuel Included",
      "Ice & Water Included",
      "Food & Beverages Allowed",
      "Perfect for Group Celebrations",
      "Cleaning Fee: $150",
      "Gratuity: 20% of package"
    ],
    image: yachtPartyImg,
    note: "Weekday: $1,250 | Weekend: $1,650",
    charterType: "Yacht-Party"
  },
  {
    title: "Half-Day Escape",
    price: "$1,750 - $2,000",
    description: "A refined 4-hour introduction to the luxury yachting lifestyle. Experience the Potomac with unparalleled elegance and dedicated service.",
    features: [
      "4 Hours Cruising", 
      "Fuel Included", 
      "Ice & Water Included", 
      "Food & Beverages Allowed",
      "Upgrades: Hookah Available",
      "Cleaning Fee: $150",
      "Gratuity: 20% of package"
    ],
    image: halfDayImg,
    note: "Weekday: $1,750 | Weekend: $2,000",
    charterType: "Half-Day"
  },
  {
    title: "Full-Day Voyage",
    price: "$3,500 - $4,000",
    description: "Immerse yourself in a complete day on the Potomac. Eight hours of pure luxury, adventure, and bespoke celebration.",
    features: [
      "8 Hours of Fun",
      "Upgrades: Water Sports, Jet Car, Jet Skies",
      "Swimming & Grilling",
      "Water Toys & Tender Included",
      "Perfect for Birthday Parties & Hookah",
      "Cleaning Fee: $150 | Gratuity: 20%"
    ],
    image: fullDayImg,
    note: "Weekday: $3,500 | Weekend: $4,000",
    charterType: "Full-Day"
  },
  {
    title: "Date Night, Sunset & Champagne",
    price: "$1,250 - $1,650",
    description: "Watch the sun dip below the horizon from the most exclusive venue in the city. Romantic, serene, Summer concert series and jazz festival at the wharf",
    features: [
      "3 Hours Evening Cruise", 
      { text: "Max of 6 Guests Only", bold: true },
      "Premium Champagne", 
      "Canapés", 
      "Atmospheric Lighting",
      "Cleaning Fee: $150 | Gratuity: 20%"
    ],
    image: sunsetImg,
    note: "Weekday: $1,250 | Weekend: $1,650",
    charterType: "Sunset"
  },
  {
    title: "After Party",
    price: "$2,250",
    description: "The ultimate late-night experience on the water. Start your celebration when the city sleeps with bespoke service and vibrant energy.",
    features: [
      "3 Hours (Starts after Midnight)",
      "Premium Bottle Service",
      "Hookah Service Available",
      "Cleaning Fee: $150 | Gratuity: 20%",
      "Atmospheric Lighting & Sound"
    ],
    image: afterPartyImg,
    note: "Flat Rate: $2,250",
    charterType: "After-Party"
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
          <p className="text-foreground text-lg font-light mt-2 max-w-2xl mx-auto">
            Enhance any Experience with Chef B Meals (This is an upgrade option only)
          </p>
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
              <p className="text-foreground text-lg font-light mb-8 leading-relaxed">
                {pkg.description}
              </p>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, i) => {
                  const isObject = typeof feat === 'object' && feat !== null;
                  const text = isObject ? (feat as { text: string; bold: boolean }).text : (feat as string);
                  const isBold = isObject && (feat as { text: string; bold: boolean }).bold;
                  return (
                    <li key={i} className="flex items-center text-sm font-medium tracking-wide text-foreground">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className={isBold ? "font-bold" : ""}>{text}</span>
                    </li>
                  );
                })}
              </ul>
              <Link href={`/booking?package=${encodeURIComponent(pkg.charterType)}`}>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-6 text-lg font-serif italic">
                  Reserve This Package
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Add-On</span>
            <h2 className="text-4xl font-serif">Pre-Order Meal Menu</h2>
          </div>

          <div className="bg-white border border-border p-8 md:p-12 text-center shadow-lg mb-32">
            <h3 className="text-2xl font-serif mb-4">Chef B Meals Catering</h3>
            <p className="text-foreground text-lg font-light mb-8 max-w-2xl mx-auto">
              Elevate your charter with gourmet catering from Chef B Meals. All packages include fresh, chef-prepared food and premium beverages delivered directly to the yacht.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-primary/5 px-6 py-3 border border-primary/10">
                <span className="text-sm text-foreground">Brunch Packages</span>
              </div>
              <div className="bg-primary/5 px-6 py-3 border border-primary/10">
                <span className="text-sm text-foreground">Lunch & Dinner</span>
              </div>
              <div className="bg-primary/5 px-6 py-3 border border-primary/10">
                <span className="text-sm text-foreground">Beverages</span>
              </div>
              <div className="bg-primary/5 px-6 py-3 border border-primary/10">
                <span className="text-sm text-foreground">Elevated Treats</span>
              </div>
            </div>
            <Link href="/menu">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-6 text-lg font-serif italic">
                View Full Menu
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Add-On</span>
            <h2 className="text-4xl font-serif">Hookah Service</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] shadow-2xl">
              <img src={hookahImg} alt="Hookah Service" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h3 className="text-3xl font-serif mb-6">Premium Hookah Experience</h3>
              <p className="text-foreground text-lg font-light mb-8 leading-relaxed">
                Elevate your charter with our premium hookah service. Choose from over 20 exotic flavors while enjoying the open water and stunning views.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-primary/5 p-6 border border-primary/10">
                  <div className="text-3xl font-serif text-primary mb-1">$100</div>
                  <div className="text-sm text-foreground uppercase tracking-wide">Per Hookah</div>
                </div>
                <div className="bg-primary/5 p-6 border border-primary/10">
                  <div className="text-3xl font-serif text-primary mb-1">$30</div>
                  <div className="text-sm text-foreground uppercase tracking-wide">Per Refill</div>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="text-lg font-serif mb-4">Over 20+ Flavors Available</h4>
                <div className="flex flex-wrap gap-2">
                  {hookahFlavors.map((flavor, i) => (
                    <span key={i} className="bg-secondary/50 text-foreground px-3 py-1 text-sm">
                      {flavor}
                    </span>
                  ))}
                  <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
                    & More
                  </span>
                </div>
              </div>

              <Link href="/booking">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-6 text-lg font-serif italic">
                  Add to Your Charter
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
