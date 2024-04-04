import {context} from "../../conntext/context.js";
import {render} from "../../init/render.js";

export const listeners = (numbers, erase) => {
  numbers.forEach(number => {
    number.addEventListener('click', (e) => {
      context.numbers = context.numbers + String(e.target.innerText)
      render({context})
    })
  })
  erase.addEventListener('click', () => {
    const valueArr = context.numbers.split('')
    valueArr.pop()
    context.numbers = valueArr.join("")
    render({context})
  })

  clear.addEventListener('click', () => {
    context.numbers = ''
    render({context})
  })
}
