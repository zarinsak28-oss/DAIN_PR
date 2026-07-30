import { useMemo, useState } from 'react';
import {
  Search,
  Mail,
  Phone,
  Users,
  GraduationCap,
  ArrowUpRight,
  Linkedin,
  ChevronDown,
  Quote,
  Sparkles,
  Award,
  Building2,
  Crown,
} from 'lucide-react';
import { executives, featuredExecutives, teams } from '../data/executives';

const departments = ['All', ...Array.from(new Set(executives.map((a) => a.department))).sort()];
const batches = ['All', ...Array.from(new Set(executives.map((a) => a.batch))).sort().reverse()];

function Avatar({ exec, size = 'md' }: { exec: (typeof executives)[number]; size?: 'sm' | 'md' | 'lg' }) {
  const dim = size === 'lg' ? 'w-20 h-20 text-2xl' : size === 'sm' ? 'w-9 h-9 text-xs' : 'w-12 h-12 text-sm';
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center text-white font-black flex-shrink-0 ring-2 ring-white shadow-sm`}
      style={{ backgroundColor: exec.avatarColor }}
    >
      {exec.initials}
    </div>
  );
}

function TeamBadge({ team }: { team: string }) {
  const colors: Record<string, string> = {
    Leadership: 'bg-[#c60000]/8 text-[#c60000] border-[#c60000]/15',
    Finance: 'bg-amber-50 text-amber-700 border-amber-100',
    Technology: 'bg-blue-50 text-blue-600 border-blue-100',
    Content: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    Marketing: 'bg-purple-50 text-purple-700 border-purple-100',
    Events: 'bg-rose-50 text-rose-700 border-rose-100',
    Research: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    Design: 'bg-pink-50 text-pink-700 border-pink-100',
    Outreach: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    Operations: 'bg-teal-50 text-teal-700 border-teal-100',
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${colors[team] || 'bg-gray-50 text-gray-600 border-gray-100'}`}>
      {team}
    </span>
  );
}

