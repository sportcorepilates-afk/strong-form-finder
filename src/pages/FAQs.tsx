import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What makes Sport Core Pilates unique in India?",
    a: "Sport Core Pilates is a performance-focused, Pilates-first system. We integrate strength and conditioning principles with structured assessment through the SCP-PX framework, tailoring every session to your sport or activity for long-term strength, control, and durability.",
  },
  {
    q: "Do I need prior Pilates experience to start?",
    a: "No prior experience is required. Our SCP Foundation program is designed to introduce you to the core principles of movement, control, and breath, building a strong base before progressing into more advanced training.",
  },
  {
    q: "Is Sport Core Pilates only for Athletes?",
    a: "No. While our system is designed using high-performance principles, it is equally effective for active individuals. Whether you run, play a sport, or simply want to move better and stay injury-free, our approach is tailored to your current level and goals.",
  },
  {
    q: "Do you offer physiotherapy or rehabilitation services?",
    a: "Yes. Led by Dr. Moushumi Kuvawala (PT), with over 30 years of experience in rehabilitation and pain management, we offer Pilates-based rehabilitation that bridges recovery and peak performance.",
  },
  {
    q: "What types of classes do you offer?",
    a: "We offer SCP Foundation, SCP Control, SCP Performance, SCP Reform, and Private Training — each structured to meet specific goals across mobility, strength, performance, and rehabilitation.",
  },
  {
    q: "How do I get started?",
    a: "Visit our Start Here page or contact us directly. We'll guide you through an initial assessment to recommend the right program based on your goals and current movement profile.",
  },
  {
    q: "Where is the studio located?",
    a: "Sport Core Pilates is based in Mumbai. Visit our Contact page for the full address and directions.",
  },
];

const FAQs = () => {
  return (
    <>
      <Helmet>
        <title>FAQs | Sport Core Pilates</title>
        <meta
          name="description"
          content="Frequently asked questions about Sport Core Pilates, including training approach, physiotherapy, and performance-focused Pilates."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/faqs" />
        <meta property="og:title" content="FAQs | Sport Core Pilates" />
        <meta
          property="og:description"
          content="Frequently asked questions about Sport Core Pilates, including training approach, physiotherapy, and performance-focused Pilates."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/faqs" />
      </Helmet>
      <Navbar />
      <main>
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-4xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              FAQs
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              Frequently Asked <span className="text-gradient-yellow">Questions</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-12">
              Answers to common questions about our training approach, physiotherapy services, and performance-focused Pilates programs at Sport Core Pilates.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="font-heading text-left text-foreground text-lg md:text-xl hover:text-primary hover:no-underline py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground text-base leading-relaxed pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQs;
