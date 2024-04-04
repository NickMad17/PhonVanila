import {examination} from "../../utils/examination.js";

export const Login = () => {
  document.querySelector('#app').innerHTML = `
  <div style="display:flex;flex-direction: column;">
    <div style="font-size: 20px; border-bottom: 1px #808080 solid; margin-bottom: 15px;">Вход</div>
    <p style="margin: 5px 0;">Имя</p>
    <input id="name-input" type="text"/>
    <p style="margin: 5px 0;">Server</p>
    <input  id="server-input" type="text"/>
    <button id="btn-complete" style="margin-top: 15px;">Войти</button>
    <div id="error-message" style="color: red; margin: 10px; border: #ff0000 2px solid"></div>  
  </div>
  `

  const inputName = document.getElementById('name-input')
  const inputServer = document.getElementById('server-input')
  const btn = document.getElementById('btn-complete')
  const err = document.getElementById('error-message')
  err.style.display = 'none'

  btn.addEventListener('click', () => {
    localStorage.setItem('name', inputName.value)
    localStorage.setItem('server', inputServer.value)
    const error = examination(inputName.value, inputServer.value)
    if (error) {
      err.style.display = 'block'
      console.log(error)
      err.innerHTML = error
      setTimeout(() => {
        err.style.display = 'none'
        err.innerHTML = ''
      },2000)
    }
  })

}


// localStorage.setItem('name', '0344865')
// localStorage.setItem('server', 'voip.uiscom.ru')

