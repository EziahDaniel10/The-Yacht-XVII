import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
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
import gallery22 from "@assets/WhatsApp_Image_2026-01-31_at_3.40.41_PM_(2)_1769874033957.jpeg";
import gallery23 from "@assets/WhatsApp_Image_2026-01-31_at_3.40.41_PM_1769874033962.jpeg";
import gallery24 from "@assets/WhatsApp_Image_2026-01-31_at_3.40.39_PM_1769874033966.jpeg";
import gallery25 from "@assets/WhatsApp_Image_2026-01-31_at_3.40.40_PM_(1)_1769874033967.jpeg";
import gallery26 from "@assets/WhatsApp_Image_2026-01-31_at_3.40.40_PM_(2)_1769874033967.jpeg";
import gallery27 from "@assets/WhatsApp_Image_2026-01-31_at_3.40.40_PM_1769874033969.jpeg";
import gallery28 from "@assets/WhatsApp_Image_2026-01-31_at_3.40.41_PM_(1)_1769874033970.jpeg";
import gallery29 from "@assets/WhatsApp_Image_2026-02-03_at_9.32.20_PM_1770217035004.jpeg";
import gallery30 from "@assets/WhatsApp_Image_2026-02-03_at_9.32.30_PM_1770217035005.jpeg";
import gallery31 from "@assets/WhatsApp_Image_2026-02-03_at_9.32.39_PM_1770217035005.jpeg";
import gallery32 from "@assets/WhatsApp_Image_2026-02-03_at_9.32.49_PM_1770217035006.jpeg";
import gallery33 from "@assets/WhatsApp_Image_2026-02-03_at_9.33.00_PM_1770217035007.jpeg";
import gallery34 from "@assets/WhatsApp_Image_2026-02-03_at_9.29.26_PM_1770217035009.jpeg";
import gallery35 from "@assets/WhatsApp_Image_2026-02-03_at_9.29.31_PM_1770217035010.jpeg";
import gallery36 from "@assets/WhatsApp_Image_2026-02-03_at_9.29.36_PM_1770217035011.jpeg";
import gallery37 from "@assets/WhatsApp_Image_2026-02-03_at_9.29.41_PM_1770217035011.jpeg";
import gallery38 from "@assets/WhatsApp_Image_2026-02-03_at_9.30.00_PM_1770217035012.jpeg";
import gallery39 from "@assets/WhatsApp_Image_2026-02-03_at_9.30.25_PM_1770217035013.jpeg";
import gallery40 from "@assets/WhatsApp_Image_2026-02-03_at_9.30.46_PM_1770217035014.jpeg";
import gallery41 from "@assets/WhatsApp_Image_2026-02-03_at_9.30.55_PM_1770217035015.jpeg";
import gallery42 from "@assets/WhatsApp_Image_2026-02-03_at_9.31.06_PM_1770217035016.jpeg";
import gallery43 from "@assets/WhatsApp_Image_2026-02-03_at_9.31.15_PM_1770217035017.jpeg";
import gallery44 from "@assets/WhatsApp_Image_2026-02-03_at_9.31.28_PM_1770217035017.jpeg";
import gallery45 from "@assets/WhatsApp_Image_2026-02-03_at_9.31.33_PM_1770217035019.jpeg";
import gallery46 from "@assets/WhatsApp_Image_2026-02-03_at_9.31.45_PM_1770217035020.jpeg";
import gallery47 from "@assets/WhatsApp_Image_2026-02-03_at_9.31.56_PM_1770217035021.jpeg";
import gallery48 from "@assets/WhatsApp_Image_2026-02-03_at_9.32.09_PM_1770217035022.jpeg";
import gallery49 from "@assets/WhatsApp_Image_2026-02-03_at_9.33.08_PM_1770217272972.jpeg";
import gallery50 from "@assets/WhatsApp_Image_2026-02-03_at_9.33.26_PM_1770217272976.jpeg";
import gallery51 from "@assets/WhatsApp_Image_2026-02-02_at_9.04.17_PM_1770217360317.jpeg";
import gallery52 from "@assets/WhatsApp_Image_2026-02-02_at_9.05.43_PM_1770217360323.jpeg";
import gallery53 from "@assets/WhatsApp_Image_2026-02-03_at_8.53.54_PM_1770217360324.jpeg";
import gallery54 from "@assets/WhatsApp_Image_2026-02-03_at_8.54.37_PM_1770217360331.jpeg";
import gallery55 from "@assets/WhatsApp_Image_2026-02-02_at_9.03.50_PM_1770217414093.jpeg";

