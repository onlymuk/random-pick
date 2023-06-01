import React, { useEffect, useState } from "react";
import datas from "./data/cards.js";
import BusinessCard from "./components/BusinessCard.js";

function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  function draw() {
    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name},`));
      }, "");

      alert(`당첨자는 ${names} 입니다.`);
    }
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));

    setPickedCards([...pickedCards, randomItem]);
  }

  useEffect(() => {
    setCards(datas);
  }, []);
  console.log(cards);
  console.log(pickedCards);

  return (
    <div className="App">
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {pickedCards.length > 0 && (
        <BusinessCard info={pickedCards[pickedCards.length - 1]} />
      )}
    </div>
  );
}

export default App;
