import { useState } from 'react';
import { Award } from 'lucide-react';

const CHIEF_ADVISER_IMG = '/assets/images/Md._Rashedur_Rahman.png';
const TEAM_IMG = '/assets/images/Leadership_Team_of_DUNITE.png';

function LeadershipCard({
  src,
  alt,
  badge,
  title,
  subtitle,
  description,
}: {
  src: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative rounded-3xl overflow-hidden border border-gray-100 card-hover">
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}

      {error && (
        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-50 to-white px-6 text-center">
          <img src="/assets/images/4.png" alt="DAIN logo" className="h-16 w-16 rounded-2xl object-contain opacity-80" />
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Image will be available soon</p>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">{badge}</p>
        <h3 className="text-white text-xl font-black tracking-inter">{title}</h3>
        <p className="text-white/90 text-sm font-bold mt-1">{subtitle}</p>
        <p className="text-white/60 text-xs mt-0.5 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="about" className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
            <Award size={13} className="text-[#c60000]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Leadership
            </span>
          </div>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <LeadershipCard
            src={CHIEF_ADVISER_IMG}
            alt="Md. Rashedur Rahman — Chief Adviser & Moderator, DUNITE"
            badge="Our Honourable"
            title="Chief Adviser & Moderator"
            subtitle="Md. Rashedur Rahman"
            description="Chairman, Dept. of Organization Strategy & Leadership, University of Dhaka · Director, Innovation Creativity and Entrepreneurship Centre (ICE)"
          />
          <LeadershipCard
            src={TEAM_IMG}
            alt="Leadership Team of DUNITE"
            badge="Fostering Entrepreneurship"
            title="Leadership of DUNITE"
            subtitle=""
            description="The executive team driving DUNITE's mission across innovation, media, and community building at Dhaka University."
          />
        </div>
      </div>
    </section>
  );
}
