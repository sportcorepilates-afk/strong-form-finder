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

    const { fullName, phone, email, service, goal, interests, previousExperience } = await req.json();

    // Validate inputs — support both old schema (service) and new schema (interests + previousExperience)
    const hasOldSchema = !!service && !!goal;
    const hasNewSchema = Array.isArray(interests) && interests.length > 0 && !!previousExperience && !!goal;

    if (!fullName || !phone || !email || (!hasOldSchema && !hasNewSchema)) {
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

    const interestLabels: Record<string, string> = {
      "pilates-classes": "Pilates Classes",
      "private-pilates": "Private Pilates Training",
      "strength-conditioning": "Strength & Conditioning",
      physiotherapy: "Physiotherapy",
      "ante-natal": "SCP Ante Natal",
      "post-natal": "SCP Post Natal",
      "recovery-mobility": "SCP Recovery & Mobility",
      "not-sure": "I'm Not Sure",
    };

    let interestsHtml = "";
    if (Array.isArray(interests) && interests.length > 0) {
      const interestList = interests.map((v: string) => interestLabels[v] || v).join(", ");
      interestsHtml = `
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#999;font-size:13px;font-weight:600;">Interests</td>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#fff;font-size:14px;">${interestList}</td>
            </tr>`;
    }

    let previousExperienceHtml = "";
    if (previousExperience) {
      const label = previousExperience === "yes" ? "Yes" : "No";
      previousExperienceHtml = `
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#999;font-size:13px;font-weight:600;">Previous Pilates Experience</td>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#fff;font-size:14px;">${label}</td>
            </tr>`;
    }

    const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#111;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:12px;overflow:hidden;">
        <tr><td style="background:#00BFA6;padding:24px 32px;">
          <h1 style="margin:0;color:#111;font-size:20px;font-weight:700;letter-spacing:1px;">SPORT CORE PILATES</h1>
        </td></tr>
        <tr><td style="padding:32px 32px 16px;">
          <h2 style="margin:0;color:#fff;font-size:22px;">New Enquiry Received</h2>
          <p style="margin:8px 0 0;color:#999;font-size:14px;">A new lead submitted the Start Here form</p>
        </td></tr>
        <tr><td style="padding:16px 32px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#222;border-radius:8px;">
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#999;font-size:13px;font-weight:600;width:160px;">Full Name</td>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#fff;font-size:14px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#999;font-size:13px;font-weight:600;">Phone</td>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#fff;font-size:14px;"><a href="tel:${phone}" style="color:#00BFA6;text-decoration:none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#999;font-size:13px;font-weight:600;">Email</td>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#fff;font-size:14px;"><a href="mailto:${email}" style="color:#00BFA6;text-decoration:none;">${email}</a></td>
            </tr>
            ${service ? `
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#999;font-size:13px;font-weight:600;">Service Interest</td>
              <td style="padding:14px 20px;border-bottom:1px solid #333;color:#fff;font-size:14px;">${serviceLabels[service] || service}</td>
            </tr>` : ""}
            ${interestsHtml}
            ${previousExperienceHtml}
            <tr>
              <td style="padding:14px 20px;color:#999;font-size:13px;font-weight:600;vertical-align:top;">Goal / Concern</td>
              <td style="padding:14px 20px;color:#fff;font-size:14px;line-height:1.5;">${goal}</td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="padding:0 32px 32px;" align="center">
          <a href="tel:${phone}" style="display:inline-block;background:#00BFA6;color:#111;padding:12px 32px;border-radius:6px;font-size:14px;font-weight:600;text-decoration:none;">CALL NOW</a>
        </td></tr>
        <tr><td style="padding:20px 32px;border-top:1px solid #333;">
          <p style="margin:0;color:#666;font-size:12px;text-align:center;">Submitted via sportcorepilates.com</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
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
