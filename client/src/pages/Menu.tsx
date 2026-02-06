import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Wine, Anchor } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroImg from "@assets/WhatsApp_Image_2026-01-31_at_5.38.05_PM_1769877506024.jpeg";
import fruityPebbleImg from "@assets/image_1770148221724.png";
import cocoKrispyImg from "@assets/image_1770148224372.png";

const brunchMenu = {
  starters: {
    title: "Small Bites & Starters",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&q=80",
    items: [
      "Mini Crab Salad Brioche Sliders – Jumbo lump crab, lemon aioli, chives",
      "Smoked Salmon Crostini – Herb cream cheese, cucumber, capers",
      "Truffle Deviled Eggs – Truffle oil, chives",
      "Spinach & Artichoke Stuffed Mushrooms – Herbed panko, shaved Parmesan",
    ],
  },
  proteins: {
    title: "Brunch Proteins",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    items: [
      "Lemon Herb-Grilled Chicken – Citrus-marinated, tender and juicy",
      "Blackened Salmon – Mild spice, Creole remoulade",
      "Brown Sugar Glazed Bacon – Thick-cut, lightly crisped",
      "Chicken Sausage Links – Herb-forward, lightly grilled",
    ],
  },
  sides: {
    title: "Brunch Sides",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
    items: [
      "Cheesy Southern Grits – Stone-ground, creamy finish",
      "Roasted Breakfast Potatoes – Herb oil, sea salt",
      "Fresh Fruit Salad – Seasonal fruit, mint syrup",
      "Greek Chopped Salad – Cucumber, tomato, olives, feta",
    ],
  },
  sweets: {
    title: "Sweet Finishes",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    items: [
      "Chocolate-Dipped Strawberries",
      "Vanilla Bean Cheesecake Cups – Assorted toppings",
      "Fresh-Baked Chocolate Chip Cookies",
    ],
  },
  seafoodUpgrade: {
    title: "Seafood Brunch Upgrade",
    price: "+$22 per person",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80",
    items: [
      "Old Bay Poached Shrimp – Lemon cocktail sauce",
      "Smoked Salmon Display – Herb cream cheese, capers, cucumber",
      "Crab & Corn Salad Cups – Light citrus dressing",
    ],
  },
  packages: [
    { name: "Classic Yacht Brunch", price: "$60/person", details: "1 Protein, 2 Sides, 1 Starter, 1 Sweet" },
    { name: "Signature Yacht Brunch", price: "$80/person", details: "2 Proteins, 2 Sides, 2 Starters, 2 Sweets" },
    { name: "Ultra-Luxe Yacht Brunch", price: "$100/person", details: "3 Proteins, 3 Sides, 3 Starters, 2 Sweets" },
  ],
  beverages: [
    { name: "Prosecco", price: "$55/bottle" },
    { name: "Champagne", price: "$85/bottle" },
    { name: "Sauvignon Blanc", price: "$60/bottle" },
    { name: "Chardonnay", price: "$65/bottle" },
    { name: "Chef B Rum Punch", price: "$65/pitcher" },
    { name: "Classic Mimosa", price: "$60/pitcher" },
  ],
};

const elevatedTreats = [
  { 
    name: "Chocolate Chip Cookie", 
    price: "$30 each",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80"
  },
  { 
    name: "Fruity Pebble Rice Krispy Treat", 
    price: "$30 each",
    image: fruityPebbleImg
  },
  { 
    name: "Coco Krispy Treat", 
    price: "$30 each",
    image: cocoKrispyImg
  },
  { 
    name: "Double Chocolate Brownies", 
    price: "$40 each",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80"
  },
  { 
    name: "Gummies", 
    price: "$30",
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&q=80"
  },
];

