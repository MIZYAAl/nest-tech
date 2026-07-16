import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ResearchTags from "@/components/ResearchTags";
import { workItems, articles } from "@/lib/data";

const FOCUS_AREAS = [
  {
    num: "01",
    title: "Product Systems",
    desc: "Products built as systems — not isolated features. We design for cohesion from day one.",
  },
  {
    num: "02",
    title: "Interface Design",
    desc: "Clear, intuitive interfaces with strong hierarchy. Form follows function, always.",
  },
  {
    num: "03",
    title: "Application Architecture",
    desc: "Scalable structures built for performance. Code that works today and grows tomorrow.",
  },
  {
    num: "04",
    title: "Marketplace Design",
    desc: "Systems that connect users through efficient, well-considered flows and interactions.",
  },
  {
    num: "05",
    title: "Mobile Platforms",
    desc: "Native experiences optimized for mobile contexts. Designed for how people actually use their devices.",
  },
  {
    num: "06",
    title: "Rapid Prototyping",
    desc: "From idea to working product in minimal time. We move fast without cutting corners.",
  },
];

const APPROACH_ITEMS = [
  {
    num: "01",
    title: "Clear User Flows",
    desc: "Intuitive journeys that guide users naturally through every interaction and decision.",
  },
  {
    num: "02",
    title: "Clean Architecture",
    desc: "Code that's readable, testable, and maintainable by every engineer on the team.",
  },
  {
    num: "03",
    title: "Scalable Foundations",
    desc: "Infrastructure designed to grow with your needs — never a bottleneck, always a platform.",
  },
  {
    num: "04",
    title: "Consistent Design Systems",
    desc: "Unified visual language across all touchpoints, devices, and product surfaces.",
  },
];

const statusClass: Record<string, string> = {
  production: "status-production",
  beta: "status-beta",
  development: "status-development",
};

export default function Home() {
  return (
    <div id="mainSite">
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="grid-bg" />
        <p className="hero-eyebrow">Software, Systems, and beyond</p>
        <h1 className="hero-title">
          Building systems
          <br />
          that <em>matter.</em>
        </h1>
        <p className="hero-sub">
          A technology company focused on engineering, systems thinking, and
          product development. We work at the intersection of software,
          hardware, and human-centered design.
        </p>
        <div className="hero-actions">
          <Link href="#work" className="btn btn-primary">
            View Our Work
          </Link>
          <Link href="#approach" className="btn btn-ghost">
            Our Approach
          </Link>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span className="scroll-dot" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy">
        <Reveal>
          <p className="section-tag">Areas of Focus</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            What we <span>build.</span>
          </h2>
        </Reveal>
        <div className="focus-grid">
          {FOCUS_AREAS.map((f, i) => (
            <Reveal key={f.num} delay={((i % 3) + 1) as 1 | 2 | 3} className="focus-card">
              <div className="focus-number">{f.num}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach">
        <div className="approach-header">
          <div>
            <Reveal>
              <p className="section-tag">Approach</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="section-title">
                Products are built as systems —
                <br />
                <span>not screens.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="approach-desc">
              Designed for clarity. Built for growth. Every decision we make
              is in service of the whole.
            </p>
          </Reveal>
        </div>
        <div className="approach-list">
          {APPROACH_ITEMS.map((item, i) => (
            <Reveal
              key={item.num}
              delay={i === 0 ? undefined : (i as 1 | 2 | 3)}
              className="approach-item"
            >
              <span className="approach-num">{item.num}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <Reveal>
          <p className="section-tag">Work</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Products & systems
            <br />
            <span>we&apos;ve built.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="work-list">
            {workItems.map((item) => (
              <Link key={item.slug} className="work-item" href={`/work/${item.slug}`}>
                <span className="work-item-num">{item.num}</span>
                <div className="work-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="work-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="work-item-right">
                  <span className={`status-badge ${statusClass[item.status]}`}>
                    {item.statusLabel}
                  </span>
                  <span className="work-arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* RESEARCH */}
      <section id="research">
        <Reveal>
          <p className="section-tag">Research & Learning</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Thinking in <span>public.</span>
          </h2>
        </Reveal>
        <Reveal
          delay={2}
          style={{
            marginTop: 20,
            fontSize: 16,
            color: "var(--text2)",
            fontWeight: 300,
          }}
        >
          We share our learnings, research, and perspectives on building
          technology.
        </Reveal>
        <Reveal delay={3}>
          <ResearchTags />
        </Reveal>
        <Reveal delay={2}>
          <div className="research-list">
            {articles.map((article) => (
              <Link key={article.slug} className="research-item" href={`/research/${article.slug}`}>
                <div>
                  <div className="research-meta">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.category}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
                <span className="research-arrow">↗</span>
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <Link className="research-view-all" href="/research/all">
            View all articles →
          </Link>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Reveal>
          <p className="section-tag">Let&apos;s Work Together</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Building something
            <br />
            <span>ambitious? We should talk.</span>
          </h2>
        </Reveal>
        <div className="contact-grid">
          <Reveal delay={2} className="contact-left">
            <p>
              We partner with teams who are solving hard problems. Whether
              you&apos;re rethinking infrastructure, building developer
              tools, or bridging software and hardware — we&apos;re
              interested.
            </p>
            <div className="contact-actions">
              <a href="mailto:info@nesttechnologies.dev" className="btn btn-primary">
                Start a Conversation
              </a>
              <Link href="#work" className="btn btn-ghost">
                View Case Studies
              </Link>
            </div>
            <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 28 }}>
              <div className="contact-detail">
                <label>Email</label>
                <a href="mailto:info@nesttechnologies.dev">info@nesttechnologies.dev</a>
              </div>
              <div className="contact-detail">
                <label>Location</label>
                <span>Karachi, PK</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={3} className="contact-right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
