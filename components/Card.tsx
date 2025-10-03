export default function Card({ title, children } : { title: string, children: React.ReactNode }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2 text-slate-600">{children}</div>
    </div>
  );
}