const dinnerMenu = {
  smallBites: {
    title: "Small Bites",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&q=80",
    items: [
      "Mini Crab Salad Brioche Sliders – Lemon aioli, chives",
      "Steakhouse Beef Crostini – Boursin, pickled onion, balsamic glaze",
      "Waldorf Chicken Salad Sliders – Apple, grape, cashew, dill",
      "Spanish Beef Empanadas – Cilantro cream, salsa verde",
      "Truffle Deviled Eggs – Truffle oil, chives",
      "Brie & Fig Crostini – Honey drizzle, toasted seeds",
    ],
  },
  proteins: {
    title: "Chef-Curated Proteins",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    items: [
      "Jerk Chicken Wings – Roasted pineapple salsa",
      "Lemon Herb-Grilled Chicken – Tzatziki",
      "Coconut Curry Shrimp – Dairy-free coconut curry",
      "Chimichurri Wagyu Meatballs – Herb-forward finish",
      "Blackened Salmon – Creole remoulade",
    ],
  },
  sides: {
    title: "Seasonal Sides",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    items: [
      "Roasted Sweet Potato & Farro Salad – Cranberry, pecan, maple vinaigrette",
      "Grilled Seasonal Vegetables – Lemon, olive oil, chili",
      "Creamy Truffle Mac & Cheese – Three-cheese blend",
      "Watermelon, Cucumber & Feta Salad – Mint, citrus, balsamic",
      "Coconut Jasmine Rice",
      "Southern Potato Salad",
    ],
  },
  seafoodUpgrade: {
    title: "Seafood Upgrade",
    price: "+$28 per person",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80",
    items: [
      "Old Bay Poached Shrimp – Lemon cocktail sauce",
      "Smoked Salmon Display – Herb cream cheese, capers, cucumber",
      "Crab & Corn Salad Cups – Light citrus dressing",
    ],
  },
  packages: [
    { name: "Small Bites Cocktail Service", price: "$45/person", details: "Choose any 3 Small Bites" },
    { name: "The Coastal Buffet", price: "$65/person", details: "1 Protein, 2 Sides, 1 Small Bite, 1 Dessert" },
    { name: "The Signature Yacht Buffet", price: "$85/person", details: "2 Proteins, 2 Sides, 2 Small Bites, 2 Desserts" },
    { name: "The Ultra-Luxe Yacht Experience", price: "$110/person", details: "3 Proteins, 3 Sides, 3 Small Bites, 2 Desserts" },
  ],
};

function TreatItem({ name, price, image }: { name: string; price: string; image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-foreground mb-2">{name}</h3>
        <span className="text-lg font-medium text-primary">{price}</span>
      </div>
    </motion.div>
  );
}

