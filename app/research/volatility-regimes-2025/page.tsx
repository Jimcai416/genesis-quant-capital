export default function Post() {
  return (
    <article className="container-std prose prose-slate max-w-3xl py-16">
      <h1>Volatility Regimes in 2025</h1>
      <p className="text-sm text-slate-500">Research • 2025-10-02</p>
      <hr />
      <pre className="whitespace-pre-wrap">We examine volatility regime shifts and their implications for systematic risk scaling.
Key ideas:
- Detect regime changes using simple state indicators (e.g., realized volatility breakpoints).
- Adjust volatility targets and expected holding periods accordingly.
- Beware overfitting; validate on rolling windows and stress periods.</pre>
    </article>
  );
}
