import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const specs = [
  { label: "Length", value: "32 Meters (105 ft)" },
  { label: "Builder", value: "Sanlorenzo" },
  { label: "Year", value: "2021" },
  { label: "Guests", value: "12 Day / 8 Overnight" },
  { label: "Cabins", value: "4 (1 Master, 1 VIP, 2 Twin)" },
  { label: "Crew", value: "4" },
  { label: "Cruising Speed", value: "22 Knots" },
];

const gallery = [
  "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?q=80&w=2073&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566375638419-dd89cf109716?q=80&w=2073&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605281317010-fe5ffe79ba02?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
];

export default function Yacht() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <div className="container-wide py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading centered subtitle="The Vessel" title="Technical Brilliance" />
        </motion.div>
      </div>

      {/* Gallery Carousel */}
      <div className="container-wide mb-32">
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
      </div>

      {/* Specs Section */}
      <div className="bg-[#0A192F] py-32 text-white">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <SectionHeading subtitle="Specifications" title="Designed for Performance" light />
            <p className="text-white/60 font-light text-lg mb-8 leading-relaxed">
              Yacht XVII combines sleek Italian design with robust engineering. Capable of reaching remote coves quickly while maintaining stability, she is the perfect vessel for exploring the coastline.
            </p>
            <p className="text-white/60 font-light text-lg leading-relaxed">
              The interior is finished in bleached oak and Italian marble, creating a bright, airy atmosphere that connects you with the surrounding sea.
            </p>
          </div>
          <div className="bg-white/5 p-8 border border-white/10">
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
          </div>
        </div>
      </div>
    </div>
  );
}
