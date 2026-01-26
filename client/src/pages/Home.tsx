import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Anchor, Sunset, Wine, Star } from "lucide-react";
import heroYacht from "@/assets/images/hero-yacht.jpg";
import welcomeYacht from "@/assets/images/welcome-yacht.jpg";
import vesselInterior from "@/assets/images/vessel-interior.jpg";
import voyageReady from "@/assets/images/voyage-ready.jpg";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Abstract Luxury Yacht Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={heroYacht} 
            alt="Luxury Yacht XVII" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container-wide text-center text-white pt-10 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-xs md:text-base font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 text-primary-foreground/90"
          >
            Curated Yacht Experiences
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 md:mb-8 leading-tight"
          >
            Experience the Art <br className="hidden sm:block"/> of Luxury at Sea
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 md:px-10 py-6 md:py-8 text-base md:text-lg font-serif italic tracking-wide">
                Reserve Your Charter
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <SectionHeading 
              subtitle="Welcome Aboard" 
              title="A Sanctuary of Elegance on the Open Ocean" 
            />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light mb-8">
              Yacht XVII is not just a vessel; it is a destination. Meticulously designed for the discerning traveler, we offer an unparalleled blend of comfort, style, and adventure. Whether you seek a serene sunset escape or a week-long voyage, our crew is dedicated to crafting unforgettable moments.
            </p>
            <Link href="/about">
              <Button variant="link" className="p-0 text-primary text-lg font-serif italic hover:text-primary/80">
                Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full bg-secondary overflow-hidden">
            <img 
              src={welcomeYacht} 
              alt="Luxury Lifestyle" 
              className="w-full h-full object-contain bg-[#0A192F] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Services/Highlights */}
      <section className="py-24 bg-[#0A192F] text-white">
        <div className="container-wide">
          <SectionHeading 
            subtitle="Our Services" 
            title="Tailored Experiences" 
            light 
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Anchor className="h-8 w-8 text-primary" />,
                title: "Day Charters",
                desc: "Explore the coastline in style with our flexible half and full-day itineraries."
              },
              {
                icon: <Sunset className="h-8 w-8 text-primary" />,
                title: "Sunset Cruises",
                desc: "Witness the golden hour from the best vantage point possible—the deck of XVII."
              },
              {
                icon: <Wine className="h-8 w-8 text-primary" />,
                title: "Private Events",
                desc: "Host intimate gatherings, celebrations, or corporate meetings in absolute privacy."
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 border border-white/10 hover:border-primary/50 transition-colors bg-white/5 hover:bg-white/10">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 relative h-[300px] md:h-[700px] bg-white shadow-2xl">
              <img 
                src={vesselInterior} 
                alt="Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-5 md:-ml-12 z-10 bg-white p-8 md:p-12 shadow-xl border-l-4 border-primary">
              <SectionHeading subtitle="The Vessel" title="Uncompromising Comfort" className="mb-6 md:mb-8" />
              <p className="text-muted-foreground mb-6 md:mb-8 font-light text-sm md:text-base">
                Featuring masterfully crafted interiors, state-of-the-art entertainment systems, and spacious sun decks, Yacht XVII redefines modern luxury. Every detail has been considered to ensure your absolute comfort.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mb-8">
                {[
                  "50ft Sea Ray (2005)",
                  "Accommodates up to 12 guests",
                  "Professional crew of 3",
                  "3 Luxurious cabins",
                  "Gourmet dining facilities",
                  "Water sports equipment included"
                ].map((feat, i) => (
                  <li key={i} className="flex items-center text-[10px] md:text-sm uppercase tracking-wider font-medium text-foreground/80">
                    <Star className="h-4 w-4 text-primary mr-3 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <Link href="/yacht">
                <Button variant="outline" className="w-full md:w-auto rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-colors uppercase tracking-widest text-[10px] md:text-xs py-6 px-8">
                  View Specifications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src={voyageReady} 
            alt="Ready for Voyage" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-wide max-w-4xl mx-auto">
          <SectionHeading centered title="Ready for Your Voyage?" />
          <p className="text-xl text-muted-foreground font-light mb-12">
            Availability is limited. Contact our concierge to secure your preferred dates for the coming season.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-12 py-8 text-xl font-serif italic shadow-xl shadow-primary/20">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
