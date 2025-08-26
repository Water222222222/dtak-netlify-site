
// D‑Tak Studio — Best‑in‑Class Agency One‑Pager (React + Tailwind + Framer Motion)
// Upgrades: Trust bar, icon services, case studies w/ metrics, testimonials, blog teasers, sticky CTAs
// NOTE: You can export this to static HTML later; ask me to package a Netlify-ready ZIP.

import React from "react";
import { motion } from "framer-motion";
import {
  Store,
  CreditCard,
  Megaphone,
  Mail as Mails,
  Truck,
  Search as SearchIcon,
  Star,
  CheckCircle2,
} from "lucide-react";

// === CONFIG ============================================================== 
const CONFIG = {
  brand: {
    name: "D‑Tak Studio",
    tagline: "Design. Market. Grow.",
    logo: "/D-Tak Studio.jpg", // place in /public
  },
  contact: {
    whatsappIntl: "+2348147688896",
    email: "dantakstuidodepartment@gmail.com",
    phoneDisplay: "+234 814 768 8896",
    whatsappPrefill: "Hi D‑Tak Studio, I want to build or grow my store.",
  },
  forms: {
    formspree: "https://formspree.io/f/mnqeqjba", // replace with your own later if needed
  },
  colors: {
    primary: "blue-600",
    accent: "blue-300",
    dark: "sate-900",
  },
};

const waLink = () =>
  `https://wa.me/${CONFIG.contact.whatsappIntl.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
    CONFIG.contact.whatsappPrefill
  )}`;

// === HEAD TAGS ============================================================
const HeadTags = () => (
  <>
    <title>{`${CONFIG.brand.name} — ${CONFIG.brand.tagline}`}</title>
    <meta
      name="description"
      content="D‑Tak Studio builds high‑converting stores, integrates payment gateways, runs performance marketing, email automations, dropshipping setups, and SEO that drives revenue."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#2563EB" />
    <link rel="icon" href="/favicon.png" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={`${CONFIG.brand.name} — ${CONFIG.brand.tagline}`} />
    <meta property="og:description" content="Digital marketing • Store design • Payments • Email • Dropshipping • SEO" />
    <meta property="og:image" content="/og.jpg" />
  </>
);

// === UI HELPERS ===========================================================
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl ${className}`}>{children}</div>
);
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-20 px-6 md:px-10 ${className}`}>{children}</section>
);
const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 text-white px-3 py-1 text-xs md:text-sm">
    <span className="size-1.5 rounded-full bg-blue-300" />
    {children}
  </span>
);
const Button = ({ href = "#", children, variant = "primary" }) => (
  <a
    href={href}
    className={
      variant === "primary"
        ? "inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 shadow-lg"
        : "inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-white font-semibold px-5 py-3"
    }
  >
    {children}
  </a>
);

// === HERO ================================================================
const Hero = () => (
  <Section id="home" className="pt-24">
    <Container className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <Badge>Digital Marketing • Store Design • Payments • Email • SEO</Badge>
        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
          Design. Market. <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Grow.</span>
        </h1>
        <p className="mt-4 text-slate-300 text-base md:text-lg max-w-xl">
          We build high‑converting stores, integrate rock‑solid payment gateways, run data‑driven social ads, and automate your email so you sell while you sleep.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href={waLink()}>Chat on WhatsApp</Button>
          <Button href="#contact" variant="ghost">Get a Free Proposal</Button>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-6">
          {[
            ["120+", "Projects delivered"],
            ["5.0★", "Client rating"],
            ["7+ yrs", "Hands‑on experience"],
          ].map(([v, l]) => (
            <div className="text-center" key={v}>
              <div className="text-3xl md:text-5xl font-extrabold tracking-tight">{v}</div>
              <div className="mt-2 text-slate-400 text-sm md:text-base">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="aspect-[4/3] rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-3"
        >
          <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.35),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(125,211,252,0.35),transparent_45%)]" />
        </motion.div>
        <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <div className="text-sm text-slate-300">Trusted by startups & SMEs in NG, US, EU</div>
        </div>
      </div>
    </Container>
  </Section>
);

// === TRUST BAR ============================================================
const TrustBar = () => (
  <Section className="py-10">
    <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-slate-400">
      {["Shopify", "WooCommerce", "Paystack", "Flutterwave", "Stripe", "Klaviyo"].map((n) => (
        <div key={n} className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-blue-400" />
          <span className="text-sm">{n}</span>
        </div>
      ))}
    </Container>
  </Section>
);

// === SERVICES =============================================================
const ServiceCard = ({ icon: Icon, title, desc, bullets = [] }) => (
  <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-600 transition">
    <div className="flex items-center gap-3">
      <Icon className="size-5 text-blue-300" />
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-slate-300 text-sm md:text-base">{desc}</p>
    <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
      {bullets.map((b, i) => (
        <li key={i} className="marker:text-blue-300">{b}</li>
      ))}
    </ul>
  </div>
);

