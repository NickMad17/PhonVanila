import {context} from "../conntext/context.js";
import {render} from "./render.js";
import {call} from "../utils/call.js";

export const initKeyListeners = () => {
  document.addEventListener("keydown", function(event) {
    if (event.key >= '0' && event.key <= '9') {
      // Если да, выводим в консоль сообщение о нажатой цифре
      context.numbers = context.numbers + String(event.key)
      render({context})
    }
    if (event.key === 'Backspace') {
      // Если да, выводим в консоль сообщение о нажатии "Backspace"
      const valueArr = context.numbers.split('')
      valueArr.pop()
      context.numbers = valueArr.join("")
      render({context})
    }

    if (event.key === 'Enter'){
      if (context.btnCall === 'default')
        if (context.numbers !== context.user.name) {
          call()
        }
    }
  });
}