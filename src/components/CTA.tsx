import { PlusCircle, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden gradient-bg p-10 sm:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-inter text-white mb-4 leading-tight">
              Have a story worth telling?
            </h2>
            <p className="font-bengali text-lg text-white/80 mb-2">
              আপনার গল্প পৌঁছে দিন সারা দেশে।
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
              Submit your research, achievement, or community initiative — our editorial team
              reviews every submission within 48 hours.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-white text-[#ab0a0f] px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-100 transition-all">
                <PlusCircle size={16} /> Submit a Story
              </button>
              <button className="text-white border border-white/30 px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                <Mail size={16} /> Contact Editorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
