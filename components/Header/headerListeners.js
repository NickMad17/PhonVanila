import {context} from "../../conntext/context.js";
import {render} from "../../init/render.js";
import {loginInServer} from "../../main.js";

export const headerListeners = () => {
  const exit = document.getElementById('exit')
  document.querySelectorAll('.nav').forEach(item => {
    const navHistory = document.getElementById('history-page')
    const navCall = document.getElementById('call-page')
    item.addEventListener('click', (e) => {
      if (e.target.id === 'history-page') {
        navHistory.classList.add('active')
        navCall.classList.remove('active')

        context.page = 'historyPage'
        render({context})
      }
      if (e.target.id === 'call-page') {

        context.page = 'callPage'
        render({context})
      }
    })
  })

  exit.addEventListener('click', () => {
    localStorage.clear()
    loginInServer()
  })
}