import './style.css'
import {CallPage} from "./pages/CallPage.js";
import {HistoryPage} from "./pages/HistoryPage.js";
import {CallBtn} from "./components/CallBtn.js";
localStorage.setItem('user', '0344865')
document.querySelector('#app').innerHTML = `
  <div>
    <div class="nav__box">
      <button class="nav" id="call-page">Позвонить</button>
      <button class="nav" id="history-page">История</button>
    </div>
    <div id="this-page"></div>
  </div>
`
CallPage()
CallBtn()
document.querySelectorAll('.nav').forEach(item => {
  item.addEventListener('click', (e) => {
    if (e.target.id === 'history-page') {
      HistoryPage()
    }
    if (e.target.id === 'call-page') {
      CallPage()
    }
  })
})



