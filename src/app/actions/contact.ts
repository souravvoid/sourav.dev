"use server";

export type ContactFormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export async function submitContactForm(
  prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic Server-Side Validation
  if (!name || name.trim().length < 2) {
    return { error: "Name must be at least 2 characters long." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { error: "Please provide a valid email address." };
  }

  if (!message || message.trim().length < 10) {
    return { error: "Message must be at least 10 characters long." };
  }

  try {
    // Simulate network delay for a real backend feel (e.g. sending via Resend)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In a real application, you would use an email API here. Example:
    // const subject = formData.get("subject") as string;
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: 'your-email@example.com',
    //   subject: subject || 'New Contact Form Submission',
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    // });

    return {
      success: true,
      message: "Thank you for reaching out! Your message has been sent successfully."
    };
  } catch (error) {
    console.error("Failed to send message:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}
