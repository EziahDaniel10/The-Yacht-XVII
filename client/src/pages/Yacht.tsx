import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import interiorImg from "@/assets/images/yacht-interior-2.jpg";
import cockpitImg from "@/assets/images/yacht-cockpit.jpg";

const specs = [
  { label: "Length", value: "50 ft" },
  { label: "Builder", value: "Sea Ray" },
  { label: "Year", value: "2005" },
  { label: "Guests", value: "12" },
  { label: "Cabins", value: "3" },
  { label: "Crew", value: "3" },
];

const gallery = [
  cockpitImg,
  interiorImg,
];

export default function Yacht() {
  return (
    <div className="pt-24 min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <div className="container-wide py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading centered subtitle="The Vessel" title="Technical Brilliance" />
        </motion.div>
      </div>

      {/* Gallery Carousel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container-wide mb-16"
      >
        <Carousel className="w-full">
          <CarouselContent>
            {gallery.map((src, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/1 lg:basis-1/1">
                <div className="p-1">
                  <div className="overflow-hidden aspect-[16/9] shadow-lg">
                    <img src={src} alt={`Yacht view ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-12 border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </motion.div>

      {/* Specs Section */}
      <div className="bg-[#0A192F] py-32 text-white">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading subtitle="Specifications" title="Designed for Performance" light />
            <p className="text-white/60 font-light text-lg mb-8 leading-relaxed">
              Yacht XVII combines sleek Italian design with robust engineering. Capable of reaching remote coves quickly while maintaining stability, she is the perfect vessel for exploring the coastline.
            </p>
            <p className="text-white/60 font-light text-lg leading-relaxed">
              The interior is finished in bleached oak and Italian marble, creating a bright, airy atmosphere that connects you with the surrounding sea.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 border border-white/10"
          >
             <Table>
               <TableBody>
                 {specs.map((spec) => (
                   <TableRow key={spec.label} className="border-white/10 hover:bg-white/5">
                     <TableCell className="font-serif text-primary text-lg">{spec.label}</TableCell>
                     <TableCell className="text-right text-white/80 font-light">{spec.value}</TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
