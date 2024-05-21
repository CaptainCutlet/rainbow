import './App.css';

import NavBar from './Components/NavBar';
import HomeContent from './Components/HomeSection/HomeContent';
import HomeMedia from './Components/HomeSection/HomeMedia';
import AboutLogos from './Components/AboutSection/AboutLogos';
import AboutText from './Components/AboutSection/AboutText';
import HowToBuy from './Components/HowToBuy/HowToBuy';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id='sectionA' className='section'>
        <HomeContent />
        <HomeMedia />
      </div>
      <div id='sectionB' className='section'>
        <AboutLogos />
        <AboutText />
      </div>
      <div id='sectionD' className='section'>
        <HowToBuy />
      </div>
      <div class="footer">
        <p>© 2024 RainbowCapitalism. All rights reserved.</p>
      </div>

    </div>
  );
}

export default App;
