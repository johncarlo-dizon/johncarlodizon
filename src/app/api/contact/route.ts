import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("SMTP credentials not set in environment variables");
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Send email to JC
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject} — from ${name}`
        : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="margin: 0 0 20px; font-size: 18px; color: #111;">
            📬 New message from your portfolio
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #6b7280; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-size: 13px; color: #111; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #6b7280;">Email</td>
              <td style="padding: 8px 0; font-size: 13px; color: #111;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #6b7280;">Subject</td>
              <td style="padding: 8px 0; font-size: 13px; color: #111;">${subject}</td>
            </tr>` : ""}
          </table>

          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 13px; color: #374151; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin: 0; font-size: 12px; color: #9ca3af;">
            Hit reply to respond directly to ${name} at ${email}
          </p>
        </div>
      `,
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: `"JC Dizon" <${SMTP_USER}>`,
      to: email,
      subject: "Got your message! — JC Dizon",
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="margin: 0 0 12px; font-size: 18px; color: #111;">Hey ${name}! 👋</h2>
          <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0 0 16px;">
            Thanks for reaching out! I've received your message and will get back to you within 24–48 hours.
          </p>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <p style="margin: 0 0 6px; font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em;">Your message</p>
            <p style="margin: 0; font-size: 13px; color: #374151; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 14px; color: #374151; margin: 0 0 4px;">Talk soon,</p>
          <p style="font-size: 14px; font-weight: 600; color: #111; margin: 0;">JC Dizon</p>
          <p style="font-size: 12px; color: #9ca3af; margin: 4px 0 0;">Junior Developer · Pampanga, Philippines</p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("Email send error:", err);
    return Response.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}