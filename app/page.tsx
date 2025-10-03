import Section from "@/components/Section";
import Card from "@/components/Card";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container-std py-24">
          <h1 className="text-4xl font-semibold sm:text-5xl">Genesis Quant Capital</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Systematic trading and research, based in London.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/about" className="btn-primary">About</a>
            <a href="/contact" className="btn-secondary">Contact</a>
          </div>
          <div className="mt-10 text-sm text-slate-500">
            UK Registered • London • Data-driven • Risk-disciplined
          </div>
        </div>
        <div aria-hidden className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-silver/20 to-transparent"></div>
      </section>

      <Section title="What We Do" description="We apply data-driven, rules-based approaches to liquid global markets.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card title="Systematic Trading">Rules-based programs across liquid global markets.</Card>
          <Card title="Research">Empirical research, factor discovery, and validation.</Card>
          <Card title="Risk Management">Volatility scaling, risk budgets, and drawdown controls.</Card>
        </div>
      </Section>

      <Section title="Strategy Pillars">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card title="Short-term Quant">Signal combinations across intraday to multi-day horizons.</Card>
          <Card title="Market-Neutral Research">Neutralization to broad risk factors and careful execution.</Card>
          <Card title="Mid-term Trend Following">Diversified momentum with adaptive risk scaling.</Card>
          <Card title="Execution & Infrastructure">Smart order routing, robust monitoring, and resilience.</Card>
        </div>
      </Section>

      <Section title="Latest Insights">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PostCard title="Volatility Regimes in 2025" slug="volatility-regimes-2025" date="02 Oct 2025" tag="Research" excerpt="We examine regime shifts and their impact on systematic risk scaling." />
          <PostCard title="Building a Scalable Trading System" slug="scalable-trading-system" date="15 Sep 2025" tag="Engineering" excerpt="Design choices for reliability, latency, and observability in production." />
          <PostCard title="Factor Investing: An Overfitting Checklist" slug="overfitting-checklist" date="01 Aug 2025" tag="Research" excerpt="A practical checklist to avoid spurious factors and p-hacking." />
        </div>
      </Section>

      <section className="container-std my-16">
        <div className="flex items-center justify-between rounded-lg border border-slate-200 p-8">
          <div>
            <h3 className="text-xl font-semibold">Collaborate with us</h3>
            <p className="mt-2 text-slate-600">For partnerships and media inquiries, reach out to our team.</p>
          </div>
          <a className="btn-primary" href="/contact">Contact</a>
        </div>
      </section>
    </>
  );
}
