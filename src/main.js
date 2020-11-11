/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let who_value = getRndInteger(min, who.length);
  let action_value = getRndInteger(min, action.length);
  let what_value = getRndInteger(min, what.length);
  let when_value = getRndInteger(min, when.length);

  let sentence =
    who[who_value] +
    space +
    action[action_value] +
    space +
    what[what_value] +
    space +
    when[when_value] +
    ".";

  document.querySelector("#excuse").innerHTML = sentence;

  document.querySelector("#excuse").animate(
    [
      // keyframes
      { transform: "rotate(360deg)" }
    ],
    {
      // timing options
      duration: 1000,
      iterations: 1
    }
  );
};
