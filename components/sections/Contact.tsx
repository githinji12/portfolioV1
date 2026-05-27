"use client";
import { useActionState } from "react";
import { submitContactForm } from "@/actions/contact";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// 🛡️ Built-in Github Icon to bypass dependency errors
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);
  const isSuccess = state?.success === true;
  const isError = state?.success === false;

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
            Let's build something exceptional.
          </h2>
          <p className="mb-10" style={{ color: "var(--text-secondary)" }}>
            Available for remote contracts, full-time roles, and high-impact engineering partnerships. Based in Nairobi, open worldwide.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: <Mail className="w-5 h-5" />, label: "Email", value: "briangithinji2022@gmail.com", href: "mailto:briangithinji2022@gmail.com" },
              { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "+2547 45 506 462", href: "https://wa.me/254745506462" },
              { icon: <GithubIcon className="w-5 h-5" />, label: "GitHub", value: "github.com/githinji12", href: "https://github.com/githinji12/" },
            ].map(item => (
              <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center transition-colors" style={{ color: "var(--text-secondary)" }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.label}</div>
                  <div className="text-sm font-medium transition-colors group-hover:text-primary" style={{ color: "var(--text-primary)" }}>
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="glass-card p-8 text-center flex flex-col items-center justify-center h-full min-h-100" // ✅ Fixed Tailwind v4
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Message Sent!</h3>
                <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="glass-btn text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                action={formAction}
                className="glass-card p-8 space-y-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div>
                  <label className="text-xs mb-1 block" style={{ color: "var(--text-secondary)" }}>Name</label>
                  <input 
                    name="name" 
                    required 
                    type="text" 
                    className="w-full bg-muted border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-muted disabled:opacity-50" 
                    style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }} 
                    placeholder="Your name" 
                    disabled={isPending} 
                  />
                </div>
                <div>
                  <label className="text-xs mb-1 block" style={{ color: "var(--text-secondary)" }}>Email</label>
                  <input 
                    name="email" 
                    required 
                    type="email" 
                    className="w-full bg-muted border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-muted disabled:opacity-50" 
                    style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }} 
                    placeholder="you@company.com" 
                    disabled={isPending} 
                  />
                </div>
                <div>
                  <label className="text-xs mb-1 block" style={{ color: "var(--text-secondary)" }}>Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4} 
                    className="w-full bg-muted border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all placeholder:text-muted resize-none disabled:opacity-50" 
                    style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }} 
                    placeholder="Project details, goals, timeline..." 
                    disabled={isPending} 
                  />
                </div>

                {isError && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle className="w-4 h-4" />
                    <span>{state.error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="glass-btn w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </span>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}