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
    axios.get(`${API_URL}/products/${_id}`)
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
            <p style={{ marginTop: '30px', maxWidth: '400px', color: 'darkgrey', lineHeight: '1.5' }}>{toy.description}</p>
            <p style={{ marginTop: '20px', fontSize: '22px', fontWeight: '500', color: 'rgb(162, 200, 36)' }}>${toy.price.toFixed(2)}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="number-input"/>
              <button className="add-button" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
          <div><img src={toy.image} alt={toy.name} style={{ width: '350px' }} /></div>
        </div>
      </div>

      {showCart && <CartPopup cartItems={cartItems} onClose={() => setShowCart(false)} />}

      <ToyGallery title="Related Toys" showBreadcrumb={false} showFilter={false} limit={4}/>
    </div>
  );
}
