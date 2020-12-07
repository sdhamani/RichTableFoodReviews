import React, { useState } from "react";
import "./styles.css";

const itemsDB = {
  Breakfast: [
    { foodItem: "Tea ☕", reviews: "🌟🌟🌟🌟🌟" },
    { foodItem: "Burger 🍔", reviews: "🌟🌟🌟" },
    { foodItem: "Omelette 🍳", reviews: "🌟🌟🌟" },
    { foodItem: "Donuts 🍩", reviews: "🌟🌟🌟🌟" },
    { foodItem: "Maggi 🍝", reviews: "🌟🌟🌟🌟🌟" }
  ],

  Lunch: [
    { foodItem: "Panner Tikka Masala 🍲", reviews: "🌟🌟🌟🌟" },
    { foodItem: "Chapati 🍞", reviews: "🌟🌟🌟" },
    { foodItem: "Curd 🍯", reviews: "🌟🌟🌟🌟" },
    { foodItem: "White Rice 🍚", reviews: "🌟🌟🌟" },
    { foodItem: "Ice Cream 🍧 ", reviews: "🌟🌟🌟🌟" },
    { foodItem: "Apple Pie 🍪", reviews: "🌟🌟🌟🌟🌟" }
  ],

  Dinner: [
    { foodItem: "Butter  Chicken 🍗", reviews: "🌟🌟🌟🌟🌟" },
    { foodItem: "Fish Fry  🐟", reviews: "🌟🌟🌟🌟" },
    { foodItem: "Mutton Curry 🍛", reviews: "🌟🌟🌟🌟🌟" },
    { foodItem: "Tandoori Roti 🍞", reviews: "🌟🌟🌟🌟" },
    { foodItem: "Easy Mango Kulfi 🍮", reviews: "🌟🌟🌟🌟" }
  ]
};

const listofitems = Object.keys(itemsDB);

console.log(listofitems);

const header = {
  color: "rgb(170, 166, 166)",
  margin: "0.5rem",
  padding: "10px"
};

const button = {
  margin: "0rem 1rem",
  cursor: "pointer",
  background: "#FBBF24",
  borderRadius: "0.5rem",
  padding: "0.5rem  1rem",
  border: "1px solid black"
};

const list = {
  padding: "1rem 1rem",
  border: "1.5px solid",
  margin: "1rem 2rem",
  borderRadius: "0.5rem",
  listStyle: "none"
};
export default function App() {
  const [item, setitem] = useState("Breakfast");

  function onClickHandler(item) {
    setitem(item);
  }
  return (
    <div className="App">
      <h1 style={header}>Rich Table Food Reviews</h1>
      <h2 style={{ fontSize: "smaller" }}>
        Check out the reviews of food items at our restaurant.
      </h2>
      <div>
        {listofitems.map((item) => (
          <button style={button} onClick={() => onClickHandler(item)}>
            {item}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {itemsDB[item].map((item) => (
            <li key={item.foodItem} style={list}>
              <div style={{ fontSize: "larger" }}> {item.foodItem} </div>
              <div style={{ fontSize: "smaller" }}> {item.reviews} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
