import './App.css';

import NavBar from './Components/NavBar';
import Hero from './Components/Hero/Hero';
import HomeContent from './Components/HomeSection/HomeContent';
import HomeMedia from './Components/HomeSection/HomeMedia';
import AboutLogos from './Components/AboutSection/AboutLogos';
import AboutText from './Components/AboutSection/AboutText';
import HowToBuy from './Components/HowToBuy/HowToBuy';
import ImageGrid from './Components/ImageGrid';
import Ticker from './TickerSection/Ticker';

function App() {
  return (
    <div className="App">
      <Ticker />
      <NavBar />
      <div id='section1' className=''>
      <Hero />
      </div>
      <div id='sectionA' className='section'>
        <HomeContent />
        <HomeMedia />
      </div>
      <ImageGrid />
      <div id='sectionB' className='section'>
        <AboutLogos />
        <AboutText />
      </div>
      <div id='sectionD' className='section'>
        <HowToBuy />
      </div>
      <div class="footer rainbow-background-animated">
        <p>© 2024 RainbowCapitalism. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
