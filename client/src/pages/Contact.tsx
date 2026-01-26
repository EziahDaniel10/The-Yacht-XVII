import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactInquiry } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-bookings";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/SectionHeading";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { mutate, isPending } = useCreateContact();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactInquiry) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading subtitle="Get in Touch" title="Contact Us" />
            <p className="text-muted-foreground text-lg font-light mb-12">
              For general inquiries, partnership opportunities, or press requests, please use the form below or contact us directly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-6 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Location</h4>
                  <p className="text-muted-foreground font-light">The Wharf<br/>Washington DC</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-6 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Phone</h4>
                  <p className="text-muted-foreground font-light">202-451-8809</p>
                  <p className="text-xs text-muted-foreground mt-1">Available 24/7 for members</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-6 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Email</h4>
                  <p className="text-muted-foreground font-light">concierge@yachtxvii.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-secondary/30 p-10 md:p-14"
          >
            <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" className="bg-white border-0 shadow-sm p-6" {...field} />
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
                      <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@domain.com" className="bg-white border-0 shadow-sm p-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we assist you?" className="bg-white border-0 shadow-sm p-6 min-h-[150px] resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-none py-6 text-lg font-serif italic"
                >
                  {isPending ? <Loader2 className="animate-spin" /> : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
