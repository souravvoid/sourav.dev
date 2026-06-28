"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

const initialState: ContactFormState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {pending ? (
        <>
          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Send Message
        </>
      )}
    </button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight inline-flex items-center gap-3">
          Contact
          <div className="h-1 w-24 bg-primary rounded-full ml-2"></div>
        </h2>
      </header>

      <section className="mb-12 max-w-3xl">
        <p className="text-muted-foreground leading-relaxed mb-8">
          I&apos;m currently open to new opportunities for Software Engineering and Full Stack Developer roles. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <TerminalWindow title="contact_form" className="max-w-2xl">
          <form action={formAction} className="flex flex-col gap-5">
            {state?.error && (
              <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{state.error}</p>
              </div>
            )}
            
            {state?.success && (
              <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{state.message}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-background/50 border border-border rounded-xl px-4 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="bg-background/50 border border-border rounded-xl px-4 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Job Opportunity / Inquiry"
                className="bg-background/50 border border-border rounded-xl px-4 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Hello Sourav, I'd like to discuss..."
                className="bg-background/50 border border-border rounded-xl px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all resize-y"
              />
            </div>

            <div className="pt-2">
              <SubmitButton />
            </div>
          </form>
        </TerminalWindow>
      </section>
    </article>
  );
}
