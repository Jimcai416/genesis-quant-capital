'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container-std py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 max-w-2xl text-slate-600">General and partnership inquiries.</p>

      {!submitted ? (
        <form onSubmit={onSubmit} className="mt-8 space-y-4 max-w-xl">
          <input type="text" name="name" placeholder="Name" required className="w-full rounded-md border border-slate-300 px-3 py-2" />
          <input type="email" name="email" placeholder="Email" required className="w-full rounded-md border border-slate-300 px-3 py-2" />
          <input type="text" name="company" placeholder="Company (optional)" className="w-full rounded-md border border-slate-300 px-3 py-2" />
          <textarea name="message" placeholder="Message" required className="w-full rounded-md border border-slate-300 px-3 py-2 h-32" />
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" required /> I agree to the privacy notice.
          </label>
          <button className="btn-primary" type="submit">Send</button>
        </form>
      ) : (
        <div className="mt-8 rounded-lg border border-slate-200 p-6 text-slate-700">
          Thanks — we&apos;ll be in touch. (Form is demo-only in this starter.)
        </div>
      )}

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold">Details</h2>
          <p className="mt-2 text-slate-700">
            3 Dingle Dell<br/>
            2 Thruxton Road<br/>
            Crowthorne, RG45 6TH<br/>
            United Kingdom
          </p>
          <p className="mt-2 text-slate-700">
            info@genesisquantcapital.co.uk<br/>
            careers@genesisquantcapital.co.uk
          </p>
          <p className="mt-2 text-sm text-slate-500">Company No. 16749769</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold">Compliance Reminder</h2>
          <p className="mt-2 text-slate-700">
            Genesis Quant Capital Ltd does not provide investment services to the public. Information provided is for educational and informational purposes only.
          </p>
        </div>
      </div>
    </section>
  );
}