const galleryVideos = [
  { id: "v1", src: "/assets/WhatsApp_Video_2026-01-31_at_3.40.40_PM_(1)_1769874033964.mp4", title: "Sunset Cruise", category: "Video" },
  { id: "v2", src: "/assets/WhatsApp_Video_2026-01-31_at_3.40.40_PM_1769874033965.mp4", title: "Charter Moments", category: "Video" },
  { id: "v3", src: "/assets/WhatsApp_Video_2026-02-03_at_9.30.35_PM_1770217272977.mp4", title: "On the Water", category: "Video" },
  { id: "v4", src: "/assets/WhatsApp_Video_2026-02-02_at_9.05.30_PM_1770217360321.mp4", title: "Golden Hour", category: "Video" },
  { id: "v5", src: "/assets/WhatsApp_Video_2026-02-03_at_8.54.25_PM_1770217360331.mp4", title: "Party Time", category: "Video" },
  { id: "v6", src: "/assets/WhatsApp_Video_2026-02-02_at_9.03.44_PM_1770217414095.mp4", title: "Friends Cruising", category: "Video" },
  { id: "v7", src: "/assets/WhatsApp_Video_2026-02-02_at_9.04.01_PM_1770217414099.mp4", title: "Deck Life", category: "Video" },
];

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
  { id: 22, src: gallery22, category: "Lifestyle", title: "Elegant Guest" },
  { id: 23, src: gallery23, category: "Lifestyle", title: "Deck Party" },
  { id: 24, src: gallery24, category: "Lifestyle", title: "Sunset Toast" },
  { id: 25, src: gallery25, category: "Lifestyle", title: "Golden Moments" },
  { id: 26, src: gallery26, category: "Lifestyle", title: "Tropical Cocktails" },
  { id: 27, src: gallery27, category: "Lifestyle", title: "Night Vibes" },
  { id: 28, src: gallery28, category: "Lifestyle", title: "Birthday Celebration" },
  { id: 29, src: gallery29, category: "Lifestyle", title: "Couple with Flowers" },
  { id: 30, src: gallery30, category: "Lifestyle", title: "Romantic Moment" },
  { id: 31, src: gallery31, category: "Lifestyle", title: "Girls Day Out" },
  { id: 32, src: gallery32, category: "Exterior", title: "Yacht Bow View" },
  { id: 33, src: gallery33, category: "Lifestyle", title: "Evening with Friends" },
  { id: 34, src: gallery34, category: "Lifestyle", title: "Captain Service" },
  { id: 35, src: gallery35, category: "Lifestyle", title: "Cruising in Style" },
  { id: 36, src: gallery36, category: "Lifestyle", title: "Party Vibes" },
  { id: 37, src: gallery37, category: "Interior", title: "Photoshoot Moment" },
  { id: 38, src: gallery38, category: "Lifestyle", title: "Engagement Celebration" },
  { id: 39, src: gallery39, category: "Lifestyle", title: "Cheers on Deck" },
  { id: 40, src: gallery40, category: "Interior", title: "Cabin Views" },
  { id: 41, src: gallery41, category: "Lifestyle", title: "Group Charter" },
  { id: 42, src: gallery42, category: "Lifestyle", title: "Ladies Cruise" },
  { id: 43, src: gallery43, category: "Lifestyle", title: "Sunset Portrait" },
  { id: 44, src: gallery44, category: "Interior", title: "Stylish Guest" },
  { id: 45, src: gallery45, category: "Exterior", title: "Yacht XVII Decorated" },
  { id: 46, src: gallery46, category: "Lifestyle", title: "Bridge Cruise" },
  { id: 47, src: gallery47, category: "Lifestyle", title: "Couple Chat" },
  { id: 48, src: gallery48, category: "Exterior", title: "Bow Sunbathing" },
  { id: 49, src: gallery49, category: "Lifestyle", title: "Friends Enjoying" },
  { id: 50, src: gallery50, category: "Lifestyle", title: "Selfie Time" },
  { id: 51, src: gallery51, category: "Exterior", title: "Sunset Reflection" },
  { id: 52, src: gallery52, category: "Exterior", title: "Deck at Sunset" },
  { id: 53, src: gallery53, category: "Lifestyle", title: "Purple Party" },
  { id: 54, src: gallery54, category: "Lifestyle", title: "Georgetown Views" },
  { id: 55, src: gallery55, category: "Lifestyle", title: "Girlfriends Getaway" },
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

        {galleryVideos.length > 0 && (
          <div className="mt-12 mb-8">
            <h3 className="text-xl font-serif text-primary mb-6 text-center">Featured Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-video overflow-hidden rounded-none"
                  data-testid={`gallery-video-${video.id}`}
                >
                  <video
                    src={video.src}
                    className="h-full w-full object-cover"
                    controls
                    muted
                    preload="metadata"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 text-xs uppercase tracking-widest flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    {video.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

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
