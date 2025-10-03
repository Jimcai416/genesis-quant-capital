export default function Post() {
  return (
    <article className="container-std prose prose-slate max-w-3xl py-16">
      <h1>Building a Scalable Trading System</h1>
      <p className="text-sm text-slate-500">Engineering • 2025-09-15</p>
      <hr />
      <pre className="whitespace-pre-wrap">Design choices for reliability, latency, and observability in production.
- Separate research code from live trading systems.
- Add robust monitoring, alerting, and graceful degradation.
- Prefer idempotent handlers and replayable event streams.</pre>
    </article>
  );
}
