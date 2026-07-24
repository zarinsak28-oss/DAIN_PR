import { Star, Calendar, BookOpen, ArrowUpRight } from 'lucide-react';
import { Story } from '../types';

const categoryColor = (cat: string) => {
  switch (cat) {
    case 'Research': return 'text-[#ab0a0f] bg-[#ab0a0f]/5';
    case 'Achievements': return 'text-[#c60000] bg-[#c60000]/5';
    case 'Community': return 'text-[#6d0a0d] bg-[#6d0a0d]/5';
    case 'Events': return 'text-[#8a0009] bg-[#8a0009]/5';
    default: return 'text-black bg-black/5';
  }
};

export default function FeaturedStory({ story }: { story: Story }) {
  return (
    <section className="px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-5">
          <Star size={16} className="text-[#c60000] fill-[#c60000]" />
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Featured Story
          </span>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-gray-100 group cursor-pointer card-hover">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className={`tag-badge w-fit mb-4 ${categoryColor(story.category)}`}>
                {story.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-inter leading-tight mb-3">
                {story.title}
              </h2>
              {story.bengaliTitle && (
                <p className="font-bengali text-lg text-gray-500 mb-4">{story.bengaliTitle}</p>
              )}
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">{story.summary}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {story.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen size={13} /> {story.readTime} read
                </span>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-black hover:text-[#c60000] transition-colors w-fit">
                Read full story <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="relative min-h-[280px] lg:min-h-[420px] gradient-bg flex items-center justify-center p-12">
              <div className="text-white text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mx-auto mb-5">
                  <BookOpen size={28} />
                </div>
                <p className="font-bengali text-2xl leading-relaxed opacity-90">
                  "গবেষণা হোক আলোর পথে"
                </p>
                <p className="text-sm opacity-70 mt-2 tracking-wide">
                  Let research light the path
                </p>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
