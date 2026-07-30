import { MapPin, Phone, Mail } from 'lucide-react';

const footerCols = [
  { title: 'Platform', links: ['Stories', 'Research', 'Achievements', 'Community', 'Good News', 'Timeline'] },
  { title: 'Resources', links: ['Editorial Guide', 'Submission Policy', 'Archive', 'Press Kit'] },
  { title: 'Connect', links: ['Contact', 'Newsletter', 'Social Media', 'Partnerships'] },
];

export default function Footer() {
  return (
    <footer className="px-6 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-black text-sm">
                D
              </div>
              <span className="text-xl font-black tracking-inter gradient-text">DAIN</span>
            </div>
            <p className="font-bengali text-sm text-gray-500 leading-relaxed mb-3">
              ঢাকা বিশ্ববিদ্যালয়ের সরকারি পিআর প্ল্যাটফর্ম।
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Dhaka University News & Information Trust Enterprise.
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-[#c60000] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-gray-50">
          <div className="flex flex-wrap items-center gap-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> Dhaka, Bangladesh
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} /> +880 2 9661900
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} /> dain@du.ac.bd
            </span>
          </div>
          <p className="text-xs text-gray-400">
            © 2026 DAIN · Dhaka University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
