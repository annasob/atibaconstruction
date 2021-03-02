import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavigation } from './components/TopNavigation';
import { TopBanner } from './components/ParalaxBanner';
import { Services } from './components/Services';
import { ParallaxProvider } from 'react-scroll-parallax'
import {Footer} from "./components/Footer";

function App() {
  return (
    <ParallaxProvider >
        <div className="App">
          <TopNavigation />
          <TopBanner />
          <Services />
          <Footer/>
        </div>
    </ParallaxProvider >
  );
}

export default App;
