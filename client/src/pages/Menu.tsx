import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, UtensilsCrossed, Wine, Anchor } from "lucide-react";
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

const brunchPackages = [
  {
    id: "classic-brunch",
    name: "Classic Yacht Brunch",
    price: 60,
    description: "A refined introduction to yacht dining",
    inclusions: ["1 Protein", "2 Sides", "1 Starter", "1 Sweet"],
  },
  {
    id: "signature-brunch",
    name: "Signature Yacht Brunch",
    price: 80,
    description: "Elevated flavors for the discerning palate",
    inclusions: ["2 Proteins", "2 Sides", "2 Starters", "2 Sweets"],
  },
  {
    id: "ultra-luxe-brunch",
    name: "Ultra-Luxe Yacht Brunch",
    price: 100,
    description: "The ultimate brunch experience",
    inclusions: ["3 Proteins", "3 Sides", "3 Starters", "2 Sweets"],
  },
];

const dinnerPackages = [
  {
    id: "small-bites",
    name: "Small Bites Cocktail Service",
    price: 45,
    description: "Perfect for cocktail cruises and sunset sails",
    inclusions: ["Choose any 3 Small Bites"],
  },
  {
    id: "coastal-buffet",
    name: "The Coastal Buffet",
    price: 65,
    description: "Coastal flavors with elegant presentation",
    inclusions: ["1 Protein", "2 Sides", "1 Small Bite", "1 Dessert"],
  },
  {
    id: "signature-buffet",
    name: "The Signature Yacht Buffet",
    price: 85,
    description: "Chef-curated selections for memorable dining",
    inclusions: ["2 Proteins", "2 Sides", "2 Small Bites", "2 Desserts"],
  },
  {
    id: "ultra-luxe-dinner",
    name: "The Ultra-Luxe Yacht Experience",
    price: 110,
    description: "The pinnacle of onboard dining",
    inclusions: ["3 Proteins", "3 Sides", "3 Small Bites", "2 Desserts"],
  },
];

const beverages = [
  { id: "prosecco", name: "Prosecco", price: 55, unit: "bottle" },
  { id: "champagne", name: "Champagne", price: 85, unit: "bottle" },
  { id: "sauvignon-blanc", name: "Sauvignon Blanc", price: 60, unit: "bottle" },
  { id: "chardonnay", name: "Chardonnay", price: 65, unit: "bottle" },
  { id: "rum-punch", name: "Chef B Rum Punch", price: 65, unit: "pitcher" },
  { id: "mimosa", name: "Classic Mimosa", price: 60, unit: "pitcher" },
];

const seafoodUpgrades = {
  brunch: { name: "Premium Seafood Upgrade", price: 22, description: "Add lobster tail, jumbo shrimp, and crab cakes" },
  dinner: { name: "Seafood Luxe Upgrade", price: 28, description: "Add surf & turf options with premium shellfish" },
};

export default function Menu() {
  const [menuType, setMenuType] = useState<"brunch" | "dinner">("brunch");
  const [showReservationPrompt, setShowReservationPrompt] = useState(false);

  const handlePreOrder = () => {
    setShowReservationPrompt(true);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Chef B Meals"
            subtitle="Curated cuisine for your charter experience — fresh, flavorful, and delivered onboard"
            centered
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mt-12 mb-16"
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
        </motion.div>

        <motion.div
          key={menuType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {(menuType === "brunch" ? brunchPackages : dinnerPackages).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="h-full border-border hover:shadow-lg transition-all"
                  data-testid={`menu-package-${pkg.id}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-serif">{pkg.name}</CardTitle>
                    <CardDescription className="mt-1">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-serif text-primary mb-4">
                      ${pkg.price}<span className="text-sm text-muted-foreground font-sans">/person</span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mr-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/30 p-8 border border-primary/10"
            >
              <h3 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5" />
                Seafood Upgrade
              </h3>
              <p className="text-muted-foreground mb-4">
                {menuType === "brunch" ? seafoodUpgrades.brunch.description : seafoodUpgrades.dinner.description}
              </p>
              <div className="text-2xl font-serif text-primary">
                +${menuType === "brunch" ? seafoodUpgrades.brunch.price : seafoodUpgrades.dinner.price}
                <span className="text-sm text-muted-foreground font-sans">/person</span>
              </div>
            </motion.div>

            {menuType === "brunch" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary/30 p-8 border border-primary/10"
              >
                <h3 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
                  <Wine className="w-5 h-5" />
                  Wine & Brunch Cocktails
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {beverages.map((bev) => (
                    <div key={bev.id} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{bev.name}</span>
                      <span className="text-primary font-medium">${bev.price}/{bev.unit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white p-12 border-t-4 border-primary shadow-lg"
        >
          <h3 className="text-2xl font-serif mb-4">Ready to Pre-Order?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
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
