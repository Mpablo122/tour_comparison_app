//Task 2 - Fetch and render tour list with useEffect and state

import React, { use, useEffect, useState } from 'react';
import TourCard from './TourCard';


const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

//fetching gallery from the API

const fetchTours = async () => {
    try {
      const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
      const data = await res.json();

      // You don't need `.results` for this API, just `data`
      const trimmed = data.map((tour) => ({
        id: tour.id,
        name: tour.name,
        info: tour.info,
        price: tour.price,
        image: tour.image,
      }));

      setTours(trimmed);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
  }
}

// useEffect to fetch data on component mount
 useEffect(() => {
    fetchTours();
  }, []);

  //nned to do loading state 

  if(loading) {
    return <h2>Loading...</h2>;
  }
  if(error) {
    return <h2>Error fetching tours</h2>;
  }
    if(tours.length === 0) {
        return (
            <div className="gallery">
                <h2>No tours left</h2>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        );
    }

    return (
        <section className="gallery">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              {...tour} // Spread operator to pass all tour properties
              onRemove={onRemove} // Pass the remove function
            />
          ))}
        </section>
      );
    };
    
    export default Gallery;