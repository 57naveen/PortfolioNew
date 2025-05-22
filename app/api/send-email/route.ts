// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic'; 

export async function POST(req: Request) {
  const { name, email, description } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

 const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.GMAIL_USER,
  subject: `New contact from ${name}`,           // backticks needed here
  text: `Name: ${name}\nEmail: ${email}\nMessage:\n${description}`,  // backticks here too
};

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