function MenuCategory({ title, image, items, price }: { title: string; image: string; items: string[]; price?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-serif text-foreground">{title}</h3>
          {price && <span className="text-primary font-semibold text-sm">{price}</span>}
        </div>
        <div className="space-y-2">
          {items.map((item, index) => (
            <p key={index} className="text-sm text-foreground leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [menuType, setMenuType] = useState<"brunch" | "dinner" | "treats">("brunch");
  const [showReservationPrompt, setShowReservationPrompt] = useState(false);

  const handlePreOrder = () => {
    setShowReservationPrompt(true);
  };

  const currentMenu = menuType === "brunch" ? brunchMenu : dinnerMenu;

  return (
    <div className="bg-background">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src={heroImg} 
            alt="Chef B Meals" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-sm font-bold uppercase tracking-[0.3em] mb-4 text-white/90"
          >
            Curated Yacht Cuisine
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-serif mb-4"
          >
            Chef B Meals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl font-light text-white max-w-2xl mx-auto"
          >
            Elevated Comfort • Coastal Influence • Effortless Yacht Service
          </motion.p>
        </div>
      </section>

      <div className="container-wide py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-secondary/30 p-6 mb-12 border-l-4 border-primary"
        >
          <h3 className="font-serif text-lg text-primary mb-2">{menuType === "treats" ? "Captain's Recommendation (DISCLAIMER)" : "Captain's Recommendation"}</h3>
          <p className="text-foreground">
            {menuType === "brunch" 
              ? "For the smoothest onboard service, we recommend selecting one brunch package and adding the Seafood Brunch Upgrade. All items are designed to hold well with minimal galley use."
              : menuType === "dinner"
              ? "For cocktail cruises and sunset sails, we recommend the Small Bites option. For longer charters, guests typically prefer the Coastal or Signature Buffet selections."
              : <><span className="font-bold">Our ELEVATED treats</span> are perfect for adding a sweet <span className="font-bold">VIBE</span> to your charter experience. Ideal for celebrations, birthdays, or as a special surprise for your guests, these are cannabis-infused desserts. <span className="font-bold">Must be 21 years of age or older to consume.</span></>}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          <Button
            variant={menuType === "brunch" ? "default" : "outline"}
            onClick={() => setMenuType("brunch")}
            className="rounded-none px-8 py-6"
            data-testid="button-brunch-menu"
          >
            <UtensilsCrossed className="w-5 h-5 mr-2" />
            Brunch Menu
          </Button>
          <Button
            variant={menuType === "dinner" ? "default" : "outline"}
            onClick={() => setMenuType("dinner")}
            className="rounded-none px-8 py-6"
            data-testid="button-dinner-menu"
          >
            <UtensilsCrossed className="w-5 h-5 mr-2" />
            Lunch / Dinner Menu
          </Button>
          <Button
            variant={menuType === "treats" ? "default" : "outline"}
            onClick={() => setMenuType("treats")}
            className="rounded-none px-8 py-6"
            data-testid="button-treats-menu"
          >
            <UtensilsCrossed className="w-5 h-5 mr-2" />
            Elevated Treats
          </Button>
        </motion.div>

        <motion.div
          key={menuType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {menuType === "brunch" ? (
              <>
                <MenuCategory {...brunchMenu.starters} />
                <MenuCategory {...brunchMenu.proteins} />
                <MenuCategory {...brunchMenu.sides} />
                <MenuCategory {...brunchMenu.sweets} />
                <MenuCategory {...brunchMenu.seafoodUpgrade} />
              </>
            ) : menuType === "dinner" ? (
              <>
                <MenuCategory {...dinnerMenu.smallBites} />
                <MenuCategory {...dinnerMenu.proteins} />
                <MenuCategory {...dinnerMenu.sides} />
                <MenuCategory {...dinnerMenu.seafoodUpgrade} />
              </>
            ) : (
              <>
                {elevatedTreats.map((treat, index) => (
                  <TreatItem key={index} {...treat} />
                ))}
              </>
            )}
          </div>

          {menuType !== "treats" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A192F] text-white py-16 px-8 md:px-16 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-center mb-2">
              {menuType === "brunch" ? "Brunch Package Pricing" : "Yacht Buffet Packages & Pricing"}
            </h2>
            <p className="text-white text-center mb-12">Select your package and customize your selections</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentMenu.packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-serif text-lg text-primary mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-serif mb-3">{pkg.price}</div>
                  <p className="text-white text-sm">{pkg.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
          )}

          {menuType === "brunch" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/30 p-8 mb-16 border border-primary/10"
            >
              <h3 className="text-xl font-serif text-primary mb-6 flex items-center gap-2">
                <Wine className="w-5 h-5" />
                Wine & Brunch Cocktails (Bottle & Pitcher Service)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {brunchMenu.beverages.map((bev, index) => (
                  <div key={index} className="text-center p-4 bg-white border border-border">
                    <span className="block text-foreground font-medium mb-1">{bev.name}</span>
                    <span className="text-primary font-serif">{bev.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white p-12 border-t-4 border-primary shadow-lg"
        >
          <h3 className="text-2xl font-serif mb-4">Ready to Pre-Order?</h3>
          <p className="text-foreground mb-8 max-w-xl mx-auto">
            Catering can be added to your reservation. Our team will coordinate with Chef B Meals to ensure your selections are prepared fresh and delivered onboard.
          </p>
          <Button
            onClick={handlePreOrder}
            className="rounded-none px-12 py-6 text-lg font-serif italic bg-primary hover:bg-primary/90"
            data-testid="button-preorder"
          >
            Pre-Order for Your Charter
          </Button>
        </motion.div>

        <Dialog open={showReservationPrompt} onOpenChange={setShowReservationPrompt}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl flex items-center gap-2">
                <Anchor className="w-5 h-5 text-primary" />
                Make a Reservation First
              </DialogTitle>
              <DialogDescription className="pt-4 text-base">
                To pre-order meals from Chef B Meals, you'll need to secure your charter date first. Our team will contact you after your reservation to finalize your catering selections.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/booking">
                <Button 
                  className="w-full rounded-none py-6 font-serif italic bg-primary hover:bg-primary/90"
                  data-testid="button-make-reservation"
                >
                  Make a Reservation
                </Button>
              </Link>
              <Button
                variant="ghost"
                onClick={() => setShowReservationPrompt(false)}
                className="w-full"
                data-testid="button-continue-browsing"
              >
                Continue Browsing Menu
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
