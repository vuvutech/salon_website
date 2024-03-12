import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(req) {
  const password = process.env.REAL_EMAIL_PASSWORD;
  const emailFrom = process.env.NEXT_PUBLIC_FROM_EMAIL;
  const emailTo = process.env.NEXT_PUBLIC_TO_EMAIL;
  const data = await req.json();

  // create transporter object
  var transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "api",
      pass: `${password}`,
    },
    debug: true,
    logger: true
  });

  try {
    const mail = await transporter.sendMail({
      from: `${emailFrom}`,
      to: `${emailTo}`,
      replyTo: `${data.email}`,
      subject: `New Booking request from ${data.email}`,
      html: `
            <p>Name: ${data.name} </p>
            <p>Email: ${data.email}</p>
            <p>Date: ${data.date} </p>
            <p>Number: ${data.number} </p><br />
            <p>Best regards,</p>
            <p>Elsie Hair Salon</p>
            `,
    });
    return NextResponse.json(
      { status: 200 },
      { message: "Success: email was sent" }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
