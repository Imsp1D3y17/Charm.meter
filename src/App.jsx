/**
 * Mega Punch Vending — B2B Landing Page
 *
 * Single-page layout composed of components below for readability: Header,
 * Hero, ValueProposition, KioskShowcase, HowItWorks, and AboutFooter. All
 * are rendered by the default-exported <App />.
 */

import { useState } from "react";

import kioskBrandedFront from "./assets/kiosk-branded-front.jpg";
import kioskInteriorLoaded from "./assets/kiosk-interior-loaded.jpg";
import kioskWhitePremium from "./assets/kiosk-white-premium.jpg";

const CTA_HREF = "#request-evaluation";

const WEB3FORMS_ACCESS_KEY = "ea360870-930f-436a-b5cd-b04c00a836e9";

/* -------------------------------------------------------------------- */
/*  Shared bits                                                          */
/* -------------------------------------------------------------------- */

function GlowDivider() {
  return (
    <div className="relative h-px w-full overflow-visible bg-white/10">
      <div className="absolute left-1/2 top-1/2 h-px w-2/3 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-magenta to-electric blur-[1px]" />
      <div className="absolute left-1/2 top-1/2 h-8 w-2/3 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-magenta/20 via-fuchsia-500/10 to-electric/20 blur-2xl" />
    </div>
  );
}

function PrimaryButton({ as = "a", href, children, className = "", ...rest }) {
  const Tag = as === "button" ? "button" : "a";
  const linkProps = Tag === "a" ? { href } : {};

  return (
    <Tag
      {...linkProps}
      {...rest}
      className={
        "group relative inline-flex items-center justify-center overflow-hidden rounded-md px-8 py-4 font-display text-sm font-semibold uppercase tracking-wide text-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 " +
        className
      }
    >
      <span className="absolute inset-0 bg-gradient-to-br from-electric via-fuchsia-400 to-magenta transition-transform duration-300 group-hover:scale-110" />
      <span className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-60 mix-blend-overlay" />
      <span className="relative">{children}</span>
    </Tag>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-electric">
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------- */
/*  Icons (inline, no external deps)                                    */
/* -------------------------------------------------------------------- */

const icons = {
  cellular: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 20h.01M8 20v-4M13 20v-8M18 20V8M21 4 3 20"
    />
  ),
  revenue: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 17.25 9 11l4 4 8-8M21 7v6M21 7h-6"
    />
  ),
  premium: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2.5 14.5 9l6.5 1-5 4.6L17.4 21 12 17.6 6.6 21 8 14.6l-5-4.6 6.5-1L12 2.5Z"
    />
  ),
  walk: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-7.58 7-12A7 7 0 1 0 5 9c0 4.42 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  ),
  install: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8 12 3 3 8l9 5 9-5Zm0 0v8l-9 5m0-5v5m0-5L3 8m0 0v8l9 5"
    />
  ),
  payout: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 10v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8M7 15h4"
    />
  ),
};

function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

/* -------------------------------------------------------------------- */
/*  Header                                                               */
/* -------------------------------------------------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-magenta to-electric">
            <span className="absolute inset-0 rounded-md bg-gradient-to-br from-magenta to-electric blur-md opacity-70" />
            <span className="relative font-display text-sm font-bold text-black">MP</span>
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-widest text-white sm:text-base">
            Mega Punch <span className="text-electric">Vending</span>
          </span>
        </a>

        <div className="hidden sm:block">
          <PrimaryButton href={CTA_HREF} className="!px-5 !py-2.5 !text-xs">
            Request Evaluation
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------- */
/*  Hero                                                                 */
/* -------------------------------------------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-magenta/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-electric/20 blur-[130px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pb-32 sm:pt-28 md:px-10">
        <Eyebrow>Automated Retail &middot; Inland Empire</Eyebrow>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          Elevate Your Space.
          <br />
          <span className="text-gradient-neon">Monetize Your Foot Traffic.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/60 sm:text-lg">
          Mega Punch Vending provides premium, zero-maintenance automated retail
          kiosks to the Inland Empire&rsquo;s highest-traffic destinations.
        </p>

        <div className="mt-10">
          <PrimaryButton href={CTA_HREF}>Request a Free Site Evaluation</PrimaryButton>
        </div>

        <div className="mt-16 flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-xs uppercase tracking-widest text-white/40">
          <span>100% Cashless</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
          <span>Remote Monitored</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
          <span>Zero Staff Effort</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
          <span>3&times;3 Footprint</span>
        </div>
      </div>

      <GlowDivider />
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  Value Proposition                                                    */
/* -------------------------------------------------------------------- */

