import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import ContactForm from "../ContactForm";

export default function ContactFormExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactForm />
      <Toaster />
    </QueryClientProvider>
  );
}
