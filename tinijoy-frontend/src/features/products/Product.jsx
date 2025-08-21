import './product.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import bear from '../../assets/images/plush-toy.png';
import mega from '../../assets/images/toy-3.png';
import dog from '../../assets/images/toy-2.png';
import little from '../../assets/images/toy-1.png';
import flower from '../../assets/images/wooden-toy.png';
import liftMachine from '../../assets/images/toy-6.png';
import camera from '../../assets/images/toy-5.png';
import rabbit from '../../assets/images/toy-4.png';
import ToyGallery from '../../pages/catalog/ToyGallery';
import CartPopup from '../cart/CartPopup';

const toyData = [
  { id: 1, name: 'Teddy Bear', type: 'stuffed', image: bear, price: '$ 30.00 USD' },
  { id: 2, name: 'Mega Plush Toy', type: 'stuffed', image: mega, price: '$ 38.00 USD' },
  { id: 3, name: 'Cute Dog', type: 'stuffed', image: dog, price: '$ 24.00 USD' },
  { id: 4, name: 'Little Friend', type: 'stuffed', image: little, price: '$ 27.00 USD' },
  { id: 5, name: 'Happy Flower', type: 'wooden', image: flower, price: '$ 38.00 USD' },
  { id: 6, name: 'Lift Machine', type: 'wooden', image: liftMachine, price: '$ 24.00 USD' },
  { id: 7, name: 'Wooden Camera', type: 'wooden', image: camera, price: '$ 32.00 USD' },
  { id: 8, name: 'Little Rabbit', type: 'wooden', image: rabbit, price: '$ 16.00 USD' },
];

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toy = toyData.find(t => t.id === parseInt(id));
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: toy.id,
      name: toy.name,
      image: toy.image,
      price: parseFloat(toy.price.replace(/[^0-9.]/g, '')),
      quantity: parseInt(quantity)
    }));
    setShowCart(true);
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const closeCart = () => setShowCart(false);

  if (!toy) return <h2>Product not found</h2>;

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
            <p style={{ marginTop: '20px', fontSize: '22px', fontWeight: '500', color: 'rgb(162, 200, 36)' }}>{toy.price}</p>
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
      {showCart && ( <CartPopup cartItems={cartItems} onClose={closeCart} />)}


      <ToyGallery
        title="Related Toys"
        showBreadcrumb={false}
        showFilter={false}
      />
    </div>
  );
}
