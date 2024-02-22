
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  message: string;
}

const email = process.env.SMTP_EMAIL;
const pass = process.env.SMTP_PASSWORD;

export async function sendEmail(options: EmailOptions) {
  const transporter = nodemailer.createTransport({
    // Configure your email service here
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: email,
      pass: pass
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: options.to,
      subject: options.subject,
      text: options.message
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
