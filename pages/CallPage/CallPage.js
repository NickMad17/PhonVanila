import {KeyPad} from "../../components/KeyPad/KeyPad.js";
import {CallPerson} from "../../components/CallPerson/CallPerson.js";

export const CallPage = ({context}) => {
  const {btnCall} = context
  const html = `
      ${context.btnCall === 'default' ? KeyPad({context}): CallPerson({context})}
    <button id="call" style="background: ${btnCall === 'default' ? 'green' : btnCall === 'loading' ? 'orange' : btnCall === 'youCall' ? 'green': btnCall === 'call' ? 'red' : ''}">
        ${btnCall === 'default' ? 'Позвонить' : btnCall === 'loading' ? 'Вызов...' : btnCall === 'youCall' ? 'Ответить' : btnCall === 'call' ? 'Отбой': ''}
    </button>
    ${btnCall === 'youCall' || btnCall === 'loading'  ? `
      <button id="reset">
        Отмена
      </button>
    ` : ""}
    
      
  `
  return html
}