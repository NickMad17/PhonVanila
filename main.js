import './style.css'
import {CallPage} from "./pages/CallPage/CallPage.js";
import {HistoryPage} from "./pages/HistoryPage.js";
localStorage.setItem('user', '0344865')
document.querySelector('#app').innerHTML = `
  <div>
    <div class="nav__box">
      <button class="nav active" id="call-page">Позвонить</button>
      <button class="nav" id="history-page">История</button>
    </div>
    <div id="this-page"></div>
  </div>
`
CallPage()

// nav
const navHistory = document.getElementById('history-page')
const navCall = document.getElementById('call-page')

document.querySelectorAll('.nav').forEach(item => {
  item.addEventListener('click', (e) => {
    if (e.target.id === 'history-page') {
      navHistory.classList.add('active')
      navCall.classList.remove('active')

      HistoryPage()
    }
    if (e.target.id === 'call-page') {
      navCall.classList.add('active')
      navHistory.classList.remove('active')

      CallPage()
    }
  })
})



