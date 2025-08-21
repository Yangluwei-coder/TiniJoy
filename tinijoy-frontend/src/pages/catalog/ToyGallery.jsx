import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toyData from '../../assets/images/toyData';
import ToyCard from '../../components/ToyCard/ToyCard';
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

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  const filtered = toyData.filter(toy =>
    filter === 'all' ? true : toy.type === filter
  );
  const toysToShow = limit ? filtered.slice(0, limit) : filtered;

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
        {isCatalog && (
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
            key={toy.id}
            toy={toy}
            onClick={() => navigate(`/product/${toy.id}`)}
          />
        ))}
      </div>
      </div>
    </div>
   
  );
}
