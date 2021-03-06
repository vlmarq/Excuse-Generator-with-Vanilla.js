/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Excuse Array
  let who = ["A one-legged parrot", "My dog", "My nosy neighbor", "A cop"];
  let action = ["broke", "stole", "ran over", "hid"];
  let what = ["my laptop", "the keys", "the car"];
  let when = [
    "while I was getting ready",
    "on the way to work",
    "when I finished my lunch",
    "in the middle of the night",
    "in front of my eyes"
  ];

  const min = 0;
  const space = " ";

  // Gets random number between 0 and length of array
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let who_value = getRndInteger(min, who.length);
  let action_value = getRndInteger(min, action.length);
  let what_value = getRndInteger(min, what.length);
  let when_value = getRndInteger(min, when.length);

  // Sentence constructor
  let sentence =
    who[who_value] +
    space +
    action[action_value] +
    space +
    what[what_value] +
    space +
    when[when_value] +
    ".";

  // Modifies h1 tag with 'excuse' ID and returns a random sentence
  document.querySelector("h1").innerHTML = "Why am I late? Uh, well...";

  // Modifies p tag with 'excuse' ID and returns a random sentence
  document.querySelector("#excuse").innerHTML = sentence;

  // Random color generator for background
  function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // Change background color
  document.body.style.backgroundColor = generateRandomColor();
};
