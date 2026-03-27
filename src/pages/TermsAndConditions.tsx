import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using the Sport Core Pilates website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.",
  },
  {
    title: "Services",
    content:
      "Sport Core Pilates provides Pilates-based training services including group classes, private and semi-private sessions, assessments, and related programming. All services are subject to availability and may be modified or discontinued at any time without prior notice.",
  },
  {
    title: "Membership, Payments & Packages",
    content:
      "All session packages must be paid in advance unless otherwise agreed.\nPackages are valid for a specified duration and must be used within that validity period. Unused sessions will expire upon completion of the package validity period.\nAll purchases are non-transferable and non-refundable unless required by applicable law.",
  },
  {
    title: "Booking and Cancellation Policy",
    content:
      "Clients must book sessions 24 hours in advance. Cancellations must be made at least 24 hours prior to the scheduled session. Late cancellations or no-shows may result in forfeiture of the session or applicable fees.\nSpecific cancellation timelines may be communicated separately.",
  },
  {
    title: "Health and Safety",
    content:
      "Clients must disclose any relevant medical conditions, injuries, or physical limitations prior to participation.\nParticipation in training sessions is voluntary. While all sessions are professionally supervised, clients assume responsibility for exercising within their personal physical capacity.\nPhysiotherapy services are delivered in accordance with applicable professional standards in India.\nClients participate in all classes and sessions at their own risk. Sport Core Pilates reserves the right to refuse service to anyone whose participation may pose a risk to themselves or others.",
  },
  {
    title: "Assumption of Risk and Liability Waiver",
    content:
      "By participating in any Sport Core Pilates class or service, you voluntarily assume all risks associated with physical exercise. Sport Core Pilates, its owners, instructors, and staff shall not be held liable for any injury, loss, or damage arising from participation in our programs.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content (including text, graphics, logos, images), branding, training methodologies (including the SCP-PX framework and SCP) is the intellectual property of Sport Core Pilates. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.",
  },
  {
    title: "Privacy",
    content:
      "Your use of our services is also governed by our Privacy Policy. By using our website and services, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy.",
  },
  {
    title: "Code of Conduct",
    content:
      "All clients are expected to conduct themselves respectfully and professionally within the studio environment. Sport Core Pilates reserves the right to terminate access to services for any individual who violates our code of conduct or disrupts the training environment.",
  },
  {
    title: "Modifications to Terms",
    content:
      "Sport Core Pilates reserves the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Continued use of our services following any changes constitutes acceptance of the revised terms.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions are governed by and construed in accordance with the laws of India.",
  },
  {
    title: "Contact",
    content:
      "If you have any questions about these Terms and Conditions, please contact us through our website or visit the studio directly.",
  },
];

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions | Sport Core Pilates</title>
        <meta name="description" content="Terms and conditions for Sport Core Pilates services." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/terms-and-conditions" />
        <meta property="og:title" content="Terms & Conditions | Sport Core Pilates" />
        <meta property="og:description" content="Terms and conditions for Sport Core Pilates services." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/terms-and-conditions" />
      </Helmet>
      <Navbar />
      <main>
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-4xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Legal
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              Terms &amp; Conditions
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-16">
              Introduction: Please read these terms carefully before using Sport Core Pilates services and website. These Terms &amp; Conditions govern your use of the Sport Core Pilates website and participation in training sessions, assessments, physiotherapy services, and related offerings. By accessing this website or engaging with our services, you agree to these terms.
            </p>
            <p className="font-body text-muted-foreground text-sm mb-16">
              Last Updated: March 1, 2026
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="font-heading text-lg md:text-xl text-foreground mb-3">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="font-body text-muted-foreground text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
