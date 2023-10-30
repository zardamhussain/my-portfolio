// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_BGFgb6pt_FniqTvLyfemsSMmmRADkbfC6');



export async function POST(req) {
  const body = await req.json();
  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'Zardam <onboarding@resend.dev>',
      to: ['zardamhussain@gmail.com', email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            {message}
          </p>
        </>
      ),
    });


    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
