'use client';
import { useState } from 'react';

export default function Accordion({ title, children } : { title: string, children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-slate-200 p-6">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="text-lg font-semibold">{title}</span>
        <span className={`transition ${open ? "rotate-180" : ""}`}>⌄</span>
      </button>
      {open && <div className="mt-4 text-slate-600">{children}</div>}
    </div>
  );
}