const Services = () => (
  <Section id="services">
    <Container>
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">What we do</h2>
      <p className="mt-3 text-slate-300 max-w-2xl">End‑to‑end growth support for e‑commerce and digital brands.</p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard icon={Store} title="Store Design & UX" desc="Conversion‑focused Shopify / WooCommerce builds and redesigns." bullets={["Theme setup & customization","Speed optimization","Product pages that sell"]} />
        <ServiceCard icon={CreditCard} title="Payment Gateways" desc="Secure integrations, testing, and troubleshooting." bullets={["Flutterwave/Paystack/Stripe","Fraud & chargeback basics","Checkout UX improvements"]} />
        <ServiceCard icon={Megaphone} title="Social Ads" desc="Performance marketing across Facebook, Instagram, TikTok, LinkedIn, Reddit." bullets={["Audience & creatives","A/B testing & scaling","ROAS reporting"]} />
        <ServiceCard icon={Mails} title="Email Marketing" desc="Flows, campaigns, and segmentation that print money." bullets={["Welcome & abandoned cart","Klaviyo/GetResponse automations","Deliverability tune‑ups"]} />
        <ServiceCard icon={Truck} title="Dropshipping" desc="From product research to launch and fulfilment playbooks." bullets={["Supplier vetting","Winning product frameworks","Launch checklist"]} />
        <ServiceCard icon={SearchIcon} title="SEO" desc="On‑page, technical, and authority building the right way." bullets={["Keyword mapping","Technical fixes","Content strategy"]} />
      </div>
    </Container>
  </Section>
);

// === CASE STUDIES =========================================================
const CaseCard = ({ name, result, bullets = [] }) => (
  <article className="rounded-2xl border border-slate-800 p-6 bg-slate-900/50">
    <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
      <Star className="size-4" /> Case Study
    </div>
    <h3 className="mt-2 text-xl font-semibold">{name}</h3>
    <p className="mt-2 text-slate-300 text-sm">{result}</p>
    <ul className="mt-3 text-slate-400 text-sm list-disc list-inside">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </article>
);

const CaseStudies = () => (
  <Section id="case-studies">
    <Container>
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Results we deliver</h2>
      <p className="mt-3 text-slate-300">A quick sample. Swap with your real projects later.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <CaseCard
          name="ErgoDynamx — Shopify redesign"
          result={<>
            Redesigned product + checkout → <span className="font-semibold">+38% conversion</span> in 30 days; <span className="font-semibold">‑18% cart abandonment</span>.
          </>}
          bullets={["Speed audit & theme optimization","Paystack checkout UX improvements","Klaviyo welcome + abandoned cart flows"]}
        />
        <CaseCard
          name="RoomingVille — Lead gen + nurture"
          result={<>
            Paid social + email automation → <span className="font-semibold">200 qualified leads</span> in 3 weeks; CPL ↓ <span className="font-semibold">27%</span>.
          </>}
          bullets={["Meta & TikTok creatives testing","Landing page A/B tests","GetResponse segmentation & warmup"]}
        />
        <CaseCard
          name="Trivlandia — Launch & SEO ramp"
          result={<>
            Pre‑launch content + influencer seeding → <span className="font-semibold">$42k preorders</span>; top‑10 rankings for 12 keywords.
          </>}
          bullets={["Keyword map + content calendar","Affiliate & UGC playbook","Technical fixes & rich snippets"]}
        />
        <CaseCard
          name="NG DTC — Dropshipping sprint"
          result={<>
            Product discovery → 2 winners; first 30 days **3.2 ROAS**; email drives <span className="font-semibold">+18% revenue</span>.
          </>}
          bullets={["Supplier vetting & QA","TikTok + IG creatives system","3‑flow email setup"]}
        />
      </div>
      <div className="mt-8"><a href="#contact" className="inline-flex rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3">Book a Free Strategy Call</a></div>
    </Container>
  </Section>
);

// === PRICING ==============================================================
const PriceCard = ({ tier, price, features, highlight }) => (
  <div className={`rounded-2xl p-6 border ${highlight ? "border-blue-600 bg-slate-900/60 shadow-lg shadow-blue-600/20" : "border-slate-800"}`}>
    <div className={`text-sm ${highlight ? "text-blue-400" : "text-slate-400"}`}>{tier}</div>
    <div className="mt-2 text-3xl font-extrabold">{price}</div>
    <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
      {features.map((f,i)=> <li key={i}>{f}</li>)}
    </ul>
    <a href="#contact" className="mt-6 inline-flex rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3">Choose {tier}</a>
  </div>
);

