export default function Post() {
  return (
    <article className="container-std prose prose-slate max-w-3xl py-16">
      <h1>Factor Investing: An Overfitting Checklist</h1>
      <p className="text-sm text-slate-500">Research • 2025-08-01</p>
      <hr />
      <pre className="whitespace-pre-wrap">A practical checklist to avoid spurious factors.
- Penalize complexity; prefer simple, interpretable signals.
- Use nested cross-validation and out-of-time tests.
- Track turnover, slippage, and capacity assumptions.</pre>
    </article>
  );
}
