import { HarryPotterApp } from "./src/harrypotter/app";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <div>
      <span class="logo" alt="Wand logo" >🪄</span>
      <span class="logo" alt="Spell logo" >⚡️</span>
    </div>
    <h1 id="app-title"></h1>
    <div class="card">

    </div>
  </div>
`;

const element = document.querySelector(".card");

HarryPotterApp(element);
