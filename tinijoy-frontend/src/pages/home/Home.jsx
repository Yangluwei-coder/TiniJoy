import './home.css';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../../components/HeroBanner/HeroBanner.jsx';
import InstagramGallery from '../../components/InstagramGallery/InstagramGallery.jsx';
import StoryVideoSection from '../../components/StoryVideoSection/StoryVideoSection.jsx';
import PromoSection from '../../components/PromoSection/PromoSection.jsx';
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons.jsx';
import toyData from '../../assets/images/toyData'; 
import ToyGallery from '../../pages/catalog/ToyGallery.jsx';

export default function Home() {
  const navigate = useNavigate();
  const stuffedToys = toyData.filter(toy => toy.type === 'stuffed').slice(0, 4);
  const woodenToys = toyData.filter(toy => toy.type === 'wooden').slice(0, 4);

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <div className='home-box'>
      <div className="home-page">
        <div className="intro-box">
          <div className='first-line'> Say Hello to TiniJoy! </div>
          <div className='intro-word'> <p>Fast And Professional Shopping Website</p></div>
          <div className='open-catalog' onClick={handleClick} style ={{cursor:'pointer'}}>Open Catalog</div>
        </div>
      </div>
      <div className="overlay-icon">
        <div className="outer-circle">
          <div className="vertical-ellipse">
            <div className="dot" />
          </div>
        </div>
      </div>
      <CategoryButtons/>
      <ToyGallery title="Stuffed Toys" defaultFilter="stuffed" limit={4} showFilter={false} showAllLink={true}/>
      <ToyGallery title="Wooden Toys" defaultFilter="wooden" limit={4} showFilter={false} showAllLink={true}/>
      <StoryVideoSection/>
      <HeroSection/>
      <PromoSection/>
      <InstagramGallery/>
    </div>
  );
}
