import {initJsSip} from "../init/initJsSip.js";
import {loginInServer} from "../main.js";

export const examination = (name, host, password) => {
  try {
    const ua = initJsSip(name, host,password)
    ua.start();
    ua.on('connected', function (e) {
      if (e.socket)
        console.log('коннект успешен')
      setTimeout(() => {
        location.reload()
        loginInServer()
      },)
    });
  } catch (err) {
    localStorage.removeItem('name')
    localStorage.removeItem('server')
    localStorage.removeItem('password')
    console.log(err.message)
    return err.message
  }
}