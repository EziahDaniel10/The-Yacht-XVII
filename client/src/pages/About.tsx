import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <div className="container-wide py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading centered subtitle="Our Story" title="A Legacy of Excellence" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-16 pb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-headings:font-serif text-muted-foreground font-light"
        >
          <p className="text-xl text-foreground font-normal">
            Yacht XVII was born from a simple yet ambitious vision: to create the most refined charter experience on the Mediterranean.
          </p>
          <p>
            Commissioned in 2020 by a private collector with a passion for maritime design, the vessel represents the convergence of Italian craftsmanship and modern nautical engineering. Every curve of the hull and stitch of the upholstery was overseen with obsessive attention to detail.
          </p>
          <p>
            Today, Yacht XVII is managed by a dedicated team of maritime professionals who share a singular goal: to anticipate your needs before you even speak them. We believe that true luxury lies not just in the object, but in the experience—the seamless service, the curated itinerary, and the freedom to explore the world on your own terms.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[600px]"
        >
           {/* Unsplash: Captain/Crew or refined yacht detail */}
           <img 
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop" 
            alt="Captain at helm" 
            className="w-full h-full object-cover shadow-2xl"
          />
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#0A192F] p-8 flex items-center justify-center text-center">
            <div>
              <span className="block text-4xl font-serif text-primary font-bold mb-2">15+</span>
              <span className="text-white/80 uppercase tracking-widest text-xs">Years of Maritime Excellence</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="bg-secondary/30 py-32">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <SectionHeading centered subtitle="Our Philosophy" title="Guided by Passion" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-serif mb-4 text-foreground">Privacy</h3>
              <p className="text-muted-foreground font-light">Your time onboard is sacred. We guarantee absolute discretion and privacy for you and your guests.</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4 text-foreground">Safety</h3>
              <p className="text-muted-foreground font-light">With a veteran captain and rigorous maintenance protocols, your safety is our non-negotiable priority.</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4 text-foreground">Service</h3>
              <p className="text-muted-foreground font-light">A 1:3 crew-to-guest ratio ensures that your glass is never empty and your requests are instantly met.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
