import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, director, duration, rating, premiered, genres, imageUrl, backClass }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://www.bing.com/th/id/OGC.84eae86630d2fd29c8408f4e18fbe2a1?pid=1.7&rurl=https%3a%2f%2fshortpixel.com%2fimg%2fspinner2.gif&ehk=lWJv9llrAhKbhWPj6RaehsCcolajW%2bKel3wwLnUAO90%3d';
  };

  return (
    <div className={`card ${backClass}`} style={{ width: '18rem', margin: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <img
        src={imageUrl}
        className="card-img-top img-fluid rounded"
        alt={title}
        onError={handleImageError}
        style={{ border: '1px solid #ddd', borderRadius: '8px' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{director}</h6>
        <ul className="list-group list-group-flush text-left">
          <li className="list-group-item">Duration: {duration} min</li>
          <li className="list-group-item">Genres: {genres.join(', ')}</li>
          <li className="list-group-item">Rating: {rating}</li>
          <li className="list-group-item">Premiered: {premiered}</li>
        </ul>
        <div className="card-footer">
          <Link to={`/details/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
