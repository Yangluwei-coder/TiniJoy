import './about.css';
import legoImage from '../../assets/images/lego.jpg';

export default function About() {
  return (
    <div className='about-page'>
        <div className="breadcrumb">
        <span className="breadcrumb-link" onClick={() => navigate('/')}>Home</span>
        <span> &gt; </span>
        <span className="breadcrumb-link active" onClick={() => navigate('/about')}>About</span>
      </div>
      <div className='about-box'>
        <p style={{ fontSize:'12px', color:'rgb(162, 200, 36)'}}>All you need is Fun!</p>
        <p style={{marginTop:'20px',fontSize:'30px', fontWeight:'500'}}>Introducting TiniJoy</p>
        <p style={{color:'darkgrey', maxWidth:'50%', fontSize:'14px', lineHeight:'1.4',margin:'0 auto'}}>Tinijoy is an online joy store built to bring joy, creativity, and imagination into every child's world. 
            Our platform offers a carefully curated selection of toys - from brain-boosting educational 
            kits to playful figures and outdoor fun. At Tinijoy, we believe that toys are more than just playthings - 
            they're companions in childhood, tools for growth, and sparks of curiosity. Whether you're shopping for 
            a birthday, a special moment, or everyday fun, Tinijoy makes it easy to discover quality toys 
            that kids love and parents trust. We partner with trusted brands and innovative designers to ensure 
            every product is safe, engaging, and full of joy. Explore our categories, find your favorites, and let the play begin!
        </p>
        <div className="lego-image">
          <img style={{width: '100%', borderRadius: '16px', margin:'50px auto'}}src={legoImage} alt="lego" />
        </div>
      </div>
    </div> 
  )
}