function FeaturedSpotlight({ exec }: { exec: (typeof featuredExecutives)[number] }) {
  const [activeTab, setActiveTab] = useState<'bio' | 'responsibilities' | 'vision'>('bio');
  const tabs = [
    { id: 'bio' as const, label: 'Biography', icon: <Sparkles size={13} /> },
    { id: 'responsibilities' as const, label: 'Responsibilities', icon: <Award size={13} /> },
    { id: 'vision' as const, label: 'Vision', icon: <Building2 size={13} /> },
  ];
  const content = {
    bio: [exec.bio],
    responsibilities: exec.responsibilities,
    vision: [exec.vision],
  };

  return (
    <article className="relative rounded-3xl overflow-hidden border border-gray-100 card-hover bg-white">
      <div className="grid lg:grid-cols-[280px_1fr]">
        {/* Avatar side */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex flex-col items-center justify-center text-center">
          <div className="absolute top-4 left-4">
            <span className="px-2 py-0.5 rounded-full bg-[#c60000] text-white text-[9px] font-bold uppercase tracking-widest">
              Featured
            </span>
          </div>
          <Avatar exec={exec} size="lg" />
          <h3 className="text-lg font-black tracking-inter mt-4 leading-tight">{exec.name}</h3>
          <p className="font-bengali text-xs text-gray-400 mt-0.5">{exec.bengaliName}</p>
          <div className="mt-3 flex items-center gap-1.5 text-[#c60000]">
            <Crown size={14} />
            <span className="text-sm font-bold">{exec.role}</span>
          </div>
          <p className="font-bengali text-xs text-gray-400 mt-0.5">{exec.bengaliRole}</p>
          <div className="mt-3">
            <TeamBadge team={exec.team} />
          </div>
        </div>

        {/* Content side */}
        <div className="p-6">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-5">
            <span className="flex items-center gap-1.5">
              <GraduationCap size={12} /> {exec.department} · {exec.batch}
            </span>
          </div>

          {/* Quote */}
          <div className="relative bg-gray-50 rounded-2xl p-4 mb-5 border border-gray-50">
            <Quote size={18} className="absolute -top-2 -left-1 text-[#c60000]/30" fill="currentColor" />
            <p className="text-sm italic text-gray-600 leading-relaxed pl-5">
              "{exec.vision}"
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-3 border-b border-gray-100">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold transition-all border-b-2 -mb-px ${
                  activeTab === t.id
                    ? 'border-[#c60000] text-[#c60000]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <ul className="space-y-2">
            {content[activeTab].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-[#c60000] mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-50">
            <a href={`mailto:${exec.email}`} className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#c60000] hover:text-white transition-all">
              <Mail size={13} />
            </a>
            <a href={exec.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#c60000] hover:text-white transition-all">
              <Linkedin size={13} />
            </a>
            <a href={`tel:${exec.phone.replace(/\s/g, '')}`} className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#c60000] hover:text-white transition-all">
              <Phone size={13} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExecutiveTeam() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('All');
  const [batch, setBatch] = useState('All');
  const [team, setTeam] = useState('All');

  const filtered = useMemo(() => {
    return executives.filter((a) => {
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.bengaliName.includes(q) ||
        a.role.toLowerCase().includes(q) ||
        a.department.toLowerCase().includes(q);
      return (
        matchQuery &&
        (dept === 'All' || a.department === dept) &&
        (batch === 'All' || a.batch === batch) &&
        (team === 'All' || a.team === team)
      );
    });
  }, [query, dept, batch, team]);

  const activeFilters = [dept, batch, team].filter((f) => f !== 'All').length;

  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 mb-4">
            <Users size={13} className="text-[#c60000]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              DUNITE Executive Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-inter mb-3">
            The minds behind <span className="gradient-text">DUNITE</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated student leaders driving DUNITE's mission to discover, celebrate, and
            amplify the achievements of the Dhaka University community.
          </p>
        </div>

        {/* Stats preview */}
        <div className="rounded-3xl border border-gray-100 overflow-hidden bg-gradient-to-br from-gray-50 to-white p-8 mb-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div>
              <div className="text-5xl sm:text-6xl font-black tracking-inter gradient-text mb-2">
                {executives.length}+
              </div>
              <p className="text-sm font-bold tracking-inter mb-4">Executive Members Leading DUNITE</p>
              <div className="flex flex-wrap gap-2">
                {teams.slice(0, 7).map((t) => (
                  <span key={t} className="tag-badge bg-white border border-gray-100 text-gray-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
                <Building2 size={12} /> Teams & Departments
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Active Teams', value: `${teams.length}` },
                  { label: 'Departments', value: `${departments.length - 1}` },
                  { label: 'Batches', value: `${batches.length - 1}` },
                  { label: 'Leadership Roles', value: '12+' },
                ].map((g) => (
                  <div key={g.label} className="rounded-2xl bg-white border border-gray-100 p-3">
                    <div className="text-lg font-black tracking-inter">{g.value}</div>
                    <div className="text-xs text-gray-400">{g.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Executive Spotlight */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#c60000]/8 border border-[#c60000]/15">
              <Sparkles size={13} className="text-[#c60000]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c60000]">
                Leadership Spotlight
              </span>
            </div>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <div className="grid gap-5">
            {featuredExecutives.map((a) => (
              <FeaturedSpotlight key={a.id} exec={a} />
            ))}
          </div>
        </div>

        {/* Expand button */}
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="w-full group flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-gray-200 text-gray-500 hover:border-[#c60000] hover:text-[#c60000] transition-all font-bold text-sm"
          >
            <Users size={16} /> Explore Full Executive Team
            <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Expandable directory */}
        {expanded && (
          <div className="mt-6 animate-fade-up">
            {/* Search + filters */}
            <div className="rounded-3xl border border-gray-100 bg-white p-5 mb-6">
              <div className="relative mb-4">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search executives by name, role, or department..."
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#c60000] focus:bg-white transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {[
                  { label: 'Department', value: dept, set: setDept, options: departments },
                  { label: 'Batch', value: batch, set: setBatch, options: batches },
                  { label: 'Team', value: team, set: setTeam, options: ['All', ...teams] },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                      {f.label}
                    </label>
                    <select
                      value={f.value}
                      onChange={(e) => f.set(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#c60000] transition-all"
                    >
                      {f.options.map((o) => (
                        <option key={o} value={o}>
                          {o === 'All' ? `All ${f.label}s` : o}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              {(activeFilters > 0 || query) && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <span className="text-xs text-gray-400">
                    {activeFilters > 0 && `${activeFilters} filter${activeFilters > 1 ? 's' : ''} · `}
                    Showing <span className="font-bold text-black">{filtered.length}</span> of {executives.length}
                  </span>
                  <button
                    onClick={() => { setQuery(''); setDept('All'); setBatch('All'); setTeam('All'); }}
                    className="text-xs font-bold text-[#c60000] hover:underline"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Cards grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-gray-200 rounded-3xl">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 mx-auto mb-4">
                  <Search size={24} />
                </div>
                <h3 className="font-bold tracking-inter mb-1">No executives found</h3>
                <p className="text-sm text-gray-500">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((a, idx) => (
                  <article
                    key={a.id}
                    className="group p-5 rounded-2xl border border-gray-100 card-hover bg-white animate-fade-up"
                    style={{ animationDelay: `${idx * 40}ms` }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <Avatar exec={a} />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold tracking-inter text-sm truncate">{a.name}</h3>
                        <p className="font-bengali text-xs text-gray-400 truncate">{a.bengaliName}</p>
                        <div className="mt-1.5 flex items-center gap-1">
                          <TeamBadge team={a.team} />
                        </div>
                      </div>
                      <span className="tag-badge text-gray-500 bg-gray-50 flex-shrink-0">
                        {a.batch}
                      </span>
                    </div>

                    <div className="flex items-start gap-1.5 mb-2">
                      <Crown size={13} className="text-[#c60000] mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-700">{a.role}</p>
                        <p className="font-bengali text-[10px] text-gray-400">{a.bengaliRole}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mb-3">
                      <GraduationCap size={13} className="text-gray-300 flex-shrink-0" />
                      <p className="text-xs text-gray-500 truncate">{a.department}</p>
                    </div>

                    <div className="space-y-1.5 pt-3 border-t border-gray-50">
                      <a href={`mailto:${a.email}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#c60000] transition-colors">
                        <Mail size={12} className="text-gray-300" />
                        <span className="truncate">{a.email}</span>
                      </a>
                      <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#c60000] transition-colors">
                        <Phone size={12} className="text-gray-300" />
                        <span>{a.phone}</span>
                      </a>
                      <a href={a.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                        <Linkedin size={12} />
                        <span>View Profile</span>
                        <ArrowUpRight size={11} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Collapse */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setExpanded(false)}
                className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#c60000] transition-colors"
              >
                <ChevronDown size={14} className="rotate-180" /> Collapse team
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
