import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Consent & Information We Collect",
    content:
      "By mere use of the Website, you expressly consent to Sport Core Pilate's use and disclosure of your Personal Information in accordance with this Policy. If you do not agree with the terms of this Policy, please do not use this Website.\nWe may collect personal information that you voluntarily provide when booking sessions, subscribing to our communications, or contacting us. This may include your name, email address, phone number, health and medical information relevant to your training, and payment details.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to:\n• Provide and manage our Pilates training services\n• Process bookings and payments\n• Communicate with you about sessions, schedules, and updates\n• Ensure your safety during training by understanding relevant health conditions. Any health-related information shared with us is treated confidentially and used solely to ensure safe and appropriate training delivery.\n• Improve our services and website experience\n• Send promotional communications (only with your consent)",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, processing payments, or delivering services — provided they agree to keep your information confidential.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Cookies and Tracking",
    content:
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to:\n• Access the personal information we hold about you\n• Request correction of inaccurate information\n• Request deletion of your personal data, subject to legal obligations\n• Withdraw consent for promotional communications at any time",
  },
  {
    title: "Third-Party Links",
    content:
      "We may use third-party service providers (such as booking systems, payment processors, or email platforms). These providers operate under their own privacy policies. Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.",
  },
  {
    title: "Children's Privacy",
    content:
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors without parental consent.",
  },
  {
    title: "Changes to This Policy",
    content:
      "Sport Core Pilates reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised 'Last Updated' date. Continued use of our services after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy, please contact us through our website or visit the studio directly.",
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Sport Core Pilates</title>
        <meta name="description" content="Privacy policy for Sport Core Pilates — how we handle your data." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Sport Core Pilates" />
        <meta property="og:description" content="Privacy policy for Sport Core Pilates — how we handle your data." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/privacy-policy" />
      </Helmet>
      <Navbar />
      <main>
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-4xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Legal
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              Privacy Policy
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-16">
              This Privacy Policy explains how Sport Core Pilates collects, uses, and protects your personal information when you use our website and services.
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

export default PrivacyPolicy;
