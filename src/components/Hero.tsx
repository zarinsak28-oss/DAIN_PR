import { ArrowRight, Sparkles } from 'lucide-react';
import { stats } from '../data/stories';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import HeroAnimation from './HeroAnimation';

function StatCard({ stat, start }: { stat: (typeof stats)[number]; start: boolean }) {
  const value = useCountUp(stat.value, 1600, start);
  return (
    <div className="stat-card">
      <div className="text-3xl font-black tracking-inter">
        {stat.prefix}
        {value.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-xs font-semibold text-gray-500 mt-1 tracking-wide uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <header id="home" className="pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_440px] gap-10 items-center">
          {/* Left: copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c60000] animate-pulse" />
              <span className="text-xs font-semibold text-gray-600 tracking-wide">
                Dhaka University · News & Information Trust
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-inter leading-[1.02] mb-5">
              The official PR platform of <span className="gradient-text">DUNITE</span>
            </h1>
            <p className="font-bengali text-lg sm:text-xl text-gray-600 leading-relaxed mb-3">
              ঢাকা বিশ্ববিদ্যালয়ের সেরা অর্জন ও গবেষণার গল্পগুলো এখন এক জায়গায়।
            </p>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-8">
              Discover groundbreaking research, celebrate student achievements, and follow the
              community impact of Bangladesh's leading university — all in one place.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#stories"
                className="gradient-bg gradient-bg-hover text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                Explore Stories <ArrowRight size={16} />
              </a>
              <button className="bg-white border border-gray-200 text-black px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
                <Sparkles size={16} className="text-[#c60000]" /> Submit a Story
              </button>
            </div>
          </div>

          {/* Right: animated DAIN visual */}
          <div className="relative hidden lg:block">
            <HeroAnimation />
            {/* Floating accent */}
            <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-[#c60000]/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#ab0a0f]/10 blur-3xl pointer-events-none" />
          </div>
        </div>

        <div ref={ref} className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} start={inView} />
          ))}
        </div>

        {/* Mobile/tablet: animation below hero content, centered */}
        <div className="mt-12 flex justify-center lg:hidden">
          <HeroAnimation />
        </div>
      </div>
    </header>
  );
}
