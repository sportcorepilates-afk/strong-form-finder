import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service: z.enum(["pilates", "physiotherapy", "both"], { required_error: "Please select an option" }),
  goal: z.string().trim().min(1, "Please tell us about your goal or concern").max(1000),
});

type FormValues = z.infer<typeof formSchema>;

const StartHere = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Start Here | Sport Core Pilates";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Begin your journey at Sport Core Pilates with a structured assessment and performance-focused onboarding process.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Begin your journey at Sport Core Pilates with a structured assessment and performance-focused onboarding process.";
      document.head.appendChild(newMeta);
    }
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", phone: "", email: "", goal: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Fire-and-forget lead capture to MyGymDesk
      fetch("https://gaprkusxdqyztcmzymni.supabase.co/functions/v1/capture-website-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-mgd-api-key": "mgd_live_9faaad290c5acc40dc788495b5a6802315c202d7a6fcd095"
        },
        body: JSON.stringify({
          name: data.fullName,
          phone: data.phone,
          email: data.email,
          interest: data.service,
          notes: data.goal,
          source: "website",
          source_details: window.location.href
        })
      }).catch(err => console.error("MGD lead capture error:", err));

      const { data: resData, error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Thank you!",
        description: "Thank you for connecting with Sport Core Pilates. Our team will connect with you to guide the next steps.",
      });
      form.reset();
    } catch (err) {
      console.error("Submission error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            START HERE
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Begin your journey at Sport Core Pilates. Share your details below, and our team will connect with you to guide the next steps.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Let's Get Started</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl><Input type="tel" placeholder="Your phone number" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input type="email" placeholder="Your email address" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="service" render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>How would you like to begin?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col space-y-2">
                      {[
                        { value: "pilates", label: "Pilates Training" },
                        { value: "physiotherapy", label: "Physiotherapy" },
                        { value: "both", label: "Both" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center space-x-3 cursor-pointer">
                          <RadioGroupItem value={opt.value} />
                          <span className="text-sm font-medium text-foreground">{opt.label}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="goal" render={({ field }) => (
                <FormItem>
                  <FormLabel>Briefly tell us about your goal or concern</FormLabel>
                  <FormControl><Textarea placeholder="E.g. recovering from a back injury, improving athletic performance..." className="min-h-[100px]" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default StartHere;