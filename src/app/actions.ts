'use server';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
    // Here you would typically integrate with an email service
    // like Resend, SendGrid, or Nodemailer to send an email.
    console.log('Form data received:', values);

    // For this example, we'll just simulate a successful submission.
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: 'Your message has been sent successfully!' };
}
