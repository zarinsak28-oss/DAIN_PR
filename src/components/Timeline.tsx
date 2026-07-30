import { useState } from 'react';
import { timeline } from '../data/stories';
import { useInView } from '../hooks/useInView';
import { Sparkles } from 'lucide-react';

export default function Timeline() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="timeline" className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ab0a0f]/5 mb-3">
              <Sparkles size={13} className="text-[#c60000]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#ab0a0f]">
                Signature Feature
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-inter mb-2">
              The DUNITE Journey
            </h2>
            <p className="text-gray-500 text-sm max-w-md">
              An interactive timeline tracing the milestones that shaped DAIN and DUNITE —
              from founding to 48K monthly readers.
            </p>
          </div>
        </div>

        <div ref={ref} className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gray-100">
            <div
              className="h-px gradient-bg transition-all duration-1000 ease-out"
              style={{ width: inView ? '100%' : '0%' }}
            />
          </div>

          <div className="hidden md:grid grid-cols-6 gap-3">
            {timeline.map((item, idx) => (
              <button
                key={item.year}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                className="text-left group"
              >
                <div className="flex flex-col items-center mb-6">
                  <div
                    className={`w-5 h-5 rounded-full border-2 transition-all duration-500 ${
                      active === idx
                        ? 'gradient-bg border-transparent scale-150 shadow-lg'
                        : item.highlight
                        ? 'bg-[#c60000] border-[#c60000]'
                        : 'bg-white border-gray-300'
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  />
                </div>
                <div
                  className={`transition-all duration-300 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className={`text-lg font-black tracking-inter mb-1 ${active === idx ? 'gradient-text' : 'text-black'}`}>
                    {item.year}
                  </div>
                  <div className={`text-xs font-bold mb-1.5 ${active === idx ? 'text-[#c60000]' : 'text-gray-700'}`}>
                    {item.title}
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="md:hidden relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-100" />
            {timeline.map((item, idx) => (
              <div
                key={item.year}
                className={`relative pb-8 transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`absolute -left-[18px] top-1.5 w-3 h-3 rounded-full border-2 ${
                    item.highlight ? 'gradient-bg border-transparent' : 'bg-white border-gray-300'
                  }`}
                />
                <div className="text-lg font-black tracking-inter mb-0.5">{item.year}</div>
                <div className="text-sm font-bold mb-1">{item.title}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
