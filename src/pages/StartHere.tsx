import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const interestOptions = [
  { value: "pilates-classes", label: "Pilates Classes" },
  { value: "private-pilates", label: "Private Pilates Training" },
  { value: "strength-conditioning", label: "Strength & Conditioning" },
  { value: "physiotherapy", label: "Physiotherapy" },
  { value: "ante-natal", label: "SCP Ante Natal" },
  { value: "post-natal", label: "SCP Post Natal" },
  { value: "recovery-mobility", label: "SCP Recovery & Mobility" },
  { value: "not-sure", label: "I'm Not Sure" },
];

const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  interests: z.array(z.string()).min(1, "Please select at least one option"),
  previousExperience: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  goal: z.string().trim().min(1, "Please tell us about your goals, training background, or any concerns").max(1000),
});

type FormValues = z.infer<typeof formSchema>;

const StartHere = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", phone: "", email: "", interests: [], previousExperience: undefined, goal: "" },
  });

  const selectedInterests = form.watch("interests") || [];
  const showNotSureNote = selectedInterests.includes("not-sure");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const interestLabels = interestOptions
        .filter((opt) => data.interests.includes(opt.value))
        .map((opt) => opt.label)
        .join(", ");

      const previousExperienceLabel = data.previousExperience === "yes" ? "Yes" : "No";

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
          interest: interestLabels,
          notes: `Previous Pilates Experience: ${previousExperienceLabel}\n\n${data.goal}`,
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
      <Helmet>
        <title>Start Here | Sport Core Pilates</title>
        <meta name="description" content="Begin your journey at Sport Core Pilates. Share your details and our team will connect with you to guide the next steps." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/start-here" />
        <meta property="og:title" content="Start Here | Sport Core Pilates" />
        <meta property="og:description" content="Begin your journey at Sport Core Pilates. Share your details and our team will connect with you to guide the next steps." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/start-here" />
      </Helmet>
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl><Input type="email" placeholder="Your email address" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <FormLabel>Which of the following are you interested in?</FormLabel>
                    <div className="space-y-2">
                      {interestOptions.map((opt) => (
                        <FormField
                          key={opt.value}
                          control={form.control}
                          name="interests"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(opt.value)}
                                  onCheckedChange={(checked) => {
                                    const current = field.value || [];
                                    if (checked) {
                                      field.onChange([...current, opt.value]);
                                    } else {
                                      field.onChange(current.filter((v: string) => v !== opt.value));
                                    }
                                  }}
                                />
                              </FormControl>
                              <span className="text-sm font-medium text-foreground cursor-pointer" onClick={() => {
                                const current = field.value || [];
                                if (current.includes(opt.value)) {
                                  field.onChange(current.filter((v: string) => v !== opt.value));
                                } else {
                                  field.onChange([...current, opt.value]);
                                }
                              }}>
                                {opt.label}
                              </span>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    {showNotSureNote && (
                      <p className="text-sm text-primary mt-2">
                        Our team will help guide you to the most appropriate starting point.
                      </p>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="previousExperience" render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Have you worked with Pilates before?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col space-y-2">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <RadioGroupItem value="yes" />
                        <span className="text-sm font-medium text-foreground">Yes</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <RadioGroupItem value="no" />
                        <span className="text-sm font-medium text-foreground">No</span>
                      </label>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="goal" render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell us a little about your goals, training background, or any concerns you would like us to know about</FormLabel>
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