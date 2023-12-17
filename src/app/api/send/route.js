import { NextResponse } from "next/server";
import { Resend } from "resend";

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);
console.log("FROM_EMAIL:", process.env.FROM_EMAIL);

try {
  const resend = new Resend(process.env.RESEND_API_KEY);
} catch (error) {
  console.error("Error initializing Resend:", error);
}
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'kajal <kajal.madhusudan03@gmail.com>',
      to: [fromEmail, 'kajal.madhusudan03@gmail.com'],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
