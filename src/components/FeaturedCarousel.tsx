import { useRef } from 'react';
import { Star, Calendar, BookOpen, ArrowUpRight, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { stories } from '../data/stories';
import { categories } from '../data/stories';
import { Story } from '../types';

function FeaturedCard({ story }: { story: Story }) {
  const cat = categories.find((c) => c.key === story.category);
  return (
    <div className="relative rounded-3xl overflow-hidden border border-gray-100 group cursor-pointer card-hover carousel-card flex-shrink-0 w-full">
      <div className="grid lg:grid-cols-2">
        <div className="p-8 sm:p-12 flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-2 mb-4">
            <Star size={14} className="text-[#c60000] fill-[#c60000]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Featured</span>
          </div>
          <span className={`tag-badge w-fit mb-4 ${cat?.bg} ${cat?.accent}`}>{cat?.label}</span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-inter leading-tight mb-3">
            {story.title}
          </h2>
          {story.bengaliTitle && (
            <p className="font-bengali text-base text-gray-500 mb-4">{story.bengaliTitle}</p>
          )}
          <p className="text-gray-600 leading-relaxed mb-6 max-w-md">{story.summary}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {story.date}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen size={13} /> {story.readTime} read
            </span>
            <span className="flex items-center gap-1.5">
              <Heart size={13} /> {story.reactions.likes.toLocaleString()}
            </span>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-black hover:text-[#c60000] transition-colors w-fit">
            Read full story <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="relative min-h-[260px] lg:min-h-[420px] overflow-hidden order-1 lg:order-2">
          <img
            src={story.cover}
            alt={story.title}
            className="w-full h-full object-cover story-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = stories.filter((s) => s.featured);
  const trending = stories.filter((s) => s.trending && !s.featured).slice(0, 3);
  const carouselItems = [...featured, ...trending];

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-inter mb-2">Featured Stories</h2>
            <p className="text-gray-500 text-sm">Editor's picks — the stories that define DU this week.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="carousel-track flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        >
          {carouselItems.map((story) => (
            <FeaturedCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
