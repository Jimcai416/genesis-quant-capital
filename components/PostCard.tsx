import Link from 'next/link';

export default function PostCard({ title, slug, date, tag, excerpt } : { title: string, slug: string, date: string, tag: string, excerpt: string }) {
  return (
    <article className="rounded-lg border border-slate-200 p-6 hover:shadow-sm transition">
      <h3 className="text-xl font-semibold text-slate-900">
        <Link href={`/research/${slug}`}>{title}</Link>
      </h3>
      <p className="mt-2 line-clamp-3 text-slate-600">{excerpt}</p>
      <div className="mt-3 text-sm text-slate-500">{tag} • {date}</div>
    </article>
  );
}
