import './style.css'
import {render} from "./init/render.js";
import {context} from "./conntext/context.js";
import {JsSipListeners} from "./utils/JsSipListeners.js";
import {initKeyListeners} from "./init/initKeyListeners.js";
import {Login} from "./pages/Login/Login.js";

const history = localStorage?.getItem('history')
if (history) {
  localStorage.setItem('history',JSON.stringify(
      [
        ...JSON.parse(history)
      ]
  ))
} else {
  localStorage.setItem('history', '[]')
}

export const loginInServer = () => {
  console.log('www')
  if (localStorage?.getItem('name') && localStorage?.getItem('server') && localStorage?.getItem('password')) {
    render({context})
    JsSipListeners()
    initKeyListeners()
  } else {
    localStorage.setItem('history', '[]')
    Login()
  }
}

loginInServer()
