import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Anchor, Sunset, Wine, Star } from "lucide-react";
import hero1 from "@/assets/images/hero-1.jpg";
import heroBrand from "@/assets/images/hero-brand.jpg";
import vesselInterior from "@assets/WhatsApp_Image_2026-01-26_at_8.28.07_PM_1769457368746.jpeg";
import voyageReady from "@/assets/images/voyage-ready.jpg";
import review1 from "@/assets/images/review-1.png";
import review2 from "@/assets/images/review-2.png";
import review3 from "@/assets/images/review-3.png";
import review4 from "@/assets/images/review-4.png";

import gallery1 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.11_PM_1769453991950.jpeg";
import gallery2 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.12_PM_1769453991951.jpeg";
import gallery3 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.13_PM_(1)_1769453991952.jpeg";
import gallery4 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.13_PM_(2)_1769453991953.jpeg";
import gallery5 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.13_PM_(3)_1769453991954.jpeg";
import gallery6 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.13_PM_1769453991954.jpeg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [hero1, heroBrand, hero1];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentSlide}
              src={slides[currentSlide]} 
              alt={`Luxury Yacht XVII - Slide ${currentSlide + 1}`} 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="relative z-20 container-wide text-center text-white pt-10 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-xs md:text-base font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 text-primary-foreground/90"
          >
            Curated Yacht Experiences
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 md:mb-8 leading-tight"
          >
            Experience the Art <br className="hidden sm:block"/> of Luxury on the Potomac
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <SectionHeading 
              subtitle="Welcome Aboard" 
              title="A Sanctuary of Elegance on the Open Ocean" 
            />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light mb-8">
              Yacht XVII is not just a vessel; it is a destination. Meticulously designed for the discerning traveler, we offer an unparalleled blend of comfort, style, and adventure. Whether you seek a serene sunset escape or a city night light watch in Washington DC, our crew is dedicated to crafting unforgettable moments.
            </p>
            <Link href="/about">
              <Button variant="ghost" className="p-0 text-primary text-lg font-serif italic hover:text-primary/80 no-underline hover:no-underline">
                Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full bg-secondary overflow-hidden"
          >
            <img 
              src={heroBrand} 
              alt="Luxury Lifestyle" 
              className="w-full h-full object-contain bg-[#0A192F] transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* Services/Highlights */}
      <section className="py-24 bg-[#0A192F] text-white overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              subtitle="Our Services" 
              title="Tailored Experiences" 
              light 
              centered 
            />
          </motion.div>
          
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
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group p-8 border border-white/10 hover:border-primary/50 transition-colors bg-white/5 hover:bg-white/10"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 relative h-[300px] md:h-[700px] bg-white shadow-2xl"
            >
              <img 
                src={vesselInterior} 
                alt="Interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 md:-ml-12 z-10 bg-white p-8 md:p-12 shadow-xl border-l-4 border-primary"
            >
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
            </motion.div>
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
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container-wide max-w-4xl mx-auto"
        >
          <SectionHeading centered title="Ready for Your Voyage?" />
          <p className="text-xl text-muted-foreground font-light mb-12">
            Availability is limited. Contact our concierge to secure your preferred dates for the coming season.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-12 py-8 text-xl font-serif italic shadow-xl shadow-primary/20">
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <SectionHeading centered subtitle="Visual Journey" title="A Glimpse of Yacht XVII" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-16">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img 
                  src={src} 
                  alt={`Gallery Preview ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-10 py-6 text-lg font-serif italic tracking-wide">
                View More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-secondary/20">
        <div className="container-wide">
          <SectionHeading centered subtitle="Testimonials" title="Guest Experiences" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[review1, review2, review3, review4].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white p-4 shadow-md border border-border"
              >
                <img 
                  src={src} 
                  alt={`Guest Review ${i + 1}`} 
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
