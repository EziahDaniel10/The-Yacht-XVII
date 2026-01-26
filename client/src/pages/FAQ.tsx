import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a bathroom onboard?",
    answer: "Yes. The Yacht XVII is equipped with a fully functional restroom for guest convenience."
  },
  {
    question: "Are children allowed onboard?",
    answer: "Yes, children are welcome. However, all children under the age of 18 must be accompanied by a parent or legal guardian at all times. Children under the age of 12 are required to wear a life jacket for the entire duration of the charter — no exceptions."
  },
  {
    question: "Are there any additional costs that may apply during the charter?",
    answer: "Yes. A $250 cleaning/damage fee may be assessed if damages to the restroom occur as a result of guest actions, including but not limited to: Vomit, red wine spills, toilet stoppages or misuse."
  },
  {
    question: "Are there onboard services with additional fees?",
    answer: "Yes. We offer à la carte luxury services, including Hookah service and Bottle service. Pricing for these services is available upon request or during booking."
  },
  {
    question: "Are there additional fees for holidays?",
    answer: "Yes. Elevated pricing applies during peak holiday demand, including Mother’s Day, Memorial Day, Fourth of July, and Labor Day. Holiday rates will be reflected at the time of booking."
  },
  {
    question: "Can we decorate the yacht?",
    answer: "Yes, decorations are permitted for special occasions. Please note: Decorations must not damage the vessel or leave residue, we are not responsible for fly-away décor, and decorations must not obstruct visibility for the captain or crew."
  },
  {
    question: "Is outside food and beverage allowed?",
    answer: "Yes, outside food is permitted. We recommend avoiding large trays or platters, as space onboard is limited. New for the 2026 season: We have partnered with a professional chef to curate premium yachting dishes tailored to your charter experience. All culinary options can be ordered directly through our website."
  },
  {
    question: "When is payment due?",
    answer: "A 50% deposit is required immediately to reserve your charter date. The remaining balance is due 24 hours prior to departure."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations within 48 hours of booking receive a full refund. After 48 hours, 50% of the initial deposit may be refunded up to 7 days prior to departure. No refunds are offered within 7 days of charter departure."
  },
  {
    question: "How many guests are allowed?",
    answer: "Most charter packages allow up to 12 guests. In select cases, additional guests may be approved for a fee of $175 per additional guest, with a maximum capacity of 16 guests."
  },
  {
    question: "Is music available onboard?",
    answer: "Yes. The Yacht XVII features a state-of-the-art sound system operated via tablet or Bluetooth. We also offer karaoke for an elevated entertainment experience."
  }
];

export default function FAQ() {
  return (
    <div className="pt-24 min-h-screen bg-background overflow-hidden">
      <div className="container-wide py-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionHeading centered subtitle="Information" title="Frequently Asked Questions" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border bg-white px-6 rounded-none data-[state=open]:border-primary transition-all duration-300 shadow-sm"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-10 bg-[#0A192F] text-white text-center"
        >
          <h3 className="text-2xl font-serif mb-4 text-primary">Still have questions?</h3>
          <p className="text-white/60 mb-8 font-light max-w-xl mx-auto">
            Our concierge team is available 24/7 to assist with any specific requirements or inquiries you may have regarding your voyage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:202-451-8809" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-sm font-serif italic transition-colors">
              Call Concierge
            </a>
            <a href="/contact" className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 text-sm font-serif italic transition-colors">
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
