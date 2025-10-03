import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Careers() {
  return (
    <>
      <section className="bg-white">
        <div className="container-std py-16">
          <h1 className="text-3xl font-semibold">Careers</h1>
          <p className="mt-4 max-w-3xl text-slate-600">We are building a team of traders, researchers, and engineers in London.</p>
        </div>
      </section>

      <Section title="Open Roles">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card title="Trader (Junior)">
            <ul className="list-disc pl-6">
              <li>Execute and monitor systematic strategies</li>
              <li>Contribute to research and post-trade analysis</li>
              <li>London-based</li>
            </ul>
            <a href="/contact" className="btn-secondary mt-4 inline-flex">Apply</a>
          </Card>
          <Card title="Quant Researcher (Future)">
            <p>Placeholder for upcoming role. Register interest.</p>
            <a href="/contact" className="btn-secondary mt-4 inline-flex">Register interest</a>
          </Card>
          <Card title="Software Engineer (Infra)">
            <p>Build resilient trading infrastructure and tools.</p>
            <a href="/contact" className="btn-secondary mt-4 inline-flex">More info</a>
          </Card>
        </div>
      </Section>

      <Section title="Working at GQC">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card title="Research Culture">Collaborative, empirical, and open to challenge.</Card>
          <Card title="Small Team Impact">High ownership and direct impact.</Card>
          <Card title="Mentorship">Guidance from practitioners.</Card>
        </div>
      </Section>

      <Section title="Diversity">
        <p className="text-slate-700">We welcome applicants from all backgrounds and focus on excellence, integrity, and collaboration.</p>
      </Section>
    </>
  );
}
