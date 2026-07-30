import { Quote } from 'lucide-react';

export default function MissionQuote() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <Quote size={32} className="text-[#c60000] mx-auto mb-6" />
        <p className="font-bengali text-2xl sm:text-3xl leading-relaxed text-gray-800 mb-4">
          "শিক্ষা ও গবেষণার আলো যেন ছড়ায় প্রতিটি ঘরে।"
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          May the light of education and research reach every home — that is the spirit DAIN
          carries forward for Dhaka University.
        </p>
      </div>
    </section>
  );
}
