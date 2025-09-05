import './product.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import CartPopup from '../cart/CartPopup';
import ToyGallery from '../../pages/catalog/ToyGallery';

export default function Product() {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    axios.get(`${API_URL}/products/${id}`)
      .then(res => setToy(res.data))
      .catch(err => console.error('Failed to fetch product:', err));
  }, [id, API_URL]);

  const handleAddToCart = () => {
    if (!toy) return;
    dispatch(addToCart({
      id: toy._id,
      name: toy.name,
      image: toy.image,
      price: toy.price,
      quantity: Number(quantity)
    }));
    setShowCart(true);
  };

  if (!toy) return <h2 style={{ paddingTop: '80px' }}>Loading product...</h2>;

  return (
    <div style={{ backgroundColor: 'rgb(248,248,248)', minHeight: '70vh', paddingTop: '70px' }}>
      <div className="breadcrumbstyle">
        <span className="breadcrumb-link" onClick={() => navigate('/')}>Home</span>
        <span> &gt; </span>
        <span className="breadcrumb-link" onClick={() => navigate('/catalog')}>Catalog</span>
        <span> &gt; </span>
        <span>{toy.name}</span>
      </div>

      <div className='product-wrapper'>
        <div className='product-box'>
          <div className='product-word'>
            <p style={{ marginTop: '20px', fontSize: '30px', fontWeight: '500' }}>{toy.name}</p>
            <p style={{ marginTop: '30px', maxWidth: '400px', color: 'darkgrey', lineHeight: '1.5' }}>
              A successful marketing plan relies heavily on the pulling-power of advertising copy.
              Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy. It is based on a number of factors.
            </p>
            <p style={{ marginTop: '20px', fontSize: '22px', fontWeight: '500', color: 'rgb(162, 200, 36)' }}>$ {toy.price}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)}className="number-input"/>
              <button className="add-button" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
          <div><img src={toy.image} alt={toy.name} style={{ width: '350px' }} /></div>
        </div>

        <div className='product-intro'>
          <div className='detail-head'>
            <div>Product Details</div>
            <div style={{ fontSize: '14px' }}>{toy.name}</div>
          </div>
          <div className="slider-bar" style={{ margin: '20px auto', width: '100%' }}>
            <div className="slider-progress" style={{ width: '20%' }}></div>
          </div>
          <div className='product-detail'>
            <div className='left-detail'>
              <p style={{ fontSize: '22px' }}>{toy.name} Description</p>
              <div style={{ marginLeft: '20px', fontSize: '16px' }}>
                <li>Colorful Design</li>
                <li>Eco-friendly Materials</li>
                <li>Safe for Children</li>
                <li>Recommended Age: 3 years and up</li>
              </div>
              <p style={{ fontSize: '12px' }}>
                Build with joy, spark creativity! A perfect choice for gifting and parent-child playtime!
              </p>
            </div>

            <div className='right-form'>
              <form className="styled-form">
                <div className="form-line">
                  <span className="label">Width</span>
                  <span className="value">12.5 in</span>
                </div>
                <div className="form-line">
                  <span className="label">Height</span>
                  <span className="value">6 in</span>
                </div>
                <div className="form-line">
                  <span className="label">Length</span>
                  <span className="value">3 in</span>
                </div>
                <div className="form-line">
                  <span className="label">Weight</span>
                  <span className="value">32 oz</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showCart && <CartPopup cartItems={cartItems} onClose={() => setShowCart(false)} />}

      <ToyGallery title="Related Toys" showBreadcrumb={false} showFilter={false} limit={4}/>
    </div>
  );
}
