"use client";

import { PERSONAL_INFO } from "@/lib/constants";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Check, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [buttonStatus, setButtonStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Check if we're on GitHub Pages or in a static environment
  const isStaticEnvironment =
    process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "github-pages" ||
    (typeof window !== "undefined" &&
      window.location.hostname.includes("github.io"));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    setFieldErrors({});
    setButtonStatus("idle");

    // Basic client-side validation
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 5) {
      errors.subject = "Subject must be at least 5 characters";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setButtonStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      if (isStaticEnvironment) {
        // For GitHub Pages, use mailto as fallback
        const mailtoBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${mailtoBody}`;

        window.open(mailtoLink, "_blank");

        setSubmitStatus({
          type: "success",
          message:
            "Your email client has been opened. Please send the email to complete your message.",
        });
        setButtonStatus("success");

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFieldErrors({});

        // Reset button status after animation
        setTimeout(() => setButtonStatus("idle"), 3000);
      } else {
        // For environments with server support, use the API
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          // Handle validation errors with field-specific messages
          if (data.error === "Validation failed" && data.details) {
            const errors: Record<string, string> = {};
            data.details.forEach(
              (detail: { field: string; message: string }) => {
                errors[detail.field] = detail.message;
              }
            );
            setFieldErrors(errors);
            setButtonStatus("error");
          } else if (data.fallback === "mailto") {
            // API suggests using mailto fallback
            const mailtoBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
            const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${mailtoBody}`;

            window.open(mailtoLink, "_blank");

            setSubmitStatus({
              type: "success",
              message:
                "Your email client has been opened. Please send the email to complete your message.",
            });
            setButtonStatus("success");

            // Reset form
            setFormData({ name: "", email: "", subject: "", message: "" });
            setFieldErrors({});
            setTimeout(() => setButtonStatus("idle"), 3000);
          } else {
            // Handle other errors
            setSubmitStatus({
              type: "error",
              message: data.error || "Failed to send message",
            });
            setButtonStatus("error");
          }
          return;
        }

        // Success
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! I'll get back to you soon.",
        });
        setButtonStatus("success");

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFieldErrors({});

        // Reset button status after animation
        setTimeout(() => setButtonStatus("idle"), 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
      setButtonStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Reset button status when user starts editing
    if (buttonStatus !== "idle") {
      setButtonStatus("idle");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: PERSONAL_INFO.location,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: GitHubLogoIcon,
      label: "GitHub",
      href: PERSONAL_INFO.github.url,
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: LinkedInLogoIcon,
      label: "LinkedIn",
      href: PERSONAL_INFO.linkedin.url,
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${PERSONAL_INFO.email}`,
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? I&apos;d love to hear
              from you. Let&apos;s create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Let&apos;s Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I&apos;m always open to discussing new opportunities,
                  interesting projects, or just having a chat about technology
                  and development. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-200 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-200 ${social.color}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg border ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300"
                        : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground ${
                        fieldErrors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-border"
                      }`}
                      placeholder="John Doe"
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground ${
                        fieldErrors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-border"
                      }`}
                      placeholder="john@example.com"
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground ${
                      fieldErrors.subject
                        ? "border-red-500 focus:ring-red-500"
                        : "border-border"
                    }`}
                    placeholder="Project Collaboration"
                  />
                  {fieldErrors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground resize-none ${
                      fieldErrors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-border"
                    }`}
                    placeholder={`Hi ${PERSONAL_INFO.firstName}, I'd like to discuss a project with you...`}
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Form Instructions */}
                {isStaticEnvironment && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800"
                  >
                    <div className="flex items-start space-x-2">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-blue-800 dark:text-blue-300">
                        <p className="font-medium mb-1">Email Client Mode</p>
                        <p>
                          This form will open your email client with a
                          pre-filled message. Simply send the email to complete
                          your message.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed ${
                    buttonStatus === "success"
                      ? "bg-green-600 hover:bg-green-700 text-white border border-green-600"
                      : buttonStatus === "error"
                        ? "bg-red-600 hover:bg-red-700 text-white border border-red-600"
                        : isSubmitting
                          ? "bg-primary hover:bg-primary text-primary-foreground border border-primary"
                          : "btn-primary"
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  animate={{
                    scale: buttonStatus === "success" ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    duration: buttonStatus === "success" ? 0.6 : 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      <span>
                        {isStaticEnvironment
                          ? "Opening Email..."
                          : "Sending..."}
                      </span>
                    </div>
                  ) : buttonStatus === "success" ? (
                    <motion.div
                      className="flex items-center justify-center space-x-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-5 h-5" />
                      <span>
                        {isStaticEnvironment
                          ? "Email Opened!"
                          : "Message Sent!"}
                      </span>
                    </motion.div>
                  ) : buttonStatus === "error" ? (
                    <motion.div
                      className="flex items-center justify-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="w-5 h-5" />
                      <span>Failed to Send</span>
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      {isStaticEnvironment ? (
                        <>
                          <Mail className="w-5 h-5" />
                          <span>Open Email Client</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8 border-t border-border"
          >
            <p className="text-muted-foreground">
              © 2025 {PERSONAL_INFO.name}. Built with Next.js, TypeScript, and
              Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
