import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './styles.css';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) throw new Error('Failed to fetch tours');
      const data = await response.json();
      setTours(data);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main className="app">
      <h1>Tours</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <Gallery tours={tours} onRemove={removeTour} />
      )}
    </main>
  );
};

export default App;
