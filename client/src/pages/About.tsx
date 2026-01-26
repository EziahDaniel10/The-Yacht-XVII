import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import founderImg from "@/assets/images/founder.jpg";

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <div className="container-wide py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading centered subtitle="Our Story" title="Vision, Intention, & Excellence" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-16 pb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-headings:font-serif text-muted-foreground font-light"
        >
          <p className="text-xl text-foreground font-normal">
            Yacht XVII was born from vision, intention, and a lifelong appreciation for excellence.
          </p>
          <p>
            For over 20 years, Michael has built his life as a successful businessman, guided by discipline, creativity, and an unwavering belief in quality. Known to many as Q—a professional model and celebrity barber—his journey has always balanced public recognition with a deeply private spirit. When the time came to purchase his stunning 50-foot Sea Ray, his goal was simple: enjoy yachting at the highest level while remaining grounded, humble, and true to himself.
          </p>
          <p>
            Naming the vessel was no ordinary task. Drawing from his creative roots, Michael branded the yacht with meaning. Yacht XVII represents the 17th letter of the alphabet—Q, a subtle nod to his nickname. The Roman numeral XVII also carries a deeper visual story: the V, formed upward and downward, symbolizes strength, balance, and pride in his home state of Virginia. Every detail reflects intention without excess—luxury without loudness.
          </p>
          <p>
            Yacht XVII is more than a yacht; it is an experience. As guests step aboard, they are welcomed into a world of refined craftsmanship and curated elegance. From marble finishes and rich mahogany woods to hand-selected Hermès décor, each element has been thoughtfully chosen to evoke comfort, class, and timeless luxury.
          </p>
          <p>
            Above all, Yacht XVII exists to be shared. Michael’s passion for yachting comes alive through the joy of hosting others—creating moments, memories, and a space where elegance meets ease along the waters of Washington, DC.
          </p>
          <p className="font-serif italic text-foreground">
            Welcome aboard Yacht XVII—where vision sails, and luxury feels personal.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[600px]"
        >
           <img 
            src={founderImg} 
            alt="Michael, founder of Yacht XVII" 
            className="w-full h-full object-cover shadow-2xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#0A192F] p-8 flex items-center justify-center text-center"
          >
            <div>
              <span className="block text-4xl font-serif text-primary font-bold mb-2">20</span>
              <span className="text-white/80 uppercase tracking-widest text-xs">Years of Excellence</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="bg-secondary/30 py-32">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading centered subtitle="Our Philosophy" title="Guided by Passion" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              {
                title: "Privacy",
                desc: "Your time onboard is sacred. We guarantee absolute discretion and privacy for you and your guests."
              },
              {
                title: "Safety",
                desc: "With a veteran captain and rigorous maintenance protocols, your safety is our non-negotiable priority."
              },
              {
                title: "Service",
                desc: "A 1:3 crew-to-guest ratio ensures that your glass is never empty and your requests are instantly met."
              }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <h3 className="text-2xl font-serif mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
