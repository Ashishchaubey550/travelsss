import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const emailTo = process.env.EMAIL_RECEIVER || "Shuklatravel00@gmail.com";
        const emailUser = process.env.EMAIL_USER || "Shuklatravel00@gmail.com";
        const emailPass = process.env.EMAIL_PASSWORD;

        if (!emailPass) {
            return NextResponse.json(
                { message: 'Setup Required: Please generate a Google App Password and add it to your .env file as EMAIL_PASSWORD.' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass
            }
        });

        const mailOptions = {
            from: emailUser,
            to: emailTo,
            subject: data._subject || "New Website Inquiry",
            html: `
        <div style="font-family: sans-serif; color: #1a1c1c; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #000000; margin-bottom: 24px; font-weight: bold; border-bottom: 2px solid #e9c349; padding-bottom: 12px;">
            ${data._subject || "New Submission"}
          </h2>
          <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse: collapse;">
            ${Object.entries(data)
                    .filter(([key]) => key !== '_subject')
                    .map(([key, value]) => `
                <tr style="border-bottom: 1px solid #eeeeee;">
                  <td width="35%" style="font-weight: 600; color: #46464d;">${key}</td>
                  <td width="65%" style="color: #000000;">${value || '<em style="color:#999">Not provided</em>'}</td>
                </tr>
              `).join('')}
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #76767e; text-align: center;">
            Sent securely via The Global Concierge Next.js Platform
          </p>
        </div>
      `
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Success" }, { status: 200 });

    } catch (error: any) {
        console.error("Email SMTP error:", error);
        return NextResponse.json({ message: error.message || "Failed to send email." }, { status: 500 });
    }
}
