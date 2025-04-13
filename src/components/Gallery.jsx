//Task 2 - Fetch and render tour list with useEffect and state

import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

// Url to fetch the tour data from the API
const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project';


const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch tours");
      }
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log('Fetch error:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Something went wrong.</h2>;
  }
  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours left</h2>
        <button onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          {...tour}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
};

//exporting gallery 
export default Gallery;