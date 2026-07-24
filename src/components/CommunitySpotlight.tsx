import { Heart, Users, Leaf, GraduationCap } from 'lucide-react';
import { stories } from '../data/stories';

const spotlightStories = stories
  .filter((s) => s.category === 'community')
  .slice(0, 2);

const impactMetrics = [
  { icon: <Users size={20} />, value: '10,000+', label: 'Active Volunteers' },
  { icon: <Heart size={20} />, value: '23', label: 'Districts Served' },
  { icon: <Leaf size={20} />, value: '5,000+', label: 'Patients Treated' },
  { icon: <GraduationCap size={20} />, value: '1,500+', label: 'Students Trained' },
];

export default function CommunitySpotlight() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-inter mb-2">
            Community Impact Spotlight
          </h2>
          <p className="text-gray-500 text-sm">
            How DU students and faculty are creating real change beyond campus walls.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {impactMetrics.map((m) => (
            <div key={m.label} className="stat-card">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#c60000] mb-3">
                {m.icon}
              </div>
              <div className="text-2xl font-black tracking-inter">{m.value}</div>
              <div className="text-xs font-semibold text-gray-500 mt-1 tracking-wide uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spotlightStories.map((s) => (
            <div
              key={s.id}
              className="group rounded-2xl border border-gray-100 overflow-hidden card-hover cursor-pointer bg-white"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-50">
                <img
                  src={s.cover}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover story-img"
                />
                <div className="absolute top-3 left-3">
                  <span className="tag-badge bg-white/90 text-[#6d0a0d] backdrop-blur">🤝 Community</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold tracking-inter mb-1.5 group-hover:text-[#c60000] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.summary}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{s.date}</span>
                  <span>·</span>
                  <span>{s.readTime} read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
