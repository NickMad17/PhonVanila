import {initJsSip} from "../init/initJsSip.js";
import {newCall} from "../init/newCall.js";

const name = localStorage.getItem('name')
const host = localStorage.getItem('server')
const password = localStorage.getItem('password')
export const ua = initJsSip(name, host, password)

export const JsSipListeners = () => {
  ua.start();
  ua.on('connected', function (e) {
    console.log('коннект успешен')
  });
  newCall()
}