const valueProps = [
  {
    icon: "cellular",
    accent: "magenta",
    title: "Zero Operational Effort",
    body: "Our machines are 100% cashless and cellular. We monitor inventory remotely and handle all restocking and maintenance. Your staff never lifts a finger.",
  },
  {
    icon: "revenue",
    accent: "electric",
    title: "Guaranteed Passive Revenue",
    body: "Turn a dead corner into profit. We pay our host locations a competitive flat commission on our monthly gross sales just for providing a 3×3 footprint.",
  },
  {
    icon: "premium",
    accent: "magenta",
    title: "Premium Aesthetic",
    body: "No cheap plastic or gumball aesthetics. Our illuminated, modern kiosks exclusively vend high-end trading cards and Pokémon products, enhancing the modern vibe of your food hall, retail space, or entertainment center.",
  },
];

function ValueCard({ icon, accent, title, body }) {
  const accentText = accent === "magenta" ? "text-magenta" : "text-electric";
  const accentBg = accent === "magenta" ? "bg-magenta/10" : "bg-electric/10";
  const accentRing = accent === "magenta" ? "hover:border-magenta/40" : "hover:border-electric/40";

  return (
    <div
      className={
        "group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-charcoal p-8 transition-colors duration-300 " +
        accentRing
      }
    >
      <div className={"flex h-12 w-12 items-center justify-center rounded-lg " + accentBg}>
        <Icon name={icon} className={"h-6 w-6 " + accentText} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/55">{body}</p>
      <div
        className={
          "absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-current to-transparent transition-transform duration-300 group-hover:scale-x-100 " +
          accentText
        }
      />
    </div>
  );
}

