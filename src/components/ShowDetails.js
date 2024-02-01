import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShowDetails(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (!showDetails) {
    return <div className="container mt-5 text-center">Loading...</div>;
  }

  return (
      <div className="container mt-5">
          <Link to={'/'} className="btn btn-primary mb-2">
                Back
              </Link>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <img
              src={showDetails.image ? showDetails.image.original : 'placeholder-image-url'}
              className="card-img-top img-fluid"
              alt={showDetails.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'placeholder-image-url';
              }}
            />
            <div className="card-body">
              <h1 className="card-title">{showDetails.name}</h1>
              <p className="card-text">{showDetails.summary}</p>
              <Link to={`/booking/${id}`} className="btn btn-primary">
                Book Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
