import './ins.css';
import img1 from '../../assets/images/instagram-01.jpg';
import img2 from '../../assets/images/instagram-02.jpg';
import img3 from '../../assets/images/instagram-03.jpg';
import img4 from '../../assets/images/instagram-04.jpg';
import img5 from '../../assets/images/instagram-05.jpg';
import img6 from '../../assets/images/instagram-06.jpg';

const images = [img1, img2, img3, img4, img5, img6];

export default function InstagramGallery() {
  return (
    <div className='Ins-gallery'>
      <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Arial, sans-serif', paddingTop:'30px' }}>
        <p style={{fontSize:'16px'}}>We're on Instagram!</p>
      </div>
      <div style={{ margin: '20px 0px', height: '150px', display: 'flex', justifyContent: 'space-around', gap:'20px' }}>
        {images.map((img, index) => (
          <div className='img-card'
            key={index}
            style={{
              flex:1,
              borderRadius:'10px',
              backgroundImage: `url(${img})`,
              backgroundSize: 'contain',
              backgroundPosition:'center',
              backgroundRepeat: 'no-repeat',
              height:'150px',
              maxWidth: '150px', 
             
            }}
          />
        ))}
      </div>
      <div className='Button-see-photos'
      onClick={() => window.location.href = 'https://www.instagram.com/'}
      style={{ cursor: 'pointer' }}>
      <p style={{fontSize:'10px', margin:'auto 0'}}>See More Photos</p>
      </div>
    </div>
  );
}
