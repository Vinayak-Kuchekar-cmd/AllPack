// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_hxyQ33tX_Ke85x16FsHsXAKoB9NBAfZuo');
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const message = `
      New Contact Inquiry:

      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Company: ${data.company}

      Project Details:
      ${data.projectDetails}
    `;

    const { error } = await resend.emails.send({
      from: 'Contact Form <no-reply@yourdomain.com>',
      to: ['illusiondesign128@gmail.com'], // Change to your target email
      subject: 'New Contact Form Submission',
      text: message,
    });

    if (error) {
      console.error('Email send error:', error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
