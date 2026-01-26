import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "@assets/image_1769437410924.png";
import img2 from "@assets/image_1769437570817.png";
import img3 from "@assets/image_1769451804559.png";
import img4 from "@assets/image_1769451951304.png";
import img5 from "@assets/image_1769452506659.png";
import img6 from "@assets/image_1769452514652.png";
import img7 from "@assets/image_1769452523508.png";
import img8 from "@assets/image_1769452530056.png";
import img9 from "@assets/WhatsApp_Image_2026-01-23_at_2.04.40_PM_1769446843150.jpeg";
import img10 from "@assets/WhatsApp_Image_2026-01-23_at_7.05.34_PM_1769191699463.jpeg";
import img11 from "@assets/WhatsApp_Image_2026-01-24_at_10.20.23_PM_1769446566616.jpeg";
import img12 from "@assets/WhatsApp_Image_2026-01-24_at_10.24.54_PM_1769445655383.jpeg";
import img13 from "@assets/WhatsApp_Image_2026-01-24_at_10.49.01_PM_1769443649883.jpeg";
import img14 from "@assets/WhatsApp_Image_2026-01-24_at_10.50.09_PM_1769443660290.jpeg";
import img15 from "@assets/WhatsApp_Image_2026-01-24_at_1.09.54_PM_1769256671119.jpeg";
import img16 from "@assets/WhatsApp_Image_2026-01-24_at_11.11.41_AM_1769256463733.jpeg";
import img17 from "@assets/WhatsApp_Image_2026-01-24_at_9.55.08_PM_1769437131112.jpeg";
import img18 from "@assets/WhatsApp_Image_2026-01-24_at_9.57.22_PM_1769437368694.jpeg";
import img19 from "@assets/WhatsApp_Image_2026-01-24_at_9.57.22_PM_1769443765494.jpeg";
import img20 from "@assets/WhatsApp_Image_2026-01-26_at_5.22.48_PM_1769444599713.jpeg";

const galleryImages = [
  { id: 1, src: img1, category: "Exterior", title: "Luxury on the Potomac" },
  { id: 2, src: img2, category: "Interior", title: "Premium Comfort" },
  { id: 3, src: img3, category: "Lifestyle", title: "Unforgettable Moments" },
  { id: 4, src: img4, category: "Exterior", title: "Sleek Design" },
  { id: 5, src: img5, category: "Interior", title: "Elegant Spaces" },
  { id: 6, src: img6, category: "Lifestyle", title: "Potomac Voyage" },
  { id: 7, src: img7, category: "Exterior", title: "Golden Hour" },
  { id: 8, src: img8, category: "Interior", title: "Refined Luxury" },
  { id: 9, src: img9, category: "Lifestyle", title: "Elite Service" },
  { id: 10, src: img10, category: "Exterior", title: "The Wharf Presence" },
  { id: 11, src: img11, category: "Interior", title: "Master Suite" },
  { id: 12, src: img12, category: "Lifestyle", title: "Sunset Celebration" },
  { id: 13, src: img13, category: "Exterior", title: "Iconic Views" },
  { id: 14, src: img14, category: "Interior", title: "Gourmet Galley" },
  { id: 15, src: img15, category: "Lifestyle", title: "Exclusive Charter" },
  { id: 16, src: img16, category: "Exterior", title: "Washington DC Backdrop" },
  { id: 17, src: img17, category: "Interior", title: "Social Lounge" },
  { id: 18, src: img18, category: "Lifestyle", title: "Summer Vibes" },
  { id: 19, src: img19, category: "Exterior", title: "Potomac Serenity" },
  { id: 20, src: img20, category: "Interior", title: "Exquisite Details" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedImage(index);
  const closeImage = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="The Gallery"
          subtitle="Explore the exquisite details of Yacht XVII and the unforgettable experiences on the Potomac."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.1 }}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-none"
              onClick={() => openImage(index)}
              data-testid={`gallery-item-${image.id}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-primary mb-1 block">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-serif text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-white hover:bg-white/10"
            onClick={closeImage}
            data-testid="button-close-lightbox"
          >
            <X className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-6 text-white hover:bg-white/10"
            onClick={prevImage}
            data-testid="button-prev-image"
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>

          <div className="relative max-h-[85vh] max-w-[90vw]">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="max-h-full max-w-full object-contain shadow-2xl"
            />
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <span className="text-primary tracking-widest uppercase text-xs mb-1 block">
                {galleryImages[selectedImage].category}
              </span>
              <h4 className="text-white font-serif text-xl">
                {galleryImages[selectedImage].title}
              </h4>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-6 text-white hover:bg-white/10"
            onClick={nextImage}
            data-testid="button-next-image"
          >
            <ChevronRight className="h-10 w-10" />
          </Button>
        </div>
      )}
    </div>
  );
}
