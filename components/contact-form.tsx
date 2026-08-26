
"use client";
import { useActionState } from "react";
import { ContactMessage } from "@/lib/action";
import clsx from "clsx";  

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(ContactMessage, null)
  return (
    <div className="bg-white p-10 md:p-14 border border-taupe-200 relative">
      <span className="absolute top-6 left-6 w-8 h-8 border-t border-l border-taupe-300" />
      <span className="absolute top-6 right-6 w-8 h-8 border-t border-r border-taupe-300" />
      <span className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-taupe-300" />
      <span className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-taupe-300" />

      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
          Get In Touch
        </span>
        <h3 className="font-playfair text-3xl font-normal text-taupe-900 mt-3">
          Send a Message
        </h3>
        <div className="flex items-center justify-center gap-3 mt-5">
          <span className="h-px w-10 bg-taupe-300" />
          <span className="w-1.5 h-1.5 rotate-45 border border-taupe-400" />
          <span className="h-px w-10 bg-taupe-300" />
        </div>
      </div>

      {state?.message ? (
        <div className="p-4 mb-4 text-center text-sm text-taupe-800 rounded-lg bg-taupe-100" role="alert">
          <div className="font-medium ">
            - {state.message} - 
          </div>
        </div>
      ): null}
      <form action={formAction}>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
          <div>
            <input
              type="text"
              name="name"
              className="bg-transparent py-2.5 border-b border-taupe-300 w-full font-light text-taupe-800 placeholder:text-taupe-400 placeholder:tracking-wide focus:outline-none focus:border-taupe-800 transition-colors duration-300"
              placeholder="Name*"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              className="bg-transparent py-2.5 border-b border-taupe-300 w-full font-light text-taupe-800 placeholder:text-taupe-400 placeholder:tracking-wide focus:outline-none focus:border-taupe-800 transition-colors duration-300"
              placeholder="cagitadian@example.com"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.email}</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <input
              type="text"
              name="subject"
              className="bg-transparent py-2.5 border-b border-taupe-300 w-full font-light text-taupe-800 placeholder:text-taupe-400 placeholder:tracking-wide focus:outline-none focus:border-taupe-800 transition-colors duration-300"
              placeholder="Subject"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.subject}</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <textarea
              name="message"
              rows={5}
              className="bg-transparent py-2.5 border-b border-taupe-300 w-full font-light text-taupe-800 placeholder:text-taupe-400 placeholder:tracking-wide focus:outline-none focus:border-taupe-800 transition-colors duration-300 resize-none"
              placeholder="Your Message"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error?.message}</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={clsx("mt-10 mx-auto block px-12 text-center py-3 font-medium text-sm tracking-wide text-taupe-800 border border-taupe-800 hover:bg-taupe-800 hover:text-taupe-50 transition-colors duration-300 cursor-pointer", {
            "opacity-70 cursor-progress animate-pulse" : isPending,
          })}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;