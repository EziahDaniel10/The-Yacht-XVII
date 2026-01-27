import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { useCreateBooking } from "@/hooks/use-bookings";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SectionHeading } from "@/components/SectionHeading";
import { CalendarIcon, Loader2, Check, ChevronRight, ChevronLeft, UtensilsCrossed, Anchor, CreditCard } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

const steps = [
  { id: 1, name: "Reservation", icon: Anchor },
  { id: 2, name: "Catering", icon: UtensilsCrossed },
  { id: 3, name: "Review", icon: CreditCard },
];

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [mealType, setMealType] = useState<"brunch" | "dinner" | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [seafoodUpgrade, setSeafoodUpgrade] = useState(false);
  const [selectedBeverages, setSelectedBeverages] = useState<string[]>([]);

  const { mutate, isPending } = useCreateBooking();
  
  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      guests: 2,
      charterType: "Full-Day",
      specialRequests: "",
      agreedToRules: "false",
      agreedToSafety: "false",
    },
  });

  const guests = form.watch("guests") || 2;

  const getPackagePrice = () => {
    if (!selectedPackage) return 0;
    const packages = mealType === "brunch" ? brunchPackages : dinnerPackages;
    const pkg = packages.find(p => p.id === selectedPackage);
    return pkg ? pkg.price * guests : 0;
  };

  const getSeafoodUpgradePrice = () => {
    if (!seafoodUpgrade) return 0;
    return (mealType === "brunch" ? 22 : 28) * guests;
  };

  const getBeveragesPrice = () => {
    if (mealType !== "brunch") return 0;
    return selectedBeverages.reduce((total, bevId) => {
      const bev = beverages.find(b => b.id === bevId);
      return total + (bev ? bev.price : 0);
    }, 0);
  };

  const getMealTotal = () => {
    return getPackagePrice() + getSeafoodUpgradePrice() + getBeveragesPrice();
  };

  function onSubmit(data: InsertBooking) {
    const bookingData = {
      ...data,
      mealType: mealType || undefined,
      mealPackage: selectedPackage || undefined,
      seafoodUpgrade: seafoodUpgrade ? "true" : "false",
      beverageSelections: selectedBeverages.length > 0 ? selectedBeverages.join(",") : undefined,
      mealTotal: getMealTotal(),
    };
    mutate(bookingData as InsertBooking, {
      onSuccess: () => {
        form.reset();
        setCurrentStep(1);
        setMealType(null);
        setSelectedPackage(null);
        setSeafoodUpgrade(false);
        setSelectedBeverages([]);
      },
    });
  }

  const nextStep = () => {
    if (currentStep === 1) {
      form.trigger(["fullName", "email", "phoneNumber", "preferredDate", "guests", "charterType", "agreedToRules", "agreedToSafety"]).then((valid) => {
        if (valid) setCurrentStep(2);
      });
    } else if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="pt-24 min-h-screen bg-secondary/30">
      <div className="container-wide py-12 md:py-20 max-w-5xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all",
                    currentStep >= step.id 
                      ? "bg-primary border-primary text-white" 
                      : "bg-white border-border text-muted-foreground"
                  )}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span className={cn(
                  "ml-2 text-sm font-medium hidden md:block",
                  currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                )}>
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "w-12 md:w-24 h-0.5 mx-4",
                    currentStep > step.id ? "bg-primary" : "bg-border"
                  )} />
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 shadow-xl border-t-4 border-primary"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SectionHeading centered subtitle="Step 1" title="Secure Your Date" className="mb-12" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="202-451-8809" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Preferred Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "pl-3 text-left font-normal border-0 border-b border-border rounded-none px-0 hover:bg-transparent shadow-none",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Number of Guests</FormLabel>
                            <FormControl>
                              <Input type="number" min={1} max={12} className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="charterType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Experience Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-0 border-b border-border rounded-none px-0 shadow-none focus:ring-0">
                                  <SelectValue placeholder="Select a charter type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Just-Cruising">Just Cruising (2hr)</SelectItem>
                                <SelectItem value="Yacht-Party">The Yacht Party (3hr)</SelectItem>
                                <SelectItem value="Half-Day">Half-Day Escape (4hr)</SelectItem>
                                <SelectItem value="Full-Day">Full-Day Voyage (8hr)</SelectItem>
                                <SelectItem value="Sunset">Date Night / Sunset (3hr)</SelectItem>
                                <SelectItem value="After-Party">After Party (3hr)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem className="mt-8">
                          <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Special Requests</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Dietary requirements, special occasions, specific routes..." 
                              className="resize-none border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent min-h-[100px]" 
                              {...field} 
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-6 pt-8 text-left">
                      <FormField
                        control={form.control}
                        name="agreedToRules"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-secondary/20 border border-primary/10">
                            <FormControl>
                              <Checkbox
                                checked={field.value === "true"}
                                onCheckedChange={(checked) => field.onChange(checked ? "true" : "false")}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-medium text-foreground cursor-pointer">
                                I acknowledge and agree to The Yacht XVII Charter Rules, Waiver, and Policies.
                              </FormLabel>
                              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                                I understand that this charter operates under federal maritime law.
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="agreedToSafety"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-secondary/20 border border-primary/10">
                            <FormControl>
                              <Checkbox
                                checked={field.value === "true"}
                                onCheckedChange={(checked) => field.onChange(checked ? "true" : "false")}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-medium text-foreground cursor-pointer">
                                Safety & Conduct Acknowledgement
                              </FormLabel>
                              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                                I understand prohibited items and behaviors onboard.
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SectionHeading centered subtitle="Step 2" title="Enhance Your Experience" className="mb-4" />
                    <p className="text-center text-muted-foreground mb-12 font-light">
                      Pre-Order Meals by <span className="text-primary font-medium">Chef B Meals</span> — optional catering for your charter
                    </p>

                    <div className="flex justify-center gap-4 mb-12">
                      <Button
                        type="button"
                        variant={mealType === "brunch" ? "default" : "outline"}
                        onClick={() => { setMealType("brunch"); setSelectedPackage(null); setSeafoodUpgrade(false); }}
                        className="rounded-none px-8 py-6"
                        data-testid="button-brunch-menu"
                      >
                        Brunch Menu
                      </Button>
                      <Button
                        type="button"
                        variant={mealType === "dinner" ? "default" : "outline"}
                        onClick={() => { setMealType("dinner"); setSelectedPackage(null); setSeafoodUpgrade(false); setSelectedBeverages([]); }}
                        className="rounded-none px-8 py-6"
                        data-testid="button-dinner-menu"
                      >
                        Lunch / Dinner Menu
                      </Button>
                      <Button
                        type="button"
                        variant={mealType === null ? "secondary" : "ghost"}
                        onClick={() => { setMealType(null); setSelectedPackage(null); setSeafoodUpgrade(false); setSelectedBeverages([]); }}
                        className="rounded-none px-8 py-6"
                        data-testid="button-skip-catering"
                      >
                        Skip Catering
                      </Button>
                    </div>

                    {mealType && (
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {(mealType === "brunch" ? brunchPackages : dinnerPackages).map((pkg) => (
                            <Card 
                              key={pkg.id}
                              className={cn(
                                "cursor-pointer transition-all hover:shadow-lg",
                                selectedPackage === pkg.id ? "border-primary border-2 shadow-lg" : "border-border"
                              )}
                              onClick={() => setSelectedPackage(pkg.id)}
                              data-testid={`meal-package-${pkg.id}`}
                            >
                              <CardHeader>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle className="text-lg font-serif">{pkg.name}</CardTitle>
                                    <CardDescription className="mt-1">{pkg.description}</CardDescription>
                                  </div>
                                  {selectedPackage === pkg.id && (
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                      <Check className="w-4 h-4 text-white" />
                                    </div>
                                  )}
                                </div>
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
                                {selectedPackage === pkg.id && (
                                  <div className="mt-4 pt-4 border-t">
                                    <p className="text-sm font-medium">
                                      {guests} guests × ${pkg.price} = <span className="text-primary">${pkg.price * guests}</span>
                                    </p>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>

                        {selectedPackage && (
                          <>
                            <Card className="border-primary/20 bg-primary/5">
                              <CardHeader>
                                <CardTitle className="text-lg font-serif flex items-center gap-2">
                                  Seafood Upgrade
                                  <span className="text-sm font-sans text-muted-foreground">
                                    (+${mealType === "brunch" ? 22 : 28}/person)
                                  </span>
                                </CardTitle>
                                <CardDescription>
                                  Old Bay Poached Shrimp, Smoked Salmon Display, Crab & Corn Salad Cups
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <Checkbox 
                                      checked={seafoodUpgrade}
                                      onCheckedChange={(checked) => setSeafoodUpgrade(!!checked)}
                                      data-testid="checkbox-seafood-upgrade"
                                    />
                                    <span className="text-sm">Add Seafood Upgrade</span>
                                  </div>
                                  {seafoodUpgrade && (
                                    <span className="text-primary font-medium">
                                      +${getSeafoodUpgradePrice()}
                                    </span>
                                  )}
                                </div>
                              </CardContent>
                            </Card>

                            {mealType === "brunch" && (
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-lg font-serif">Wine & Brunch Cocktails</CardTitle>
                                  <CardDescription>Bottle & pitcher service to complement your brunch</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {beverages.map((bev) => {
                                      const isSelected = selectedBeverages.includes(bev.id);
                                      return (
                                        <div 
                                          key={bev.id}
                                          className={cn(
                                            "p-4 border rounded-none cursor-pointer transition-all",
                                            isSelected 
                                              ? "border-primary bg-primary/5" 
                                              : "border-border hover:border-primary/50"
                                          )}
                                          onClick={() => {
                                            if (isSelected) {
                                              setSelectedBeverages(selectedBeverages.filter(id => id !== bev.id));
                                            } else {
                                              setSelectedBeverages([...selectedBeverages, bev.id]);
                                            }
                                          }}
                                          data-testid={`beverage-${bev.id}`}
                                        >
                                          <div className="flex items-center gap-2 mb-2">
                                            <div className={cn(
                                              "w-4 h-4 border rounded-sm flex items-center justify-center",
                                              isSelected ? "bg-primary border-primary" : "border-muted-foreground"
                                            )}>
                                              {isSelected && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                            <span className="font-medium text-sm">{bev.name}</span>
                                          </div>
                                          <p className="text-primary font-serif">
                                            ${bev.price}<span className="text-xs text-muted-foreground font-sans">/{bev.unit}</span>
                                          </p>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </CardContent>
                              </Card>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SectionHeading centered subtitle="Step 3" title="Review Your Booking" className="mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg font-serif flex items-center gap-2">
                            <Anchor className="w-5 h-5 text-primary" />
                            Yacht Charter Details
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Guest</span>
                            <span className="font-medium">{form.getValues("fullName")}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Email</span>
                            <span className="font-medium">{form.getValues("email")}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Phone</span>
                            <span className="font-medium">{form.getValues("phoneNumber")}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Date</span>
                            <span className="font-medium">
                              {form.getValues("preferredDate") ? format(form.getValues("preferredDate"), "PPP") : "Not selected"}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Guests</span>
                            <span className="font-medium">{guests}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Experience</span>
                            <span className="font-medium">{form.getValues("charterType")}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg font-serif flex items-center gap-2">
                            <UtensilsCrossed className="w-5 h-5 text-primary" />
                            Chef B Meals Catering
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {mealType && selectedPackage ? (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Meal Type</span>
                                <span className="font-medium capitalize">{mealType}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Package</span>
                                <span className="font-medium">
                                  {(mealType === "brunch" ? brunchPackages : dinnerPackages).find(p => p.id === selectedPackage)?.name}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Package Total</span>
                                <span className="font-medium">${getPackagePrice()}</span>
                              </div>
                              {seafoodUpgrade && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Seafood Upgrade</span>
                                  <span className="font-medium">+${getSeafoodUpgradePrice()}</span>
                                </div>
                              )}
                              {selectedBeverages.length > 0 && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Beverages</span>
                                  <span className="font-medium">+${getBeveragesPrice()}</span>
                                </div>
                              )}
                              <div className="pt-4 border-t flex justify-between">
                                <span className="font-medium">Catering Total</span>
                                <span className="text-xl font-serif text-primary">${getMealTotal()}</span>
                              </div>
                            </>
                          ) : (
                            <p className="text-muted-foreground text-sm italic">No catering selected</p>
                          )}
                        </CardContent>
                      </Card>
                    </div>

                    <div className="mt-8 p-6 bg-secondary/30 border border-primary/10">
                      <p className="text-sm text-muted-foreground text-center font-light">
                        This is a booking request. Our concierge will contact you to confirm availability and process payment.
                        {getMealTotal() > 0 && (
                          <span className="block mt-2">
                            Catering orders will be processed separately by Chef B Meals.
                          </span>
                        )}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between pt-12">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={(e) => { e.preventDefault(); prevStep(); }}
                    className="rounded-none px-8 py-6"
                    data-testid="button-back"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={(e) => { e.preventDefault(); nextStep(); }}
                    className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6"
                    data-testid="button-continue"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="bg-primary hover:bg-primary/90 text-white rounded-none px-12 py-6 text-lg font-serif italic shadow-xl shadow-primary/20"
                    data-testid="button-submit-booking"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Request...
                      </>
                    ) : (
                      "Submit Booking Request"
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
