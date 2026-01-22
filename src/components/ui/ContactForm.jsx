import { useState, useRef } from "react";

function ContactForm() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
      setSuccess(false);
  
      emailjs
        .sendForm(
          "service_b2dtmnc",        // your service ID
          "TEMPLATE_ID_HERE",       // <-- add this
          formRef.current,
          "PUBLIC_KEY_HERE"         // <-- add this
        )
        .then(() => {
          setSuccess(true);
          formRef.current.reset();
        })
        .catch((err) => {
          console.error(err);
          alert("Something went wrong. Please try again.");
        })
        .finally(() => setLoading(false));
    };
  
    return (
      <form ref={formRef} onSubmit={sendEmail} className="relative z-10 space-y-6">
        <div>
          <label className="text-sm font-semibold text-slate-700">Your Name</label>
          <input
            name="name"
            required
            placeholder="John Doe"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
          />
        </div>
  
        <div>
          <label className="text-sm font-semibold text-slate-700">Email Address</label>
          <input
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
          />
        </div>
  
        <div>
          <label className="text-sm font-semibold text-slate-700">
            Tell me about your project
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="I’d like to build a modern web app..."
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/40 resize-none"
          />
        </div>
  
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white rounded-full py-4 font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
          <ArrowRight className="w-5 h-5" />
        </button>
  
        {success && (
          <p className="text-green-600 text-center font-medium">
            Message sent! I’ll get back to you soon 🙌
          </p>
        )}
      </form>
    );
  }
  