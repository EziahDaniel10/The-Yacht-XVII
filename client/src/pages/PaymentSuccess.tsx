import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Loader2, Ship } from "lucide-react";
import { useSearch } from "wouter";

export default function PaymentSuccess() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const sessionId = params.get("session_id");
  const bookingId = params.get("booking_id");
  
  const [isVerifying, setIsVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function verifyPayment() {
      if (!sessionId || !bookingId) {
        setError("Missing payment information");
        setIsVerifying(false);
        return;
      }

      try {
        const response = await fetch("/api/bookings/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, bookingId }),
        });

        if (response.ok) {
          setVerified(true);
        } else {
          const data = await response.json();
          setError(data.error || "Failed to verify payment");
        }
      } catch (err) {
        setError("An error occurred while verifying your payment");
      } finally {
        setIsVerifying(false);
      }
    }

    verifyPayment();
  }, [sessionId, bookingId]);

  return (
    <div className="pt-24 pb-20 bg-secondary/20 min-h-screen">
      <div className="container max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 shadow-xl border-t-4 border-primary text-center"
        >
          {isVerifying ? (
            <div className="py-12">
              <Loader2 className="w-16 h-16 text-primary mx-auto animate-spin mb-6" />
              <h2 className="text-2xl font-serif text-foreground mb-4">
                Verifying Your Payment
              </h2>
              <p className="text-muted-foreground">
                Please wait while we confirm your reservation...
              </p>
            </div>
          ) : verified ? (
            <div className="py-8">
              <div className="flex justify-center mb-8">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                  <CheckCircle className="w-24 h-24 text-primary relative z-10" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Reservation Confirmed!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your deposit. Your Yacht XVII charter experience is now secured.
              </p>
              
              <div className="bg-secondary/30 p-6 mb-8 border-l-4 border-primary text-left">
                <h3 className="font-serif text-lg text-primary mb-3">What's Next?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Ship className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Confirmation emails have been sent to you and Captain Mike</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ship className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Captain Mike will contact you to confirm final details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ship className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Remaining 50% balance due on the day of your charter</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-border p-6 mb-8 text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" 
                    alt="Gourmet dining" 
                    className="w-48 h-36 object-cover rounded-md"
                  />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Would you like to pre-order meals for your reservation?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Enhance your charter experience with gourmet catering from Chef B Meals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button 
                      variant="outline" 
                      size="lg"
                      data-testid="button-no-meals"
                    >
                      No - Return to Home
                    </Button>
                  </Link>
                  <Link href="/menu">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90"
                      data-testid="button-yes-menu"
                    >
                      Yes - Take Me to Menu
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-12">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">!</span>
              </div>
              <h2 className="text-2xl font-serif text-foreground mb-4">
                Verification Issue
              </h2>
              <p className="text-muted-foreground mb-8">
                {error || "We couldn't verify your payment. Please contact us for assistance."}
              </p>
              <Link href="/booking">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  data-testid="button-try-again"
                >
                  Try Again
                </Button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
