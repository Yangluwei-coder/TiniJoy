import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToyCard from '../../components/ToyCard/ToyCard';
import axios from 'axios';
import './ToyGallery.css';

export default function ToyGallery({
  title = 'All Toys',
  defaultFilter = 'all',
  limit = null,
  showFilter = false,
  showAllLink = false,
  showBreadcrumb = true,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isCatalog = location.pathname === '/catalog';
  const isHome = location.pathname === '/home';

  const query = new URLSearchParams(location.search);
  const initialFilter = query.get('type') || defaultFilter;

  const [filter, setFilter] = useState(initialFilter);
  const [products, setProducts] = useState([]); // 初始化为空数组
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  console.log("API_URL in ToyGallery:", API_URL);
  useEffect(() => {
    // 安全加载数据
    setLoading(true);
    axios.get(`${API_URL}/products`)
      .then(res => {
        // 确保返回的是数组
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error('API did not return an array:', res.data);
          setProducts([]); // fallback
        }
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setError(err);
        setProducts([]); // fallback
      })
      .finally(() => setLoading(false));
  }, []);

  // 过滤数据时先确保 products 是数组
  const filtered = Array.isArray(products)
    ? products.filter(toy => filter === 'all' ? true : toy.type === filter)
    : [];

  const toysToShow = limit ? filtered.slice(0, limit) : filtered;

  if (loading) return <div>Loading toys...</div>;
  if (error) return <div>Failed to load toys.</div>;

  return (
    <div className="toy-gallery">
      {showBreadcrumb && !isHome && (
        <div className="breadcrumb">
          <span className="breadcrumb-link" onClick={() => navigate('/')}>Home</span>
          <span> &gt; </span>
          <span className="breadcrumb-link active" onClick={() => navigate('/catalog')}>Catalog</span>
        </div>
      )}

      <div className='product-wrapper'>
        <div className="gallery-header">
          <h2>{title}</h2>
          {showAllLink && !isCatalog && <a href="/catalog" className="see-all">See All toys →</a>}
          {isCatalog && showFilter && (
            <div className="filter-buttons">
              <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Toys</button>
              <button className={filter === 'wooden' ? 'active' : ''} onClick={() => setFilter('wooden')}>Wooden Toys</button>
              <button className={filter === 'stuffed' ? 'active' : ''} onClick={() => setFilter('stuffed')}>Stuffed Animals</button>
            </div>
          )}
        </div>

        <div className="slider-bar">
          <div className="slider-progress" style={{ width: '20%' }}></div>
        </div>

        <div className="toy-grid">
          {toysToShow.map(toy => (
            <ToyCard
              key={toy._id}
              toy={toy}
              onClick={() => navigate(`/product/${toy._id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
