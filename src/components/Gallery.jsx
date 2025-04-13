import React, {use, useEffect, useState}  from "react";
import TourCard from "./TourCard";

// Gallery is responsible for fetching and rendering the list
// of tours from the API.
const ToursList = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, []);

  return (
    <section className="tour-list">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} />
      ))}
    </section>
  );
};

export default ToursList;
