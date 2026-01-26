import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80", category: "Exterior", title: "Sleek Profile" },
  { id: 2, src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80", category: "Interior", title: "Luxury Salon" },
  { id: 3, src: "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?auto=format&fit=crop&q=80", category: "Lifestyle", title: "Sunset Toast" },
  { id: 4, src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80", category: "Exterior", title: "Aerial View" },
  { id: 5, src: "https://images.unsplash.com/photo-1544413647-795e1c1078ee?auto=format&fit=crop&q=80", category: "Interior", title: "Master Suite" },
  { id: 6, src: "https://images.unsplash.com/photo-1562280963-8a5475549aa6?auto=format&fit=crop&q=80", category: "Lifestyle", title: "Dining on Deck" },
  { id: 7, src: "https://images.unsplash.com/photo-1563299434-3670997f7480?auto=format&fit=crop&q=80", category: "Exterior", title: "Potomac Waters" },
  { id: 8, src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80", category: "Interior", title: "Helm Station" },
  { id: 9, src: "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?auto=format&fit=crop&q=80", category: "Lifestyle", title: "Captain Mike" },
  { id: 10, src: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80", category: "Exterior", title: "Golden Hour" },
  { id: 11, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", category: "Interior", title: "Kitchen Galley" },
  { id: 12, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80", category: "Lifestyle", title: "Celebration" },
  { id: 13, src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80", category: "Exterior", title: "The Wharf View" },
  { id: 14, src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80", category: "Interior", title: "Guest Stateroom" },
  { id: 15, src: "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?auto=format&fit=crop&q=80", category: "Lifestyle", title: "Barber Lounge" },
  { id: 16, src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80", category: "Exterior", title: "Night Lights" },
  { id: 17, src: "https://images.unsplash.com/photo-1563299434-3670997f7480?auto=format&fit=crop&q=80", category: "Interior", title: "Lounge Area" },
  { id: 18, src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80", category: "Lifestyle", title: "Summer Vibe" },
  { id: 19, src: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80", category: "Exterior", title: "Potomac Bridge" },
  { id: 20, src: "https://images.unsplash.com/photo-1562280963-8a5475549aa6?auto=format&fit=crop&q=80", category: "Interior", title: "Dining Detail" },
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
              transition={{ delay: index * 0.05 }}
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
