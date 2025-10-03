export default function Section({ title, description, children } : { title: string, description?: string, children: React.ReactNode }) {
  return (
    <section className="container-std my-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {description ? <p className="mt-2 max-w-2xl text-slate-600">{description}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
