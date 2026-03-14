import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { fullName, phone, email, service, goal } = await req.json();

    // Validate inputs
    if (!fullName || !phone || !email || !service || !goal) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const serviceLabels: Record<string, string> = {
      pilates: "Pilates Training",
      physiotherapy: "Physiotherapy",
      both: "Both",
    };

    const htmlBody = `
      <h2>New Start Here Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Full Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${fullName}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone Number</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">How would you like to begin?</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${serviceLabels[service] || service}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Goal or Concern</td><td style="padding: 8px;">${goal}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sport Core Pilates <onboarding@resend.dev>",
        to: ["sportcorepilates@gmail.com"],
        subject: `New Enquiry from ${fullName}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(resData)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
