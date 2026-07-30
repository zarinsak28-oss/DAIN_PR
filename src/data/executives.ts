export interface Executive {
  id: number;
  name: string;
  bengaliName: string;
  role: string;
  bengaliRole: string;
  department: string;
  batch: string;
  team: string;
  email: string;
  phone: string;
  linkedin: string;
  avatarColor: string;
  initials: string;
}

export interface FeaturedExecutive extends Executive {
  bio: string;
  responsibilities: string[];
  vision: string;
}

export const executives: Executive[] = [
  {
    id: 1,
    name: 'Hasibul H Asif',
    bengaliName: 'হাসিবুল এইচ আসিফ',
    role: 'President',
    bengaliRole: 'সভাপতি',
    department: 'Computer Science & Engineering',
    batch: '2021',
    team: 'Leadership',
    email: 'asif@dunite.app',
    phone: '+880 1711 100100',
    linkedin: 'https://linkedin.com/in/hasibul-asif',
    avatarColor: '#c60000',
    initials: 'HA',
  },
  {
    id: 2,
    name: 'Saraf Lamyia',
    bengaliName: 'সারাফ লামিয়া',
    role: 'General Secretary',
    bengaliRole: 'সাধারণ সম্পাদক',
    department: 'Computer Science & Engineering',
    batch: '2021',
    team: 'Leadership',
    email: 'lamyia@dunite.app',
    phone: '+880 1819 200200',
    linkedin: 'https://linkedin.com/in/saraf-lamyia',
    avatarColor: '#ab0a0f',
    initials: 'SL',
  },
  {
    id: 3,
    name: 'Tariq Mahmud',
    bengaliName: 'তারিক মাহমুদ',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    department: 'Business Administration',
    batch: '2022',
    team: 'Leadership',
    email: 'tariq@dunite.app',
    phone: '+880 1521 300300',
    linkedin: 'https://linkedin.com/in/tariq-mahmud',
    avatarColor: '#6d0a0d',
    initials: 'TM',
  },
  {
    id: 4,
    name: 'Nadia Sultana',
    bengaliName: 'নাদিয়া সুলতানা',
    role: 'Treasurer',
    bengaliRole: 'কোষাধ্যক্ষ',
    department: 'Economics',
    batch: '2022',
    team: 'Finance',
    email: 'nadia@dunite.app',
    phone: '+880 1911 400400',
    linkedin: 'https://linkedin.com/in/nadia-sultana',
    avatarColor: '#8a0009',
    initials: 'NS',
  },
  {
    id: 5,
    name: 'Arif Hossain',
    bengaliName: 'আরিফ হোসেন',
    role: 'Director of Technology',
    bengaliRole: 'প্রযুক্তি পরিচালক',
    department: 'Computer Science & Engineering',
    batch: '2022',
    team: 'Technology',
    email: 'arif@dunite.app',
    phone: '+880 1822 500500',
    linkedin: 'https://linkedin.com/in/arif-hossain',
    avatarColor: '#b01010',
    initials: 'AH',
  },
  {
    id: 6,
    name: 'Farhana Islam',
    bengaliName: 'ফারহানা ইসলাম',
    role: 'Director of Content',
    bengaliRole: 'কন্টেন্ট পরিচালক',
    department: 'Mass Communication & Journalism',
    batch: '2023',
    team: 'Content',
    email: 'farhana@dunite.app',
    phone: '+880 1716 600600',
    linkedin: 'https://linkedin.com/in/farhana-islam',
    avatarColor: '#c60000',
    initials: 'FI',
  },
  {
    id: 7,
    name: 'Rakibul Hasan',
    bengaliName: 'রাকিবুল হাসান',
    role: 'Director of Marketing',
    bengaliRole: 'মার্কেটিং পরিচালক',
    department: 'Marketing',
    batch: '2022',
    team: 'Marketing',
    email: 'rakibul@dunite.app',
    phone: '+880 1822 700700',
    linkedin: 'https://linkedin.com/in/rakibul-hasan',
    avatarColor: '#ab0a0f',
    initials: 'RH',
  },
  {
    id: 8,
    name: 'Sumaiya Akter',
    bengaliName: 'সুমাইয়া আক্তার',
    role: 'Director of Events',
    bengaliRole: 'ইভেন্ট পরিচালক',
    department: 'Public Administration',
    batch: '2023',
    team: 'Events',
    email: 'sumaiya@dunite.app',
    phone: '+880 1933 800800',
    linkedin: 'https://linkedin.com/in/sumaiya-akter',
    avatarColor: '#6d0a0d',
    initials: 'SA',
  },
  {
    id: 9,
    name: 'Sabbir Ahmed',
    bengaliName: 'সাব্বির আহমেদ',
    role: 'Director of Research',
    bengaliRole: 'গবেষণা পরিচালক',
    department: 'Physics',
    batch: '2021',
    team: 'Research',
    email: 'sabbir@dunite.app',
    phone: '+880 1712 900900',
    linkedin: 'https://linkedin.com/in/sabbir-ahmed',
    avatarColor: '#8a0009',
    initials: 'SA',
  },
  {
    id: 10,
    name: 'Tasnim Rahman',
    bengaliName: 'তাসনিম রহমান',
    role: 'Director of Design',
    bengaliRole: 'ডিজাইন পরিচালক',
    department: 'Architecture',
    batch: '2023',
    team: 'Design',
    email: 'tasnim@dunite.app',
    phone: '+880 1717 110110',
    linkedin: 'https://linkedin.com/in/tasnim-rahman',
    avatarColor: '#b01010',
    initials: 'TR',
  },
  {
    id: 11,
    name: 'Imran Kabir',
    bengaliName: 'ইমরান কবির',
    role: 'Director of Outreach',
    bengaliRole: 'আউটরিচ পরিচালক',
    department: 'International Relations',
    batch: '2022',
    team: 'Outreach',
    email: 'imran@dunite.app',
    phone: '+880 1818 220220',
    linkedin: 'https://linkedin.com/in/imran-kabir',
    avatarColor: '#c60000',
    initials: 'IK',
  },
  {
    id: 12,
    name: 'Maliha Chowdhury',
    bengaliName: 'মালিহা চৌধুরী',
    role: 'Director of Operations',
    bengaliRole: 'অপারেশন্স পরিচালক',
    department: 'Management',
    batch: '2022',
    team: 'Operations',
    email: 'maliha@dunite.app',
    phone: '+880 1911 330330',
    linkedin: 'https://linkedin.com/in/maliha-chowdhury',
    avatarColor: '#ab0a0f',
    initials: 'MC',
  },
];

