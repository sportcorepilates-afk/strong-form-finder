import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Introduction",
    content:
      "Sport Core Pilates LLP (\"we\", \"us\", or \"Studio\") is committed to protecting your personal data. This Privacy Policy (\"Policy\") governs how we collect, use, store, disclose, and otherwise process your Personal Data when you visit or use our website, make an enquiry, book or attend a Pilates class, purchase a membership or package, communicate with us, or otherwise interact with our studio and services.\nThis Privacy Policy is intended to be read together with our Terms and Conditions and any other policies or notices made available by us from time to time.\nWe process Personal Data in accordance with the Digital Personal Data Protection Act, 2023, the Digital Personal Data Protection Rules, 2025, to the extent applicable and in force, and other applicable laws and regulations (collectively, \"Applicable Law\").",
  },
  {
    title: "Who This Privacy Policy Applies To",
    content:
      "This Privacy Policy applies to individuals who:\n(a) visit or use our website;\n(b) make an enquiry regarding our Pilates classes, memberships, packages, or other services;\n(c) register for, book, cancel, or attend a Pilates class or session;\n(d) purchase or use a membership, class package, or other service;\n(e) communicate with us through our website, email, telephone, WhatsApp, social media, or other communication channels;\n(f) provide information to us in connection with their participation in our classes or services; or\n(g) otherwise interact with us online or offline.\nFor the purposes of Applicable Law, such individuals may be referred to as \"Data Principals\" or \"Users\".",
  },
  {
    title: "Data We Collect",
    content:
      "Depending on how you interact with us, we may collect the following categories of Personal Data:\n(a) Contact and Identification Information: This may include your name, email address, telephone/mobile number, residential or correspondence address (where required), date of birth or age (where relevant to our services), and other information voluntarily provided by you.\n(b) Booking and Membership Information: When you book or use our services, we may collect information such as class or session bookings, membership or package details, attendance records, booking and cancellation history, preferences relating to classes or sessions, and information necessary to administer your membership or account.\n(c) Payment and Transaction Information: Where you purchase our services, payments may be processed through third-party payment providers. We may receive information relating to your transaction, such as the amount paid, date and time of payment, transaction/reference number, payment status, and limited payment-related information.\nWe generally do not require or store your complete debit or credit card number or banking credentials on our own systems. Such information may be collected and processed directly by the relevant payment service provider in accordance with its own privacy policy and security practices.\n(d) Health, Fitness and Physical Information: To provide Pilates instruction safely and appropriately, we may ask you to voluntarily provide information concerning your health, fitness, and physical condition. Depending on the circumstances, this may include information regarding injuries or physical limitations, medical conditions relevant to exercise, pregnancy or post-natal status (where voluntarily disclosed), pain or mobility concerns, exercise restrictions or contraindications, previous surgeries or injuries, and other information that you choose to provide to enable us to adapt or safely conduct your sessions.\nWe will process such information only to the extent reasonably necessary for the provision and safe administration of our services and in accordance with Applicable Law.\n(e) Communications: If you contact us, we may retain information contained in your communication, including enquiries, feedback, complaints, requests, and correspondence.\n(f) Website Usage Data: We may collect information regarding your use of our website through cookies and similar tracking technologies. You will be informed of the purpose of collection, intended recipients, and our identity prior to collection in accordance with Applicable Law.",
  },
  {
    title: "Processing of Personal Data",
    content:
      "We may process your Personal Data only for lawful purposes and in accordance with this Privacy Policy and Applicable Law. We may use your Personal Data to:\n(a) respond to enquiries and provide customer support;\n(b) manage bookings, memberships, and class schedules;\n(c) provide, administer, and safely conduct Pilates classes and sessions, including adapting sessions based on health or fitness information you have provided;\n(d) process payments and maintain transaction records;\n(e) maintain attendance and business records;\n(f) communicate with you regarding bookings, cancellations, memberships, schedule changes, and studio updates;\n(g) improve our website, services, and class offerings;\n(h) maintain security, prevent fraud or misuse, and enforce our Terms and Conditions;\n(i) comply with Applicable Law, regulatory requirements, and legal obligations; and\n(j) other purposes described to you at the time of collection or as otherwise permitted under Applicable Law.\nWhere permitted under Applicable Law and, where required, we may also use your contact details to send you promotional communications regarding our classes, memberships, workshops, events, and offers. You may opt out of marketing communications at any time through the opt-out mechanism made available by us or by contacting us using the details set out in this Policy. You may withdraw your consent at any time by contacting us using the details provided in this Policy.",
  },
  {
    title: "Children's Personal Data",
    content:
      "An individual who has not completed 18 (eighteen) years of age is a \"Child\" for the purposes of this Privacy Policy. Our services are primarily intended for adults. A Child may access or use our services only through, and under the supervision of, a parent or lawful guardian (\"Parent\"), and only where we have obtained verifiable consent from such Parent in accordance with Applicable Law.\nIf you are a Parent permitting your Child to use our services, you hereby:\n(a) agree to this Privacy Policy and our Terms and Conditions on behalf of your Child;\n(b) provide your verifiable consent for the collection and processing of your Child's Personal Data as described herein; and\n(c) accept full responsibility and liability for your Child's activities and participation in our services.\nWe do not knowingly process the Personal Data of a Child without verifiable parental consent. We do not undertake any processing of Personal Data that is likely to cause any detrimental effect on the well-being of a Child, and we do not undertake tracking, behavioural monitoring, or targeted advertising directed at Children.\nIf we become aware that Personal Data has been collected or processed from or in relation to a Child without verifiable parental consent, we will take appropriate steps to suspend or restrict the relevant account and delete such information, subject to Applicable Law and legal or regulatory retention requirements.",
  },
  {
    title: "Data Sharing with Third Parties",
    content:
      "We may share your Personal Data with third-party service providers who assist us in operating our business and providing our services, including payment processors, booking and scheduling platforms, IT and cloud service providers, communication and marketing providers, and accounting, legal and other professional advisers. We may also share relevant Personal Data with instructors, fitness professionals or other service providers where reasonably necessary for the safe and effective provision of our services. We take reasonable steps to ensure that such third parties implement appropriate safeguards and process your Personal Data only for the purposes for which it is shared or as otherwise required by Applicable Law.",
  },
  {
    title: "Security and Data Retention",
    content:
      "Security\nWe implement reasonable physical, administrative and technical safeguards to protect your Personal Data against unauthorised access, use, disclosure, alteration, loss or destruction. Where appropriate, these measures may include access controls, encryption, monitoring, backup and recovery measures, and contractual safeguards with our service providers.\nWhile we take reasonable steps to protect your Personal Data, no method of electronic storage or transmission is completely secure. If you become aware of any actual or suspected unauthorised access to or disclosure of your Personal Data, please contact us at sportcorepilates@gmail.com\nRetention\nWe will retain your Personal Data only for as long as reasonably necessary to fulfil the purposes for which it was collected, provide our services, and comply with Applicable Law. Where the Personal Data is no longer required, we will securely erase or anonymise it, unless retention is required or permitted under Applicable Law.",
  },
  {
    title: "Personal Data Breach",
    content:
      "If we become aware of a personal data breach, we will take such remedial and mitigation measures as may be required under Applicable Law and, where required, issue intimations to affected Data Principals and the Data Protection Board of India in accordance with Applicable Law. Such intimation may include details of the breach, its likely consequences, mitigation measures, and contact details for queries, to the extent required under Applicable Law.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "Our website may use cookies and similar technologies to enable website functionality, remember preferences, analyse website usage, improve performance, and maintain security. Where required under Applicable Law, we will obtain your consent before using non-essential cookies. You may manage or disable cookies through your browser settings or any cookie preferences made available on our website; however, this may affect certain website functionality.",
  },
  {
    title: "Rights of Data Principals",
    content:
      "Subject to Applicable Law, you may have the right to: (i) obtain a summary of the Personal Data being processed by us and the processing activities undertaken in relation to such Personal Data; (ii) obtain information regarding the identities of data processors and other data fiduciaries, if any, with whom your Personal Data has been shared, to the extent applicable; (iii) request correction, completion, updating, or erasure of your Personal Data; (iv) withdraw consent where consent is the basis of processing; (v) seek grievance redressal in relation to the processing of your Personal Data; and (vi) nominate another individual to exercise your rights in the event of death or incapacity, in accordance with Applicable Law.\nYou may exercise the above rights by contacting us using the details set out in this Privacy Policy, together with such particulars as may be reasonably required to verify your identity and process your request. We will respond to your request within the timelines prescribed under Applicable Law or, where no specific timeline is prescribed, within a reasonable period not exceeding 30 (thirty) business days.",
  },
  {
    title: "Nomination",
    content:
      "You may nominate another individual to exercise your rights in relation to your Personal Data in the event of your death or incapacity, in the manner made available by us and in accordance with Applicable Law. To make or update a nomination, please contact us using the details set out in this Privacy Policy.",
  },
  {
    title: "Grievance Redressal",
    content:
      "If you have an enquiry or a complaint about the way we handle your personal data, or if you wish to exercise your privacy rights in relation to the personal data that we hold about you, you may contact our customer grievance officer, Gaurav Mashruwala, on the following email id: sportcorepilates@gmail.com\nYou may also contact us with any questions regarding the processing of your personal data or the exercise of your rights under Applicable Law. We shall maintain an effective grievance redressal mechanism in accordance with Applicable Law and endeavour to address all reasonable grievances and enquiries within the timelines prescribed under Applicable Law or, where no specific timeline is prescribed, within a reasonable period.",
  },
  {
    title: "Transfer of Personal Data",
    content:
      "Your Personal Data may be processed or transferred outside India only in accordance with Applicable Law and subject to such restrictions or requirements as may be prescribed or notified by the Central Government from time to time. Where any such transfer is undertaken, we will ensure that it is carried out in compliance with Applicable Law and that appropriate safeguards are in place to protect your Personal Data.",
  },
  {
    title: "Links to Third-Party Websites",
    content:
      "Our website may contain links to other websites or third-party platforms, including social media pages, payment portals, or booking platforms, that may collect or request your Personal Data or information. We are not responsible for the privacy practices, terms, data handling practices, or content of those websites or platforms.\nAny Personal Data that you provide to such third-party websites or platforms shall be governed by the privacy policies and terms of such third parties, and we encourage you to review them carefully before sharing your information. We are responsible only for the privacy practices and content of our own website and services.",
  },
  {
    title: "Updates to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, legal or regulatory requirements, or operational needs. We will indicate the date of the most recent revision by updating the \"Last Updated\" date at the top of this Privacy Policy. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your Personal Data.\nWhere required under Applicable Law, we will notify you of material changes to this Privacy Policy through a notice on our website, by email, or through such other means as may be required under Applicable Law.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your Personal Data, please contact us at:\nEmail: sportcorepilates@gmail.com\nAddress: 4th Floor, Om Palace, Dr. Ambedkar Road, Pali Hill, Bandra West, Mumbai 400052.\nWebsite: https://sportcorepilates.com/",
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
              This Privacy Policy explains how Sport Core Pilates LLP collects, uses, stores, and protects your personal data when you use our website and services.
            </p>
            <p className="font-body text-muted-foreground text-sm mb-16">
              Last Updated: September 10, 2026
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
