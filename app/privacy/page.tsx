import BackLink from "@/components/BackLink";

export default function PrivacyPage() {
  return (
    <div className="page-wrap">
      <BackLink href="/" />
      <p className="section-tag" style={{ marginBottom: 16 }}>
        Legal
      </p>
      <h1
        style={{
          fontSize: "clamp(32px,4vw,56px)",
          fontWeight: 300,
          letterSpacing: "-.025em",
          color: "var(--white)",
          marginBottom: 48,
        }}
      >
        Privacy Policy
      </h1>
      <div className="legal-content">
        <p>Last updated: June 2026</p>
        <h2>Information We Collect</h2>
        <p>
          Nest Technologies collects information you provide directly to us,
          such as when you contact us via email or through our contact form.
          This may include your name, email address, and any information you
          choose to include in your message.
        </p>
        <p>
          We also collect information automatically when you visit our
          website, including your IP address, browser type, referring URLs,
          and pages visited. This information is used solely for analytics
          and improving our website.
        </p>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries and communications</li>
          <li>To improve our website and services</li>
          <li>To understand how visitors interact with our site</li>
        </ul>
        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal
          information to outside parties. We do not share your information
          with third parties except as necessary to operate our website or as
          required by law.
        </p>
        <h2>Data Retention</h2>
        <p>
          We retain personal information for as long as necessary to fulfill
          the purposes for which it was collected, or as required by
          applicable law.
        </p>
        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us
          at info@nesttechnologies.dev.
        </p>
      </div>
    </div>
  );
}
