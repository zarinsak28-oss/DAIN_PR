import { ArrowUpRight, Award, Globe, Building2, Landmark, ExternalLink } from 'lucide-react';

const backers = [
  { name: 'World Bank', icon: <Globe size={14} /> },
  { name: 'ICT Division, BD', icon: <Landmark size={14} /> },
  { name: 'IDEA Project', icon: <Building2 size={14} /> },
  { name: 'Embassy of Netherlands', icon: <Globe size={14} /> },
];

const products = ['Edumitro', 'Testmitro', 'Vocabmitro'];

const highlights = [
  { value: '6', label: 'Startups nationwide', sub: 'selected by PM Office' },
  { value: '#1', label: 'Only DU startup', sub: 'among all recipients' },
  { value: 'BDT 1L', label: 'Seed funding', sub: 'from PM of Bangladesh' },
  { value: '4+', label: 'Global backers', sub: 'incl. World Bank' },
];

export default function CorrectSpotlight() {
  return (
    <section className="px-6 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#c60000]/8 border border-[#c60000]/15">
            <Award size={13} className="text-[#c60000]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#c60000]">
              Excellence Spotlight
            </span>
          </div>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        {/* Main card — dark editorial */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] min-h-[560px] grid lg:grid-cols-[1fr_440px]">
          {/* Left: content */}
          <div className="relative z-10 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="tag-badge bg-[#c60000] text-white">🏛️ PM Recognition</span>
                <span className="tag-badge bg-white/10 text-white/80">Only DU Startup · 1 of 6 Nationwide</span>
              </div>

              {/* Bengali headline */}
              <p className="font-bengali text-sm text-white/50 mb-3">
                তারুণ্য, স্টার্টআপ ও সম্ভাবনার বাংলাদেশ — সিনেট ভবন, ঢাকা বিশ্ববিদ্যালয়
              </p>

              {/* Main headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-inter text-white leading-tight mb-4">
                DU Startup{' '}
                <span className="text-[#c60000]">'Correct'</span>{' '}
                Receives Government Seed Funding from the Honourable Prime Minister of Bangladesh
              </h2>

              {/* Sub-copy */}
              <p className="text-white/60 text-sm leading-relaxed max-w-xl mb-6">
                Founded by{' '}
                <span className="text-white font-semibold">Hasibul H Asif</span>{' '}
                (President, DUNITE) &{' '}
                <span className="text-white font-semibold">Saraf Lamyia</span>{' '}
                (General Secretary, DUNITE) — Correct Inc. is the parent company of Edumitro,
                Testmitro, and Vocabmitro, building technology that solves real-world educational
                challenges in Bangladesh.
              </p>

              {/* Products */}
              <div className="flex flex-wrap gap-2 mb-8">
                {products.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 rounded-full border border-white/10 text-white/70 text-xs font-semibold bg-white/5"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {/* Backers */}
              <div className="mb-6">
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">
                  Backed by
                </p>
                <div className="flex flex-wrap gap-2">
                  {backers.map((b) => (
                    <div
                      key={b.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/10"
                    >
                      <span className="text-white/50">{b.icon}</span>
                      <span className="text-white/70 text-xs font-semibold">{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Read more CTA */}
              <a
                href="#stories"
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-all hover:scale-[1.02]"
              >
                Read Full Story <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden">
            <img
              src="/assets/images/745174837_122147332539124583_3144870109482634671_n copy.jpg"
              alt="Saraf Lamyia receiving seed funding cheque from Honourable Prime Minister"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient fade to dark on left (desktop) */}
            <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-[#0a0a0a] lg:via-transparent lg:to-transparent" />
            {/* Dark overlay on mobile */}
            <div className="absolute inset-0 lg:hidden bg-black/30" />
            {/* Caption pill */}
            <div className="absolute bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:bottom-6 max-w-xs">
              <div className="bg-black/70 backdrop-blur-md rounded-xl p-3 border border-white/10">
                <p className="text-white/90 text-xs font-semibold leading-relaxed">
                  Saraf Lamyia receiving the seed funding cheque from the Honourable Prime Minister
                  Mr. Tareque Rahman · Senate Building, University of Dhaka
                </p>
                <div className="flex items-center gap-1 mt-1.5">
                  <ExternalLink size={11} className="text-white/40" />
                  <span className="text-white/40 text-[10px]">www.dunite.app</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="stat-card group hover:border-[#c60000]/20 transition-colors"
            >
              <div className="text-3xl font-black tracking-inter gradient-text mb-1">
                {h.value}
              </div>
              <div className="text-sm font-bold text-black">{h.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{h.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
