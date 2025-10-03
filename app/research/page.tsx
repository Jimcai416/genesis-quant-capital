import PostCard from "@/components/PostCard";
import Section from "@/components/Section";

export default function Research() {
  return (
    <>
      <section className="bg-white">
        <div className="container-std py-16">
          <h1 className="text-3xl font-semibold">Research & Insights</h1>
          <p className="mt-4 max-w-3xl text-slate-600">Occasional notes, whitepapers, and engineering posts.</p>
        </div>
      </section>

      <Section title="All Posts">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PostCard title="Volatility Regimes in 2025" slug="volatility-regimes-2025" date="02 Oct 2025" tag="Research" excerpt="We examine regime shifts and their impact on systematic risk scaling." />
          <PostCard title="Building a Scalable Trading System" slug="scalable-trading-system" date="15 Sep 2025" tag="Engineering" excerpt="Design choices for reliability, latency, and observability in production." />
          <PostCard title="Factor Investing: An Overfitting Checklist" slug="overfitting-checklist" date="01 Aug 2025" tag="Research" excerpt="A practical checklist to avoid spurious factors and p-hacking." />
        </div>
      </Section>
    </>
  );
}
