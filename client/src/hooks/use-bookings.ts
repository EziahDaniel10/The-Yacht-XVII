import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertBooking, type InsertContactInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateBooking() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: InsertBooking) => {
      // Zod validation happens here implicitly via shared schema, but explicit parse is good practice
      const validated = api.bookings.create.input.parse(data);
      
      const res = await fetch(api.bookings.create.path, {
        method: api.bookings.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit booking");
      }

      return api.bookings.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Request Received",
        description: "Thank you for your request. Our concierge will contact you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useCreateContact() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const validated = api.contact.create.input.parse(data);
      
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send message");
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We will respond to your inquiry within 24 hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
