import BackLink from "@/components/BackLink";

export default function TermsPage() {
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
        Terms of Service
      </h1>
      <div className="legal-content">
        <p>Last updated: June 2026</p>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using the Nest Technologies website, you accept
          and agree to be bound by these Terms of Service. If you do not
          agree to these terms, please do not use our website.
        </p>
        <h2>Use of Website</h2>
        <p>
          You may use this website for lawful purposes only. You agree not to
          use this site in any way that could damage, disable, or impair the
          website, or interfere with any other party&apos;s use of the
          website.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and
          code, is the property of Nest Technologies and is protected by
          applicable intellectual property laws. You may not reproduce,
          distribute, or create derivative works without our express written
          permission.
        </p>
        <h2>Disclaimer</h2>
        <p>
          This website is provided on an &quot;as is&quot; basis. Nest
          Technologies makes no warranties, expressed or implied, regarding
          the accuracy, completeness, or reliability of any content on this
          site.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          Nest Technologies shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of this
          website.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about these terms, contact us at
          info@nesttechnologies.dev.
        </p>
      </div>
    </div>
  );
}
