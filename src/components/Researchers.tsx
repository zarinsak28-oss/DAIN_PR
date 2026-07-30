import { researchers } from '../data/stories';
import { BookOpen, ArrowUpRight } from 'lucide-react';

export default function Researchers() {
  return (
    <section id="researchers" className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-inter mb-2">
              Featured Researchers
            </h2>
            <p className="text-gray-500 text-sm">
              The minds behind DU's most cited and celebrated work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {researchers.map((r, idx) => (
            <div
              key={r.id}
              className="group p-6 rounded-2xl border border-gray-100 card-hover bg-white animate-fade-up"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold tracking-inter text-sm truncate">{r.name}</h3>
                  <p className="text-xs text-gray-500 truncate">{r.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="tag-badge text-gray-500 bg-gray-50">{r.department}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Focus: <span className="font-semibold text-gray-700">{r.focus}</span>
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                  <BookOpen size={13} className="text-[#c60000]" /> {r.publications} publications
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-gray-300 group-hover:text-black group-hover:rotate-45 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
