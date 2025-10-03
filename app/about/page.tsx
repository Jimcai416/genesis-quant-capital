import Section from "@/components/Section";
import Card from "@/components/Card";

export default function About() {
  return (
    <>
      <section className="bg-white">
        <div className="container-std py-16">
          <h1 className="text-3xl font-semibold">About Genesis Quant Capital</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            Our mission is to apply rigorous research, engineering excellence, and disciplined risk management to systematic trading.
            We operate with integrity, transparency, precision, and long-term thinking.
          </p>
        </div>
      </section>

      <Section title="Our Approach">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card title="Data & Research">Empirical methods, robust validation, and realistic assumptions.</Card>
          <Card title="Engineering">Reliable systems, observability, and iterative improvement.</Card>
          <Card title="Governance">Documentation, code review, and kill-switch protocols.</Card>
        </div>
      </Section>

      <Section title="Team">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card title="Jinmin Cai — Founder/Director">Quant developer and trading systems builder. LinkedIn available on request.</Card>
          <Card title="Trader — London">Short-term strategies and execution research.</Card>
          <Card title="Trader — London">Risk monitoring and operations.</Card>
        </div>
      </Section>

      <Section title="Values">
        <ul className="grid grid-cols-2 gap-4 text-slate-700 sm:grid-cols-4">
          <li>Integrity</li><li>Transparency</li><li>Rigor</li><li>Long-termism</li>
        </ul>
      </Section>
    </>
  );
}