export const featuredExecutives: FeaturedExecutive[] = [
  {
    ...executives[0],
    bio: 'Founder of Correct Inc. — the parent company of Edumitro, Testmitro, and Vocabmitro. Awarded seed funding by the Honourable Prime Minister of Bangladesh. Leading DUNITE with a vision to build Bangladesh\'s most trusted university storytelling platform.',
    responsibilities: [
      'Strategic vision and overall direction of DUNITE',
      'Leading partnerships with DU administration and external organizations',
      'Overseeing all executive teams and initiatives',
      'Representing DUNITE at national and international forums',
    ],
    vision:
      'DUNITE will become the bridge between Dhaka University\'s legacy and its future — where every achievement is celebrated, every story is archived, and every student feels proud to belong.',
  },
  {
    ...executives[1],
    bio: 'Co-founder of Correct Inc. and General Secretary of DUNITE. A passionate technologist and organizer driving the operational backbone of DUNITE — from member coordination to executing flagship events across campus.',
    responsibilities: [
      'Managing day-to-day operations and member coordination',
      'Organizing executive meetings and maintaining records',
      'Coordinating cross-team initiatives and events',
      'Driving partnerships with student organizations and alumni',
    ],
    vision:
      'We are building more than a platform — we are building a community where every member feels ownership. Excellence is not a title; it is a habit we practice together.',
  },
];

export const teams = [
  'Leadership',
  'Finance',
  'Technology',
  'Content',
  'Marketing',
  'Events',
  'Research',
  'Design',
  'Outreach',
  'Operations',
];
