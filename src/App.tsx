import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CorrectSpotlight from './components/CorrectSpotlight';
import FeaturedCarousel from './components/FeaturedCarousel';
import CategoryGrid from './components/CategoryGrid';
import StoryFeed from './components/StoryFeed';
import CommunitySpotlight from './components/CommunitySpotlight';
import MissionQuote from './components/MissionQuote';
import Timeline from './components/Timeline';
import Researchers from './components/Researchers';
import Leadership from './components/Leadership';
import AppShowcase from './components/AppShowcase';
import ExecutiveTeam from './components/ExecutiveTeam';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans tracking-inter">
      <Navbar />
      <main>
        <Hero />
        <CorrectSpotlight />
        <FeaturedCarousel />
        <CategoryGrid />
        <StoryFeed />
        <CommunitySpotlight />
        <MissionQuote />
        <Timeline />
        <Researchers />
        <Leadership />
        <AppShowcase />
        <div id="executives">
          <ExecutiveTeam />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
