import {CallBtn} from "../../components/CallBtn.js";
import {listeners} from "./listeners.js";

export const CallPage = () => {
  let inputValue = ''
  document.getElementById('this-page').innerHTML = `
    <p>${localStorage.getItem('user')}</p>
    
    <div class="box" >
    <input type="number" class="input-numb" id="input" />
    <div class="numb__box">
    <button class="numb">1</button>
    <button class="numb">2</button>
    <button class="numb">3</button>
    <button class="numb">4</button>
    <button class="numb">5</button>
    <button class="numb">6</button>
    <button class="numb">7</button>
    <button class="numb">8</button>
    <button class="numb">9</button>
    <button>*</button>
    <button class="numb">0</button>
    <button id="erase"><-</button>
    </div>
    <div style="margin-top: 10px" id="btn-box"></div>
  </div>
  `
  const input = document.getElementById('input')
  const erase = document.getElementById('erase')
  const numbers = document.querySelectorAll('.numb')
  input.addEventListener('input', (e) => {
    inputValue = e.target.value
    listeners(numbers, erase, input, inputValue)
    CallBtn(inputValue)
  })
  listeners(numbers, erase, input, inputValue)
  CallBtn(inputValue)
}

// 0344864
