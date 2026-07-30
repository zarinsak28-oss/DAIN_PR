import { categories } from '../data/stories';
import { ArrowUpRight } from 'lucide-react';

export default function CategoryGrid() {
  return (
    <section id="categories" className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-inter mb-2">
            Explore by Category
          </h2>
          <p className="text-gray-500 text-sm">
            Five pillars that define the DAIN platform — discover stories that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <a
              key={cat.key}
              href="#stories"
              className="group relative p-6 rounded-2xl border border-gray-100 card-hover bg-white overflow-hidden animate-fade-up"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
              />
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${cat.color}0d` }}
                >
                  {cat.emoji}
                </div>
                <span className="tag-badge text-gray-500 bg-gray-50">{cat.storyCount} stories</span>
              </div>
              <h3 className="text-lg font-bold tracking-inter mb-1 group-hover:text-[#c60000] transition-colors">
                {cat.label}
              </h3>
              <p className="font-bengali text-sm text-gray-400 mb-2">{cat.bengaliLabel}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{cat.description}</p>
              <div className="flex items-center gap-1.5 text-sm font-bold text-black group-hover:text-[#c60000] transition-colors">
                Explore
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
