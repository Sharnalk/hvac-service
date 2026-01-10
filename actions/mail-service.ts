"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailResponse = {
  success: boolean;
  message: string;
};

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function sendEmail(
  replyTo: string,
  subject: string,
  body: string
): Promise<EmailResponse> {
  if (!replyTo || !subject || !body) {
    return { success: false, message: "Missing fields" };
  }

  if (!isValidEmail(replyTo)) {
    return { success: false, message: "Invalid email address" };
  }

  try {
    await resend.emails.send({
      from: "Contact <no-reply@hvac-contact.anas-dev.com>",
      to: "anas.jiyar1@gmail.com",
      replyTo,
      subject,
      html: body,
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send email" };
  }
}
