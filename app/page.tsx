import Nav from '../components/Nav';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import IntroVideo from '../components/IntroVideo';
import Journey from '../components/Journey';
import Usages from '../components/Usages';
import DeckPlan from '../components/DeckPlan';
import Facts from '../components/Facts';
import AtmoBand from '../components/AtmoBand';
import Gallery from '../components/Gallery';
import SetupPlanner from '../components/SetupPlanner';
import Faq from '../components/Faq';
import Anfrage from '../components/Anfrage';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <IntroVideo />
        <Journey />
        <Usages />
        <DeckPlan />
        <Facts />
        <AtmoBand />
        <Gallery />
        <SetupPlanner />
        <Faq />
        <Anfrage />
      </main>
      <Footer />
    </>
  );
}
