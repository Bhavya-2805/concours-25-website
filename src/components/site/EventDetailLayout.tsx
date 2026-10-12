import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Mail, Phone, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";

type Fact = { icon: ReactNode; label: string; value: string };
type Row = { label: string; value: ReactNode };

export type EventDetailProps = {
  back: { to: string; label: string };
  icon: ReactNode;
  name: string;
  subtitle: string;
  category: string;
  registrationTitle: string;
  registerLink?: string;
  rulebookLink: string;
  onRegister?: () => void;
  onRulebook?: () => void;
  facts: Fact[];
  infoTitle: string;
  info: Row[];
  /** "Name: phone" lines */
  contacts: string[];
  quickInfo: Row[];
  registrationOpen: boolean;
};

const EMAIL = "concoursdaiict@gmail.com";

function parseContact(line: string) {
  const idx = line.indexOf(":");
  if (idx === -1) return { name: line.trim(), phone: "" };
  return { name: line.slice(0, idx).trim(), phone: line.slice(idx + 1).trim() };
}

/** Shared detail page for sports, athletics and e-sports events. */
export function EventDetailLayout(props: EventDetailProps) {
  const {
    back, icon, name, subtitle, category, registrationTitle, registerLink, rulebookLink,
    onRegister, onRulebook, facts, infoTitle, info, contacts, quickInfo, registrationOpen,
  } = props;

  const openRegister = () => {
    if (!registerLink) return;
    window.open(registerLink, "_blank");
    onRegister?.();
  };
  const openRulebook = () => {
    window.open(rulebookLink, "_blank");
    onRulebook?.();
  };

  return (
    <div className="min-h-screen bg-[#0a0203]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-stage pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-lines pointer-events-none" aria-hidden />
        <div
          className="absolute right-[-6%] top-1/2 -translate-y-1/2 text-[22rem] md:text-[30rem] leading-none opacity-[0.06] blur-[2px] select-none pointer-events-none"
          aria-hidden
        >
          {icon}
        </div>

        <div className="relative container max-w-6xl">
          <Link
            to={back.to}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#c9cbce]/60 hover:text-white transition-colors animate-rise"
          >
            <ArrowLeft className="w-4 h-4" /> {back.label}
          </Link>

          <div className="mt-10 flex flex-col md:flex-row md:items-end gap-8">
            <div className="relative shrink-0 animate-rise delay-1">
              <div className="absolute inset-0 rounded-3xl bg-[#e01b2e]/40 blur-3xl" aria-hidden />
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl ring-gradient bg-gradient-to-br from-white/10 to-white/[0.02] flex items-center justify-center text-6xl md:text-7xl">
                {icon}
              </div>
            </div>
            <div className="min-w-0">
              <div className="eyebrow animate-rise delay-2">{subtitle}</div>
              <h1 className="mt-4 font-display font-black text-chrome text-6xl sm:text-7xl lg:text-8xl break-words animate-rise delay-2">
                {name}
              </h1>
              <div className="mt-5 flex flex-wrap gap-2 animate-rise delay-3">
                <span className="chip chip-red">
                  <span className="live-dot" /> {registrationOpen ? "Registrations Open" : "Coming Soon"}
                </span>
                <span className="chip">{category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative pb-24">
        <div className="container max-w-6xl grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Registration */}
            <Reveal className="surface overflow-hidden">
              <div className="flex items-center gap-3 px-6 md:px-8 py-5 border-b border-white/[0.07] bg-gradient-to-r from-[#e01b2e]/20 via-[#840c15]/10 to-transparent">
                <Trophy className="w-5 h-5 text-[#e01b2e]" />
                <h2 className="font-display font-bold text-2xl text-white">{registrationTitle}</h2>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  {registerLink ? (
                    <button type="button" className="btn btn-primary flex-1" onClick={openRegister}>
                      Register Now <ArrowRight className="arrow w-4 h-4" />
                    </button>
                  ) : (
                    <button type="button" className="btn btn-primary flex-1" disabled>
                      Registration Coming Soon
                    </button>
                  )}
                  <button type="button" className="btn btn-ghost flex-1" onClick={openRulebook}>
                    <BookOpen className="w-4 h-4" /> View Rulebook
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-xl overflow-hidden bg-white/[0.07]">
                  {facts.map((fact) => (
                    <div key={fact.label} className="bg-[#120507] p-5">
                      <div className="flex items-center gap-2 text-[#e01b2e] [&_svg]:w-4 [&_svg]:h-4">
                        {fact.icon}
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#c9cbce]/55">
                          {fact.label}
                        </span>
                      </div>
                      <div className="mt-3 text-lg font-semibold text-white leading-snug">{fact.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Information */}
            <Reveal className="surface p-6 md:p-8">
              <h2 className="font-display font-bold text-3xl text-white">{infoTitle}</h2>
              <dl className="mt-6 divide-y divide-white/[0.07]">
                {info.map((row) => (
                  <div key={row.label} className="py-5 first:pt-0 last:pb-0 grid md:grid-cols-[200px_1fr] gap-2 md:gap-8">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e01b2e] pt-1">{row.label}</dt>
                    <dd className="text-[#e4e6e8]/85 leading-relaxed">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:space-y-8 lg:sticky lg:top-28 self-start">
            <Reveal delay={100} className="surface p-6 md:p-7">
              <h2 className="font-display font-bold text-2xl text-white">Contact Information</h2>
              <div className="mt-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c9cbce]/55">
                  <Phone className="w-3.5 h-3.5 text-[#e01b2e]" /> Point Of Contact
                </div>
                <ul className="mt-3 space-y-2">
                  {contacts.map((line) => {
                    const { name: person, phone } = parseContact(line);
                    return (
                      <li key={line}>
                        <a
                          href={phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : undefined}
                          className="group flex items-center justify-between gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 hover:border-[#e01b2e]/50 hover:bg-[#e01b2e]/[0.06] transition-colors"
                        >
                          <span className="text-sm font-semibold text-white">{person}</span>
                          <span className="text-xs font-mono text-[#c9cbce]/70 group-hover:text-white whitespace-nowrap">
                            {phone}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c9cbce]/55">
                  <Mail className="w-3.5 h-3.5 text-[#e01b2e]" /> Email Support
                </div>
                <a href={`mailto:${EMAIL}`} className="mt-2 block text-sm text-white hover:text-[#ff6b78] transition-colors break-all">
                  {EMAIL}
                </a>
              </div>
            </Reveal>

            <Reveal delay={180} className="surface p-6 md:p-7">
              <h2 className="font-display font-bold text-2xl text-white">Quick Info</h2>
              <dl className="mt-5 space-y-4">
                {quickInfo.map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-4 text-sm">
                    <dt className="text-[#c9cbce]/55">{row.label}</dt>
                    <dd className="text-right font-medium text-white">{row.value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 text-sm">
                  <dt className="text-[#c9cbce]/55">Registration</dt>
                  <dd className="inline-flex items-center gap-2 font-semibold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    {registrationOpen ? "Open" : "Coming Soon"}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}