const Pricing = () => (
  <Section id="pricing" className="bg-slate-950/60">
    <Container>
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Simple pricing</h2>
      <p className="mt-3 text-slate-300">Transparent packages. Custom quotes available.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <PriceCard tier="Starter" price="$499" features={["1‑page store or landing page","Payment gateway setup","Basic SEO & analytics","1 email flow (welcome)"]} />
        <PriceCard tier="Growth" highlight price="$1,499" features={["Full store build (up to 10 pages)","Advanced payment + checkout UX","3 email flows + 2 campaigns","Ad setup with first‑month optimization"]} />
        <PriceCard tier="Scale" price="$3,500+" features={["Custom build or migration","Retainer ads + CRO sprints","Advanced SEO & content","Dedicated success manager"]} />
      </div>
    </Container>
  </Section>
);

// === TESTIMONIALS =========================================================
const Testimonial = ({ quote, author }) => (
  <figure className="rounded-2xl border border-slate-800 p-6 bg-slate-900/50">
    <blockquote className="text-slate-200">“{quote}”</blockquote>
    <figcaption className="mt-4 text-slate-400 text-sm">— {author}</figcaption>
  </figure>
);

const Testimonials = () => (
  <Section id="testimonials">
    <Container>
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">What clients say</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Testimonial quote="Rebuilt our Shopify in 2 weeks—conversion jumped 28%." author="Mara, DTC Lead" />
        <Testimonial quote="Payment issues vanished. Revenue up and refunds down." author="Kay, Ops Manager" />
        <Testimonial quote="Email flows alone paid for the project in month one." author="Dami, Founder" />
      </div>
    </Container>
  </Section>
);

// === BLOG TEASERS =========================================================
const Blog = () => (
  <Section id="blog">
    <Container>
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Insights</h2>
      <p className="mt-3 text-slate-300">Short tips you can publish weekly.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          "7 product‑page tweaks that lift CR",
          "How to pick a payment gateway in NG",
          "The first 3 flows every store needs",
        ].map((t, i) => (
          <article key={i} className="rounded-2xl border border-slate-800 p-6 bg-slate-900/50">
            <h3 className="font-semibold">{t}</h3>
            <p className="mt-2 text-slate-300 text-sm">Add a 150–200 word post. Keep it actionable.</p>
            <a href="#contact" className="mt-3 inline-block text-blue-400 hover:text-blue-300">Work with us →</a>
          </article>
        ))}
      </div>
    </Container>
  </Section>
);

// === CONTACT ==============================================================
function ContactSection() {
  return (
    <Section id="contact" className="bg-slate-950/60">
      <Container>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Tell us about your project</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Fill this out and we’ll reply within one business day.</p>
        <form action={CONFIG.forms.formspree} method="POST" className="mt-8 grid md:grid-cols-2 gap-6">
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" placeholder="Full name" className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3" required />
          <input name="email" type="email" placeholder="Email" className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3" required />
          <select name="service" className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 md:col-span-2">
            <option>Store design</option>
            <option>Payment gateway integration</option>
            <option>Social ads</option>
            <option>Email marketing</option>
            <option>Dropshipping setup</option>
            <option>SEO</option>
            <option>Something else</option>
          </select>
          <textarea name="message" rows={5} placeholder="Tell us about your goals, timeline, and budget..." className="md:col-span-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-3" required />
          <div className="flex items-center gap-4 md:col-span-2">
            <button className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3">Request Proposal</button>
            <a href={`mailto:${CONFIG.contact.email}`} className="text-slate-300 hover:text-white">{CONFIG.contact.email}</a>
            <span className="text-slate-700">•</span>
            <a href={`tel:${CONFIG.contact.whatsappIntl}`} className="text-slate-300 hover:text-white">{CONFIG.contact.phoneDisplay}</a>
          </div>
        </form>
      </Container>
    </Section>
  );
}

// === APP SHELL =============================================================
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white selection:bg-blue-400/30">
      <HeadTags />

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
        <Container className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src={CONFIG.brand.logo} alt="Logo" className="w-9 h-9 rounded-xl object-contain bg-white" />
            <div className="font-extrabold tracking-tight text-lg md:text-xl">{CONFIG.brand.name}</div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#case-studies" className="hover:text-white">Case Studies</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2">Get Free Proposal</a>
        </Container>
      </header>

      <Hero />
      <TrustBar />
      <Services />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <Blog />
      <ContactSection />

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-slate-800">
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-extrabold">{CONFIG.brand.name}</div>
            <div className="text-slate-400 text-sm mt-1">Digital marketing • Store design • Payments • Email • Dropshipping • SEO</div>
          </div>
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} {CONFIG.brand.name}. All rights reserved.</div>
        </Container>
      </footer>
    </div>
  );
}
