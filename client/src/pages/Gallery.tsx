import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import gallery1 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.11_PM_1769453991950.jpeg";
import gallery2 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.12_PM_1769453991951.jpeg";
import gallery3 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.13_PM_(1)_1769453991952.jpeg";
import gallery4 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.13_PM_(2)_1769453991953.jpeg";
import gallery5 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.13_PM_(3)_1769453991954.jpeg";
import gallery6 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.13_PM_1769453991954.jpeg";
import gallery7 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.14_PM_(1)_1769453991955.jpeg";
import gallery8 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.14_PM_(2)_1769453991956.jpeg";
import gallery9 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.14_PM_1769453991956.jpeg";
import gallery10 from "@assets/WhatsApp_Image_2026-01-26_at_7.17.55_PM_(2)_1769453991957.jpeg";
import gallery11 from "@assets/WhatsApp_Image_2026-01-26_at_7.17.55_PM_1769453991958.jpeg";
import gallery12 from "@assets/WhatsApp_Image_2026-01-26_at_7.17.56_PM_(1)_1769453991958.jpeg";
import gallery13 from "@assets/WhatsApp_Image_2026-01-26_at_7.17.57_PM_1769453991960.jpeg";
import gallery14 from "@assets/WhatsApp_Image_2026-01-26_at_7.17.58_PM_1769453991961.jpeg";
import gallery15 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.09_PM_1769453991963.jpeg";
import gallery16 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.10_PM_(1)_1769453991964.jpeg";
import gallery17 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.10_PM_1769453991965.jpeg";
import gallery18 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.11_PM_(1)_1769453991965.jpeg";
import gallery19 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.11_PM_(2)_1769453991966.jpeg";
import gallery20 from "@assets/WhatsApp_Image_2026-01-26_at_7.18.11_PM_(3)_1769453991967.jpeg";
import gallery21 from "@assets/WhatsApp_Image_2026-01-26_at_8.28.00_PM_1769457409810.jpeg";

const galleryImages = [
  { id: 1, src: gallery1, category: "Lifestyle", title: "Luxury Lounge" },
  { id: 2, src: gallery2, category: "Lifestyle", title: "Potomac Views" },
  { id: 3, src: gallery3, category: "Interior", title: "Elite Interior" },
  { id: 4, src: gallery4, category: "Lifestyle", title: "Golden Hour" },
  { id: 5, src: gallery5, category: "Interior", title: "Premium Comfort" },
  { id: 6, src: gallery6, category: "Lifestyle", title: "On-Deck Fun" },
  { id: 7, src: gallery7, category: "Lifestyle", title: "Group Celebration" },
  { id: 8, src: gallery8, category: "Interior", title: "Luxury Details" },
  { id: 9, src: gallery9, category: "Lifestyle", title: "Sunset Vibe" },
  { id: 10, src: gallery10, category: "Lifestyle", title: "Evening Lights" },
  { id: 11, src: gallery11, category: "Exterior", title: "The Yacht XVII" },
  { id: 12, src: gallery12, category: "Exterior", title: "Capital Wheel View" },
  { id: 13, src: gallery13, category: "Lifestyle", title: "Friends Aboard" },
  { id: 14, src: gallery14, category: "Exterior", title: "Wharf Presence" },
  { id: 15, src: gallery15, category: "Lifestyle", title: "City Lights" },
  { id: 16, src: gallery16, category: "Exterior", title: "Night Skyline" },
  { id: 17, src: gallery17, category: "Lifestyle", title: "Guest Experience" },
  { id: 18, src: gallery18, category: "Lifestyle", title: "Cheers to Luxury" },
  { id: 19, src: gallery19, category: "Lifestyle", title: "Relaxing Deck" },
  { id: 20, src: gallery20, category: "Lifestyle", title: "Social Gathering" },
  { id: 21, src: gallery21, category: "Interior", title: "Sun-Drenched Salon" },
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
          subtitle="Authentic moments and exquisite details from our latest charters on the Potomac."
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
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            data-testid="button-prev-image"
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>

          <div className="relative max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
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
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            data-testid="button-next-image"
          >
            <ChevronRight className="h-10 w-10" />
          </Button>
        </div>
      )}
    </div>
  );
}
