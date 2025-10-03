import Section from "@/components/Section";
import Accordion from "@/components/Accordion";

export default function Strategies() {
  return (
    <>
      <section className="bg-white">
        <div className="container-std py-16">
          <h1 className="text-3xl font-semibold">Strategies</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            We operate diversified, rules-based programs. Below is a high-level overview.
          </p>
        </div>
      </section>

      <Section title="Programs">
        <div className="grid grid-cols-1 gap-6">
          <Accordion title="Systematic Short-Term">
            Horizon: intraday to multi-day; instruments: liquid futures/CFDs; objective: diversified alpha with strict controls.
          </Accordion>
          <Accordion title="Market-Neutral Research">
            Factor discovery, orthogonalization, and slippage-aware execution with careful neutrality.
          </Accordion>
          <Accordion title="Mid-Term Trend Following">
            Momentum signals across assets, volatility scaling, and drawdown controls.
          </Accordion>
          <Accordion title="Execution & Infrastructure">
            Smart order routing, exchange/broker neutrality, monitoring, and resilience.
          </Accordion>
        </div>
      </Section>

      <Section title="Risk Management">
        <ul className="list-disc pl-6 text-slate-700">
          <li>Position sizing and volatility targeting</li>
          <li>Factor/market betas and VaR considerations</li>
          <li>Stress tests and scenario analysis</li>
          <li>Pre-trade checks and kill-switches</li>
        </ul>
      </Section>

      <Section title="Compliance">
        <p className="text-slate-700">We do not publish trading signals or accept external client capital.</p>
      </Section>
    </>
  );
}
