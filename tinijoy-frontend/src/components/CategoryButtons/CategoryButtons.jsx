import './button.css';
import { useNavigate } from 'react-router-dom';

export default function CategoryButtons() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };
  
  return (
    <div className="Category-box">
      <div className='category-wrapper'>
      <div className="Left-box">
        <div className='Box-left-pic'></div>
        <div>
        <p className='Box-box-word'>Stuffed Animals</p>
        <button className='Box-button' onClick={handleClick} style={{cursor:'pointer'}}>Shop Now</button>
        </div>
      </div>

      <div className='Right-box'>
        <div><p className='Box-box-word'>Wooden Animals</p>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}><button className='Box-button' onClick={handleClick} style={{cursor:'pointer'}}>Shop Now</button></div>
        </div>
        <div className='Box-right-pic'></div>
      </div>
      </div>
    </div>
  );
}
