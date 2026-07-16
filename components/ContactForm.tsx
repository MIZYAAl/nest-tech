"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState<{ text: string; show: boolean }>({
    text: "",
    show: false,
  });

  function fireToast(text: string) {
    setToast({ text, show: true });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3200);
  }

  function handleSubmit() {
    const n = name.trim();
    const e = email.trim();
    const m = message.trim();
    if (!n || !e || !m) {
      fireToast("Please fill in all fields.");
      return;
    }
    fireToast("Message sent! We'll be in touch soon.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <div className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            placeholder="Tell us about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="form-submit" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
      <div className={`toast${toast.show ? " show" : ""}`}>{toast.text}</div>
    </>
  );
}
