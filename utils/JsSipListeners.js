import {initJsSip} from "../init/initJsSip.js";
import {newCall} from "../init/newCall.js";

const name = localStorage.getItem('name')
const host = localStorage.getItem('server')
export const ua = initJsSip(name, host)

export const JsSipListeners = () => {
  ua.start();
  ua.on('connected', function (e) {
    console.log('коннект успешен')
  });
  newCall()
}
