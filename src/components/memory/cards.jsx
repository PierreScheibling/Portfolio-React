import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./card.jsx";
//Styled
import styled from "styled-components";
import "./_memory.scss";
// let i = 0;
let compteur = 0;

function Cards() {
  let score = document.getElementById("score");
  const [items, setItems] = useState(
    [
      { id: 1, img: "src/img/stack/HTML.png", stat: "" },
      { id: 1, img: "src/img/stack/HTML.png", stat: "" },
      { id: 2, img: "src/img/stack/CSS.png", stat: "" },
      { id: 2, img: "src/img/stack/CSS.png", stat: "" },
      { id: 3, img: "src/img/stack/JS.png", stat: "" },
      { id: 3, img: "src/img/stack/JS.png", stat: "" },
      { id: 4, img: "src/img/stack/React.png", stat: "" },
      { id: 4, img: "src/img/stack/React.png", stat: "" },
      { id: 5, img: "src/img/stack/ROR.png", stat: "" },
      { id: 5, img: "src/img/stack/ROR.png", stat: "" },
      { id: 6, img: "src/img/stack/Figma.png", stat: "" },
      { id: 6, img: "src/img/stack/Figma.png", stat: "" },
      { id: 7, img: "src/img/stack/Github.png", stat: "" },
      { id: 7, img: "src/img/stack/Github.png", stat: "" },
      { id: 8, img: "src/img/stack/API.png", stat: "" },
      { id: 8, img: "src/img/stack/API.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  // const [score, setScore] = useState(document.getElementById("score"));
  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      compteur += 1;
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
        compteur;
      }, 1000);
    }
    score.innerHTML = compteur;
  }

  // function result() {
  //   if ()
  // }

  //

  // function updateScore() {
  //   let score = document.getElementById("score");
  //   if ()
  // }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
