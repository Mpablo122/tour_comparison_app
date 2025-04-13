//Task 1 - Setup root component with state and props structure

//Importing tools from React - useState to manage values
import React, { useState } from 'react';

//Importing the Gallery component to display the list of tours
import Gallery from './components/Gallery';

//Importing the CSS file for styling the app
import './styles/styles.css';

//This is the main component of the app
function App() {
  //This state variable stores the list of tours (starts as an empty array)
  const [tours, setTours] = useState([]);

  //This function removes a tour from the list using its ID
  const removeTour = (id) => {
    // Update the tours list by keeping only the tours that don't match the given ID
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      {/* App title */}
      <h1>Tour Explorer</h1>
      {/* Gallery component displays the tours and tours is the list of tours
        setTours updates the tours list and onRemove removes a tour */}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

//Exporting the main App component as the default export
export default App;