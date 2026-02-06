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
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearch } from "wouter";

export default function Booking() {
  const { mutate, isPending } = useCreateBooking();
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const packageType = params.get("package") || "Full-Day";
  
  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      guests: 2,
      charterType: packageType,
      specialRequests: "",
      agreedToRules: "false",
      agreedToSafety: "false",
    },
  });

  function onSubmit(data: InsertBooking) {
    mutate(data);
  }

  return (
    <div className="pt-24 pb-20 bg-secondary/20">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading
          title="Reserve Your Experience"
          subtitle="Begin your journey on the Potomac with Yacht XVII"
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 shadow-xl border-t-4 border-primary mt-12"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-widest text-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" 
                          data-testid="input-full-name"
                          {...field} 
                        />
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
                      <FormLabel className="uppercase text-xs tracking-widest text-foreground">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" 
                          data-testid="input-email"
                          {...field} 
                        />
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
                      <FormLabel className="uppercase text-xs tracking-widest text-foreground">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="202-451-8809" 
                          className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" 
                          data-testid="input-phone"
                          {...field} 
                        />
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
                      <FormLabel className="uppercase text-xs tracking-widest text-foreground">Preferred Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              data-testid="button-date-picker"
                              className={cn(
                                "pl-3 text-left font-normal border-0 border-b border-border rounded-none px-0 hover:bg-transparent shadow-none",
                                !field.value && "text-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white" align="start">
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
                      <FormLabel className="uppercase text-xs tracking-widest text-foreground">Number of Guests</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min={1} 
                          max={12} 
                          className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" 
                          data-testid="input-guests"
                          {...field} 
                        />
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
                      <FormLabel className="uppercase text-xs tracking-widest text-foreground">Experience Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-0 border-b border-border rounded-none px-0 shadow-none focus:ring-0" data-testid="select-charter-type">
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
                    <FormLabel className="uppercase text-xs tracking-widest text-foreground">Special Requests</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Dietary requirements, special occasions, specific routes..." 
                        className="resize-none border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent min-h-[100px]" 
                        data-testid="textarea-special-requests"
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
                          data-testid="checkbox-rules"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium text-foreground cursor-pointer">
                          I acknowledge and agree to The Yacht XVII Charter Rules, Waiver, and Policies.
                        </FormLabel>
                        <p className="text-xs text-foreground font-light leading-relaxed">
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
                          data-testid="checkbox-safety"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium text-foreground cursor-pointer">
                          Safety & Conduct Acknowledgement
                        </FormLabel>
                        <p className="text-xs text-foreground font-light leading-relaxed">
                          I understand prohibited items and behaviors onboard.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-center mt-12">
                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="rounded-none px-16 py-8 text-lg font-serif italic bg-primary hover:bg-primary/90"
                  data-testid="button-submit-reservation"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Reservation Request"
                  )}
                </Button>
              </div>

              <p className="text-center text-sm text-foreground mt-6 font-light">
                Our concierge will contact you within 24 hours to confirm availability and finalize details.
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
