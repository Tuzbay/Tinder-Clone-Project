import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Natalia Portman",
      url: "https://images.hellomagazine.com/imagenes/fashion/celebrity-style/20220630144319/natalie-portman-thor-cut-out-dress-massive-reaction/0-702-878/natalie-portman-variety-t.jpg",
    },
    {
      name: "Barbara Palvin",
      url: "https://iatkv.tmgrup.com.tr/d9523c/600/314/2/0/616/321?u=https://itkv.tmgrup.com.tr/2019/07/14/unlu-model-barbara-palvin-formunun-sirrini-paylasti-1563137041922.jpeg",
    },
    {
      name: "Gigi Hadid",
      url: "https://static.daktilo.com/sites/683/uploads/2021/04/25/gigi-hadid-bir-gunde-ne-yiyor-1619376639.jpg",
    },
  ]);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
