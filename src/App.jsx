import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './App.css';

const images = [
  "b1.jpg",
  "b2.jpg",
  "b3.jpg",
  "b4.jpg",
  "b5.jpg",
  "b6.jpg",
  "b7.jpg",
  "b8.jpg",
];

// Repeat the images in the array to create a new array with 100 elements
const people = Array.from({ length: 100 }, (_, index) => images[index % images.length]);

function App() {
  const [cards, setCards] = useState(people);

  const swiped = (direction, person) => {
    console.log(`You swiped ${direction} on ${person}`);
    // Update the state to remove the swiped card from the array
    setCards((prevCards) => prevCards.filter((card) => card !== person));
  };

  const outOfFrame = (person) => {
    console.log(`${person} left the screen!`);
  };

  return (
    <>
      <div className="tinderCards__cardContainer">
        {
          people.map((person, index) => (
            <TinderCard
              className="swipe"
              key={`${person}_${index}`}
              onSwipe={(dir) => swiped(dir, person)}
              onCardLeftScreen={() => outOfFrame(person)}
              preventSwipe={['up', 'down']}
            >
              <div
                style={{ backgroundImage: `url(/images/${person})` }}
                className="card"
              >
                {/* Add any additional content or styling for the card here */}
              </div>
            </TinderCard>
          ))
        }
      </div>
    </>
  );
}

export default App;
