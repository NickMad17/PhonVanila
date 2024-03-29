import {CallBtn} from "../components/CallBtn.js";

export const CallPage = () => {
  let value = ''
  document.getElementById('this-page').innerHTML = `
    <p>${localStorage.getItem('user')}</p>
    <input type="number" class="input" id="input">
    <div id="btn-box"></div>
  `
  const input = document.getElementById('input')
  input.focus()
  input.addEventListener('input', (e) => {
    value = e.target.value
    CallBtn(value)
  })
  CallBtn(value)
}

// 0344864
