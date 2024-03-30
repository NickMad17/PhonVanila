import {CallBtn} from "../../components/CallBtn.js";

export const listeners = (numbers, erase, input, inputValue) => {
  numbers.forEach(number => {
    number.addEventListener('click', (e) => {
      inputValue = inputValue + String(e.target.innerText)
      input.value = inputValue
      CallBtn(inputValue)
    })
  })
  erase.addEventListener('click', () => {
    const valueArr = inputValue.split('')
    valueArr.pop()
    inputValue = valueArr.join("")
    input.value = inputValue
  })
}
