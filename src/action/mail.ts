'use server'
import nodemailer from 'nodemailer';


const Email = process.env.SMTP_EMAIL;
const pass = process.env.SMTP_PASSWORD;

export async function sendEmail({ from ,name , subject, body}: {from : string ,name : string , subject : string , body : string}) {
  const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
      user: Email,
      pass: pass
    }
  });

  try {
    await transporter.sendMail({
      from: from,
      to: Email,
      subject: subject,
      html: body
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
