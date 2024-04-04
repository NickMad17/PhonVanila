import {listeners} from "./listeners.js";
import {context} from "../../conntext/context.js";
import {render} from "../../init/render.js";

export const CallPageListeners = () => {
  const input = document.getElementById('input')
  const erase = document.getElementById('erase')
  const clear = document.getElementById('clear')
  const numbers = document.querySelectorAll('.numb')
  input.addEventListener('input', (e) => {
    context.numbers = e.target.value
    console.log(context.numbers)
    render({context})
  })
  listeners(numbers, erase, clear)
}

// 0344864
