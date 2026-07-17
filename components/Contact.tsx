'use client';

import { useForm, ValidationError } from '@formspree/react';
import { ArrowUpRight, Check, Loader2, Send } from 'lucide-react';

const fieldClassName =
  'w-full border-0 border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/25 transition-colors focus:border-[#f06543] focus:outline-none';

const Contact = () => {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mkoqdjbz';
  const [state, handleSubmit, reset] = useForm(formId);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-3 py-5 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid overflow-hidden rounded-3xl border border-white/8 bg-[#121212] lg:grid-cols-[0.85fr_1.15fr] lg:rounded-[32px]">
        <div className="flex flex-col p-7 sm:p-10 lg:min-h-[39rem] lg:p-12">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#f06543]">Contact</p>
            <h1 className="max-w-lg text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white text-balance">
              Have a project in mind?
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#999999] sm:text-base">
              Tell me what you’re building, where you are in the process, and what you need help solving.
            </p>
          </div>

          <div className="mt-12 lg:mt-auto">
            <div className="mb-7 flex items-center gap-3 text-sm text-[#b3b3b3]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for selected projects
            </div>

            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Prefer email?</p>
            <a href="mailto:isaacudofia0@gmail.com" className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#f06543] sm:text-base">
              isaacudofia0@gmail.com
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            <p className="mt-8 text-xs text-white/30">Based in Lagos · Working remotely</p>
          </div>
        </div>

        <div className="border-t border-white/8 bg-[#171717] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          {state.succeeded ? (
            <div className="flex min-h-[30rem] flex-col items-start justify-center" role="status">
              <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                <Check size={22} strokeWidth={2} aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Thanks for reaching out.</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#999999]">
                Your message is in. I’ll review the details and respond within two business days.
              </p>
              <button type="button" onClick={reset} className="mt-8 text-sm font-semibold text-[#f06543] transition-colors hover:text-white">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Project enquiry</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">Tell me about the opportunity</h2>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-[#b3b3b3]">Your name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your name" className={fieldClassName} />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium text-[#b3b3b3]">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" className={fieldClassName} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-xs text-[#f06543]" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-xs font-medium text-[#b3b3b3]">Project or role</label>
                <input id="subject" name="subject" type="text" required placeholder="What would you like to discuss?" className={fieldClassName} />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-medium text-[#b3b3b3]">A few details</label>
                <textarea id="message" name="message" rows={5} required placeholder="Scope, timeline, current stage, and the outcome you need." className={`${fieldClassName} resize-none`} />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-xs text-[#f06543]" />
              </div>

              <ValidationError errors={state.errors} className="text-sm text-[#f06543]" />

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/30">Typical reply: 1–2 business days</p>
                <button type="submit" disabled={state.submitting} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f06543] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#d95332] disabled:cursor-not-allowed disabled:opacity-50">
                  {state.submitting ? (
                    <>Sending <Loader2 className="animate-spin" size={16} aria-hidden="true" /></>
                  ) : (
                    <>Send enquiry <Send size={16} aria-hidden="true" /></>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
