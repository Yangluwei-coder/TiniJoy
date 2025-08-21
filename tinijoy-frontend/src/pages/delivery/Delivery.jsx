import './delivery.css';
import { useNavigate } from 'react-router-dom';
import PromoSection from '../../components/PromoSection/PromoSection'
import InstagramGallery from '../../components/InstagramGallery/InstagramGallery'

export default function Delivery() {
  const navigate = useNavigate();
  return (
    <div className='delivery-page'>
       <div className="breadcrumb">
        <span className="breadcrumb-link" onClick={() => navigate('/')}>Home</span>
        <span> &gt; </span>
        <span className="breadcrumb-link active" onClick={() => navigate('/delivery')}>Delivery</span>
      </div>
      <div className='delivery-box'>
        <div style={{maxWidth:'50%', margin:'60px 0 60px 20px', lineHeight:'1.5'}}>
            <p style={{marginTop:'20px',fontSize:'30px', fontWeight:'500'}}>Delivery Info</p>
            <p style={{marginTop:'-10px',lineHeight:'1.5'}}>A successful marketing plan relies heavily on the pulling-power of advertising copy.
          Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.
          There is no magic formula to write perfect ad copy. It is based on a number of factors.</p>
          <p style={{marginTop:'20px',fontSize:'25px', fontWeight:'500'}}>What's a Rich Text element?</p>
          <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one 
            place instead of having to add and format them individually. Just double-click and easily create content.
          </p>
          <p style={{marginTop:'20px',fontSize:'25px', fontWeight:'500'}}>Static and dynamic content editing</p>
          <p >A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. </p>
          
            <li>Beautifully Designed</li>
            <li>100% Responsive</li>
            <li>CMS Content</li>
            <li>Smooth Animations</li>
          <p>For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel.Volla! </p>
          <p style={{marginTop:'20px',fontSize:'25px', fontWeight:'500'}}>How to customize formatting for each rich text</p>
          <p>Headings, paragraphs, blockquotes, figures, images and figure captions can all be styled after a class is added to the rich text element using 
            the "When inside of" nested selector system.
          </p>
        </div>
        <div>
            <div className='delivery-right-box'>
                <div style={{maxWidth:'80%', margin:'30px auto', lineHeight:'1.5'}}>   
                  <p style={{fontSize:'16px',textAlign:'center', fontWeight:'500'}}>Can't Find the Answer to Your Question?</p>
                  <button className='contact-button' onClick={() => navigate('/contact')}>Contact Us</button>
                </div>
            </div>
        </div>

      </div>
      <PromoSection/>
      <InstagramGallery/>
    </div>
  )
}
