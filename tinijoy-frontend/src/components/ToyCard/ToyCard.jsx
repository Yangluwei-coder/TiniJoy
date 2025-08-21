import './ToyCard.css';

export default function ToyCard({ toy, onClick }) {
  return (
    <div className="toy-card" onClick={onClick}>
      <img src={toy.image} alt={toy.name} />
      <div className="toy-name">{toy.name}</div>
      <button className="toy-button">{toy.price}</button>
    </div>
  );
}