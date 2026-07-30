import { useEffect, useState } from 'react';
import { Search, PlusCircle, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Stories', href: '#stories' },
  { label: 'Categories', href: '#categories' },
  { label: 'Researchers', href: '#researchers' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Executive Members', href: '#executives' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-black text-sm">
              D
            </div>
            <span className="text-xl font-black tracking-inter gradient-text">DAIN</span>
          </a>
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link text-sm font-semibold text-gray-600 hover:text-black transition-colors ${
                  i === 0 ? 'active text-black' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Search"
          >
            <Search size={17} />
          </button>
          <button className="hidden sm:flex gradient-bg gradient-bg-hover text-white px-5 py-2.5 rounded-full text-sm font-bold items-center gap-2 transition-all hover:scale-[1.02]">
            <PlusCircle size={16} /> Publish
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"
            aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4">
          <div className="max-w-3xl mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              autoFocus
              type="text"
              placeholder="Search stories, research, achievements..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#c60000] focus:bg-white transition-all"
            />
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-sm font-semibold text-gray-700 hover:text-[#c60000]"
            >
              {item.label}
            </a>
          ))}
          <button className="mt-3 gradient-bg text-white px-5 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2">
            <PlusCircle size={16} /> Publish Story
          </button>
        </div>
      )}
    </nav>
  );
}
