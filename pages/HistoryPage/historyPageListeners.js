import {context} from "../../conntext/context.js";
import {call} from "../../utils/call.js";
import {render} from "../../init/render.js";

export const historyPageListeners = () => {
  const resetBtn = document.getElementById('reset-btn')
  const names = document.querySelectorAll('.history-name')
  resetBtn.addEventListener('click', () => {
    localStorage.setItem('history', '[]')
    render({context})
  })

  names.forEach(name => {
    name.addEventListener('click', () => {
      console.log('fe')
      context.page = 'callPage'
      context.numbers = name.innerText
      render({context})
      call()
    })
  })
}