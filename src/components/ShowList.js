import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';  

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Explore Shows</h1>
      <div className="row">
        {shows.map((show) => (
          <div key={show.show.id} className="col-md-4  mb-4">
            <MovieCard
              id={show.show.id}
              title={show.show.name}
              director={show.show.network ? show.show.network.name : 'Unknown'}
                    duration={show.show.weight}
                    rating={show.show.rating.average}
                    premiered={show.show.premiered}
              genres={show.show.genres}
                    imageUrl={show.show.image ? show.show.image.medium : 'placeholder-image-url'
                    }
                    backClass=""

                    
                />

          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
