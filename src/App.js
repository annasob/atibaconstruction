import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavigation } from './components/TopNavigation';
import { TopBanner } from './components/ParalaxBanner';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ParallaxProvider } from 'react-scroll-parallax'
import { Footer } from "./components/Footer";

function App() {
  return (
    <ParallaxProvider >
        <div className="App">
          <TopNavigation />
          <TopBanner />
          <Services />

          <Contact />
          <About />
          <Footer/>
        </div>
    </ParallaxProvider >
  );
}

export default App;
