import { ArrowUpRight, Apple, Play } from 'lucide-react';

const features = [
  { label: 'Alumni Directory', desc: 'Connect with 50K+ DU graduates' },
  { label: 'Business Listings', desc: 'Find student & alumni businesses' },
  { label: 'Job Board', desc: 'Opportunities posted by alumni' },
  { label: 'Events Hub', desc: 'Campus events & networking' },
];

export default function AppShowcase() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-gray-100">
          <img
            src="/assets/images/Mobile_App_Cover_(9).png"
            alt="DUNITE App — Alumni, Business & Opportunity Directory"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.label} className="stat-card group hover:border-[#c60000]/20">
              <div className="text-sm font-bold tracking-inter mb-1">{f.label}</div>
              <div className="text-xs text-gray-400">{f.desc}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-6">
          <a
            href="https://dunite.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-900 transition-all"
          >
            <Play size={15} className="fill-white" /> Google Play
          </a>
          <a
            href="https://dunite.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-gray-200 text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-all"
          >
            <Apple size={15} /> App Store
          </a>
          <a
            href="https://dunite.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#c60000] transition-colors ml-2"
          >
            www.dunite.app <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
