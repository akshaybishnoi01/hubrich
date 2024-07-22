
import './App.css';
import Clients from './components/Clients';
import HeroSection from './components/HeroSection';
import Lawyer from './components/Lawyer';
import Separation from './components/Separation';
import TargetGroup from './components/TargetGroup';
import WillGet from './components/WillGet';
import YourEx from './components/YourEx';
import YourFault from './components/YourFault';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NonBinding from './components/NonBinding';
import FooterSection from './components/FooterSection';

function App() {
  return (
   <div className=' overflow-hidden max-w-[1920px] mx-auto'>
   <HeroSection/>
   <YourFault/>
   <WillGet/>
   <TargetGroup/>
   <Separation/>
   <YourEx/>
   <Lawyer/>
   <Clients/>
   <NonBinding/>
   <FooterSection/>
   </div>
  );
}

export default App;
