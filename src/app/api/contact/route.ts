import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";
import clientPromise from "@/utils/mongodb";

// Simple email regex validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, product, message } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || phone.trim() === "") {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }
    if (!product || typeof product !== "string" || product.trim() === "") {
      return NextResponse.json({ error: "Product of interest is required." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json({ error: "Message/Requirement details are required." }, { status: 400 });
    }

    const newInquiry = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company ? company.trim() : "",
      product: product.trim(),
      message: message.trim(),
    };

    // 2. Persist locally to a JSON file (data/inquiries.json)
    // Wrapped in a try/catch in case the environment is read-only (like serverless Vercel)
    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      const filePath = path.join(dataDir, "inquiries.json");

      // Ensure directory exists
      await fs.mkdir(dataDir, { recursive: true });

      let existingInquiries = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        existingInquiries = JSON.parse(fileContent);
      } catch (err) {
        // File doesn't exist or is invalid, start with empty list
      }

      existingInquiries.push(newInquiry);
      await fs.writeFile(filePath, JSON.stringify(existingInquiries, null, 2), "utf-8");
      console.log(`[API/Contact] Inquiry saved locally to ${filePath}`);
    } catch (fsError) {
      console.error("[API/Contact] Failed to write to local inquiries file:", fsError);
      // Continue execution so we can still send the email if config is present
    }

    // 2b. Persist to MongoDB database
    try {
      const client = await clientPromise;
      const db = client.db();
      const collection = db.collection("inquiries");
      const mongoResult = await collection.insertOne(newInquiry);
      console.log(`[API/Contact] Inquiry saved to MongoDB database. ID: ${mongoResult.insertedId}`);
    } catch (mongoError) {
      console.error("[API/Contact] Failed to save inquiry to MongoDB:", mongoError);
      // Continue execution so email dispatch is still attempted
    }

    // 3. Send Email Notification
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465;
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "anviltechnoforge@gmail.com";

    if (host && user && pass) {
      console.log(`[API/Contact] Sending email via ${host}:${port} to ${receiverEmail}`);
      
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
      });

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #222; background-color: #0c0c0c; color: #fff; padding: 30px;">
          <div style="border-bottom: 2px solid #D91E26; padding-bottom: 15px; margin-bottom: 25px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px; letter-spacing: 1.5px; text-transform: uppercase;">Anvil Techno Forge</h1>
            <p style="color: #D91E26; margin: 5px 0 0 0; font-size: 12px; font-weight: bold; letter-spacing: 2px;">NEW WEBSITE INQUIRY</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px; width: 160px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #222;">Full Name</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px; border-bottom: 1px solid #222;">${newInquiry.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #222;">Company</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px; border-bottom: 1px solid #222;">${newInquiry.company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #222;">Email</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px; border-bottom: 1px solid #222;"><a href="mailto:${newInquiry.email}" style="color: #D91E26; text-decoration: none;">${newInquiry.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #222;">Phone</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px; border-bottom: 1px solid #222;"><a href="tel:${newInquiry.phone}" style="color: #fff; text-decoration: none;">${newInquiry.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #222;">Product of Interest</td>
              <td style="padding: 10px 0; color: #D91E26; font-size: 15px; font-weight: bold; border-bottom: 1px solid #222;">${newInquiry.product}</td>
            </tr>
          </table>
          
          <div style="background-color: #111; border-left: 3px solid #D91E26; padding: 20px; margin-bottom: 25px;">
            <p style="color: #888; margin: 0 0 10px 0; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">Requirement / Message Details</p>
            <p style="color: #e0e0e0; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-line;">${newInquiry.message}</p>
          </div>
          
          <div style="border-top: 1px solid #222; padding-top: 15px; text-align: center; color: #555; font-size: 11px;">
            <p style="margin: 0;">Submitted on ${new Date(newInquiry.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
            <p style="margin: 5px 0 0 0;">Anvil Techno Forge Web Administration Platform</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `Anvil Website Inquiry <${user}>`,
        to: receiverEmail,
        replyTo: newInquiry.email,
        subject: `New Inquiry: ${newInquiry.product} - ${newInquiry.name}`,
        html: emailHtml,
      });

      console.log("[API/Contact] Inquiry notification email sent successfully.");
    } else {
      console.log("[API/Contact] SMTP config missing (SMTP_HOST, SMTP_USER, SMTP_PASS). Skipping email dispatch.");
    }

    return NextResponse.json({ success: true, message: "Inquiry processed successfully." }, { status: 200 });

  } catch (error: any) {
    console.error("[API/Contact] Error processing inquiry request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