function ValueProposition() {
  return (
    <section className="relative bg-charcoal py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Partner With Us</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Passive Income, Zero Headaches.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <ValueCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      <GlowDivider />
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  Kiosk Showcase                                                       */
/* -------------------------------------------------------------------- */

const kioskShots = [
  {
    src: kioskBrandedFront,
    accent: "magenta",
    title: "Illuminated Touchscreen",
    body: "A 21.5\" storefront that sells itself — bright, branded, and built to draw foot traffic.",
  },
  {
    src: kioskWhitePremium,
    accent: "electric",
    title: "Clean, Minimal Finish",
    body: "Powder-coated steel casing in a neutral finish that fits any lobby, food hall, or retail floor.",
  },
  {
    src: kioskInteriorLoaded,
    accent: "magenta",
    title: "8 Aisles, 120 Packs",
    body: "Fully stocked and cellular-monitored — we know when it's time to restock before you do.",
  },
];

function KioskCard({ src, accent, title, body }) {
  const accentText = accent === "magenta" ? "text-magenta" : "text-electric";
  const accentRing = accent === "magenta" ? "hover:border-magenta/40" : "hover:border-electric/40";

  return (
    <div
      className={
        "group overflow-hidden rounded-xl border border-white/10 bg-slate transition-colors duration-300 " +
        accentRing
      }
    >
      <div className="aspect-[4/5] overflow-hidden bg-[#7fe3c3]">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className={"font-display text-base font-semibold " + accentText}>{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/55">{body}</p>
      </div>
    </div>
  );
}

function KioskShowcase() {
  return (
    <section className="relative bg-slate py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Meet the Kiosk</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            No Cheap Plastic. No Gumball Aesthetics.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {kioskShots.map((shot) => (
            <KioskCard key={shot.title} {...shot} />
          ))}
        </div>
      </div>
      <GlowDivider />
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  How It Works                                                         */
/* -------------------------------------------------------------------- */

const steps = [
  {
    number: "01",
    icon: "walk",
    title: "The Walkthrough",
    body: "We conduct a quick, 5-minute site visit to identify the perfect, low-impact 3×3 footprint for the kiosk.",
  },
  {
    number: "02",
    icon: "install",
    title: "The Install",
    body: "We deliver, power, and stock the machine with zero disruption to your daily operations.",
  },
  {
    number: "03",
    icon: "payout",
    title: "The Payout",
    body: "You receive a consistent monthly commission check based on the machine's gross sales.",
  },
];

function StepCard({ number, icon, title, body, isLast }) {
  return (
    <div className="relative flex flex-1 flex-col items-start">
      <div className="flex items-center gap-4">
        <span className="font-display text-4xl font-bold text-white/10 sm:text-5xl">
          {number}
        </span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-slate text-white">
          <Icon name={icon} className="h-5 w-5" />
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">{body}</p>

      {!isLast && (
        <div className="absolute right-[-1.5rem] top-[1.35rem] hidden h-px w-12 bg-gradient-to-r from-magenta to-electric md:block" />
      )}
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="relative bg-ink py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_0%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The Process</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three Steps to a New Revenue Stream
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-12 md:flex-row md:gap-10">
          {steps.map((step, i) => (
            <StepCard key={step.number} {...step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>

      <GlowDivider />
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  Evaluation Form                                                      */
/* -------------------------------------------------------------------- */

const fieldClasses =
  "w-full rounded-md border border-white/15 bg-ink px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-electric/60";

function EvaluationForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submittedName = formData.get("name") || "a property manager";

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New Site Evaluation Request from ${submittedName} — Mega Punch Vending`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-electric/30 bg-electric/5 p-8 text-center">
        <p className="font-display text-lg font-semibold text-white">Request received.</p>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Thanks for reaching out — we&rsquo;ll follow up within one business day to
          schedule your free site evaluation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg text-left">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input type="text" name="name" placeholder="Your name" required className={fieldClasses} />
        <input type="email" name="email" placeholder="Email address" required className={fieldClasses} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input type="text" name="property_name" placeholder="Property / company name" className={fieldClasses} />
        <input type="tel" name="phone" placeholder="Phone (optional)" className={fieldClasses} />
      </div>

      <textarea
        name="message"
        placeholder="Tell us a bit about the space (optional)"
        rows={4}
        className={"mt-4 resize-none " + fieldClasses}
      />

      <div className="mt-6 flex flex-col items-center gap-3">
        <PrimaryButton as="button" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request a Free Site Evaluation"}
        </PrimaryButton>
        {status === "error" && (
          <p className="text-sm text-magenta-soft">
            Something went wrong — please try again, or call us directly.
          </p>
        )}
      </div>
    </form>
  );
}

/* -------------------------------------------------------------------- */
/*  About / Footer                                                       */
/* -------------------------------------------------------------------- */

function AboutFooter() {
  return (
    <section id="request-evaluation" className="relative overflow-hidden bg-charcoal">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-magenta/20 to-electric/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>About Mega Punch Vending</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Local Operations, Professional Execution
          </h2>
          <p className="mt-6 text-balance text-sm leading-relaxed text-white/55 sm:text-base">
            Founded and operated right here in Rancho Cucamonga, Mega Punch Vending is
            dedicated to bringing high-end automated retail to the local community. Backed
            by over 15 years of direct operational management and route logistics
            experience, we understand that property managers need reliable, invisible
            vendors. We pride ourselves on maintaining immaculate machines, keeping
            inventory fully stocked, and staying completely out of your staff&rsquo;s way.
          </p>
        </div>

        <div className="mt-14">
          <EvaluationForm />
        </div>

        <div className="mx-auto mt-16 flex max-w-md flex-col items-center gap-1 border-t border-white/10 pt-10 text-center">
          <p className="font-display text-base font-semibold text-white">Victor Prieto</p>
          <p className="text-sm text-white/50">Owner &amp; Operator</p>
          <p className="mt-3 text-sm text-white/50">
            Serving Rancho Cucamonga and the Greater Inland Empire.
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-ink/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/40 sm:flex-row md:px-10">
          <p>&copy; {new Date().getFullYear()} Mega Punch Vending. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-magenta to-electric" />
            Rancho Cucamonga, CA
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  App                                                                  */
/* -------------------------------------------------------------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-white antialiased">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <KioskShowcase />
        <HowItWorks />
        <AboutFooter />
      </main>
    </div>
  );
}
