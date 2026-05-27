"use server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const rawData = Object.fromEntries(formData);
  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." };
  }

  const { name, email, message } = result.data;

  try {
    // 1️⃣ Send notification to YOU
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Use verified domain in production
      to: [process.env.CONTACT_EMAIL || "briangithinji2022@gmail.com"],
      subject: ` New Inquiry from ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">New Portfolio Contact</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><strong>Name</strong></td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><strong>Email</strong></td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td></tr>
          </table>
          <h3 style="color: #0f172a; margin-top: 20px;">Message:</h3>
          <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #6366f1; white-space: pre-wrap;">${message}</div>
          <p style="margin-top: 24px; color: #64748b; font-size: 14px;">Sent via portfolio contact form</p>
        </div>
      `,
      replyTo: email,
    });

    // 2️⃣ Send auto-reply to SENDER
    await resend.emails.send({
      from: "Brian Githinji <onboarding@resend.dev>",
      to: [email],
      subject: "✅ Thank you for reaching out!",
    html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - Brian Githinji</title>
    <style>
      @media only screen and (max-width: 600px) {
        .container { width: 100% !important; padding: 20px !important; }
        .header { padding: 24px 20px !important; }
        .content { padding: 24px 20px !important; }
        .footer { padding: 20px !important; }
        .btn { display: block !important; width: 100% !important; margin: 8px 0 !important; }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #f8fafc; color: #475569; line-height: 1.6;">
    
    <!-- Outer Wrapper -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f8fafc">
      <tr>
        <td align="center" style="padding: 20px;">
          
          <!-- Email Container -->
          <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0;">
            
            <!-- Header: Gradient + Checkmark -->
            <tr>
              <td class="header" style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); padding: 32px 40px 24px; text-align: center;">
                <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: rgba(255, 255, 255, 0.2); border-radius: 16px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(8px);">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.025em;">Message Received!</h1>
                <p style="margin: 8px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">I'll get back to you soon.</p>
              </td>
            </tr>

            <!-- Content Body -->
            <tr>
              <td class="content" style="padding: 32px 40px;">
                <p style="margin: 0 0 20px; font-size: 16px; color: #0f172a;">Hi <strong style="color: #0f172a;">${name}</strong>,</p>
                
                <p style="margin: 0 0 20px; font-size: 16px;">Thank you for reaching out via my portfolio. I've received your message and will review it shortly.</p>
                
                <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border-left: 4px solid #6366f1; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0;">
                  <p style="margin: 0; font-size: 15px; color: #0f172a;">
                    ⏱️ I typically respond within <strong>24-48 hours</strong>. If this is urgent, feel free to WhatsApp me directly.
                  </p>
                </div>

                <!-- Quick Action Buttons -->
                <p style="margin: 28px 0 16px; font-size: 15px; font-weight: 600; color: #0f172a;">While you wait:</p>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding: 4px 0;">
                      <a href="https://github.com/bgithinji" class="btn" style="display: inline-block; padding: 12px 24px; background: #0f172a; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 500; font-size: 14px; text-align: center;">🔗 View my GitHub</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0;">
                      <a href="https://linkedin.com/in/briangithinji" class="btn" style="display: inline-block; padding: 12px 24px; background: #0077b5; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 500; font-size: 14px; text-align: center;">💼 Connect on LinkedIn</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0;">
                      <a href="https://wa.me/2547XXXXXXXX" class="btn" style="display: inline-block; padding: 12px 24px; background: #25D366; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 500; font-size: 14px; text-align: center;">💬 WhatsApp Me</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Signature / Footer -->
            <tr>
              <td class="footer" style="background: #f8fafc; padding: 24px 40px 32px; border-top: 1px solid #e2e8f0;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-right: 16px; vertical-align: top;">
                      <!-- Profile Image Placeholder -->
                      <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #6366f1, #a855f7); border-radius: 12px; overflow: hidden;">
                        <img src="https://yourportfolio.com/images/my-logo.jpg" alt="Brian" width="48" height="48" style="display: block; width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.style.background='linear-gradient(135deg, #6366f1, #a855f7)'">
                      </div>
                    </td>
                    <td style="vertical-align: middle;">
                      <p style="margin: 0 0 4px; font-size: 16px; font-weight: 600; color: #0f172a;">Brian Githinji</p>
                      <p style="margin: 0 0 8px; font-size: 14px; color: #64748b;">Full Stack Developer • Kenya 🇰🇪</p>
                      <a href="https://yourportfolio.com" style="font-size: 14px; color: #6366f1; text-decoration: none; font-weight: 500;">yourportfolio.com →</a>
                    </td>
                  </tr>
                </table>
                
                <!-- Social Icons -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
                  <tr>
                    <td>
                      <a href="https://github.com/githinji12/" style="display: inline-block; margin-right: 12px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#64748b"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      </a>
                      <a href="https://www.linkedin.com/in/githinji-wanjohi-9b5b202bb/" style="display: inline-block; margin-right: 12px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#64748b"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                      <a href="https://wa.me/254745506462" style="display: inline-block;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#64748b"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </a>
                    </td>
                  </tr>
                </table>
                
                <p style="margin: 20px 0 0; font-size: 12px; color: #94a3b8; text-align: center;">
                  © ${new Date().getFullYear()} Brian Githinji. All rights reserved.<br>
                  <a href="https://yourportfolio.com" style="color: #6366f1; text-decoration: none;">Unsubscribe</a> • <a href="https://yourportfolio.com/privacy" style="color: #6366f1; text-decoration: none;">Privacy</a>
                </p>
              </td>
            </tr>
            
          </table>
          
        </td>
      </tr>
    </table>
    
  </body>
  </html>
`,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Email delivery failed:", error);
    return { success: false, error: "Failed to send message. Please try again or email me directly." };
  }
}