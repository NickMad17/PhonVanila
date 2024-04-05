import {context} from "../../conntext/context.js";
import {currentAnswer} from "../../init/newCall.js";
import {call} from "../../utils/call.js";
import {options} from "../../utils/JsSipOptions.js";


export const callBtnListeners = () => {
  const btn = document.getElementById('call')
  const resetBtn = document.getElementById('reset')
  btn.addEventListener('click', () => {
    if (context.btnCall === "default") {
      if (context.numbers !== context.user.name){
        call()
      }
    }
    if (context.btnCall === "youCall") {
      currentAnswer.answer(options)

    }
    if (context.btnCall === "call") {
      currentAnswer.terminate()
      context.btnCall = 'default'
    }
  })

  resetBtn?.addEventListener('click', () => {
    currentAnswer.terminate()
    context.btnCall = 'default'
  })
}