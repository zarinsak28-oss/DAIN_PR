import { useMemo, useState } from 'react';
import { Calendar, BookOpen, ArrowUpRight, Search, Heart, Bookmark, ChevronRight } from 'lucide-react';
import { stories, categories, departments, popularTags } from '../data/stories';
import { CategoryFilter } from '../types';

const catMap = Object.fromEntries(categories.map((c) => [c.key, c]));

export default function StoryFeed() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [activeDept, setActiveDept] = useState('All Departments');
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    return stories.filter((s) => {
      const matchCat = activeCategory === 'All' || s.category === activeCategory;
      const matchDept = activeDept === 'All Departments' || s.department === activeDept;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.author.toLowerCase().includes(q);
      const matchTag = !activeTag || s.tag === activeTag;
      return matchCat && matchDept && matchQuery && matchTag;
    });
  }, [activeCategory, activeDept, query, activeTag]);

  const shown = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const isEmpty = shown.length === 0;

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };
  const toggleBookmark = (id: number) => {
    setBookmarked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const resetFilters = () => {
    setActiveCategory('All');
    setActiveDept('All Departments');
    setQuery('');
    setActiveTag(null);
    setVisibleCount(6);
  };

  return (
    <section id="stories" className="px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-inter mb-2">Latest Stories</h2>
            <p className="text-gray-500 text-sm">Filter, search, and discover what's happening at DU.</p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleCount(6);
              }}
              placeholder="Search stories..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#c60000] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Category chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-3">
          {(['All', ...categories.map((c) => c.key)] as CategoryFilter[]).map((cat) => {
            const label = cat === 'All' ? 'All' : catMap[cat]?.label;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold border whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'gradient-bg text-white border-transparent shadow-md'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {cat !== 'All' && catMap[cat]?.emoji} {label}
              </button>
            );
          })}
        </div>

        {/* Department + tag filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <select
            value={activeDept}
            onChange={(e) => {
              setActiveDept(e.target.value);
              setVisibleCount(6);
            }}
            className="px-4 py-2 rounded-full border border-gray-200 bg-white text-xs font-bold text-gray-600 focus:outline-none focus:border-[#c60000] transition-all"
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {popularTags.slice(0, 6).map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setActiveTag(activeTag === tag ? null : tag);
                  setVisibleCount(6);
                }}
                className={`px-3 py-2 rounded-full text-xs font-semibold border whitespace-nowrap transition-all ${
                  activeTag === tag
                    ? 'bg-black text-white border-transparent'
                    : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {isEmpty ? (
          <div className="text-center py-20 border border-dashed border-gray-200 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 mx-auto mb-4">
              <Search size={24} />
            </div>
            <h3 className="font-bold tracking-inter mb-1">No stories found</h3>
            <p className="text-sm text-gray-500 mb-4">Try a different filter or search term.</p>
            <button
              onClick={resetFilters}
              className="text-sm font-bold text-[#c60000] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.map((s, idx) => {
                const cat = catMap[s.category];
                return (
                  <article
                    key={s.id}
                    className="group border border-gray-100 rounded-2xl overflow-hidden card-hover cursor-pointer bg-white animate-fade-up"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                      <img
                        src={s.cover}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover story-img"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`tag-badge ${cat?.bg} ${cat?.accent} backdrop-blur`}>
                          {cat?.emoji} {cat?.label}
                        </span>
                      </div>
                      {s.trending && (
                        <div className="absolute top-3 right-3">
                          <span className="tag-badge bg-black/80 text-white backdrop-blur">🔥 Trending</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold tracking-inter mb-1.5 leading-snug group-hover:text-[#c60000] transition-colors line-clamp-2">
                        {s.title}
                      </h3>
                      {s.bengaliTitle && (
                        <p className="font-bengali text-xs text-gray-400 mb-2 line-clamp-1">{s.bengaliTitle}</p>
                      )}
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{s.summary}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center text-white text-[10px] font-bold">
                          {s.author.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-gray-700">{s.author}</span>
                          <span className="text-[10px] text-gray-400">{s.department}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                        <div className="flex items-center gap-3 text-[11px] text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} /> {s.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen size={12} /> {s.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLike(s.id);
                            }}
                            className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#c60000] transition-colors"
                          >
                            <Heart
                              size={14}
                              className={liked.has(s.id) ? 'fill-[#c60000] text-[#c60000]' : ''}
                            />
                            {(s.reactions.likes + (liked.has(s.id) ? 1 : 0)).toLocaleString()}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(s.id);
                            }}
                            className="text-gray-400 hover:text-black transition-colors"
                          >
                            <Bookmark
                              size={14}
                              className={bookmarked.has(s.id) ? 'fill-black text-black' : ''}
                            />
                          </button>
                          <ArrowUpRight
                            size={16}
                            className="text-gray-300 group-hover:text-black group-hover:rotate-45 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount((c) => c + 3)}
                  className="bg-white border border-gray-200 text-black px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-all"
                >
                  Load more stories <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
