import './style.css'
import {setupCounter} from './counter.js'
import {initTemplate} from "./init/initTemplate.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="call" type="button">позвонить</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <div id="btn-box"></div>
    <div id="btn"></div>
  </div>
`
// initTemplate()
setupCounter()