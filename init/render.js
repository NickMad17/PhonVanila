import {CallPageListeners} from "../pages/CallPage/CallPageListeners.js";
import {headerListeners} from "../components/Header/headerListeners.js";
import {Header} from "../components/Header/Header.js";
import {CallPage} from "../pages/CallPage/CallPage.js";
import {HistoryPage} from "../pages/HistoryPage/HistoryPage.js";
import {callBtnListeners} from "../components/CallBtn/callBtnListeners.js";
import {historyPageListeners} from "../pages/HistoryPage/historyPageListeners.js";

export const render = ({context}) => {
  const {page} = context
  document.querySelector('#app').innerHTML = `
    <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; gap: 15px">
      <div>
      ${Header({context})}
      ${context.page === 'callPage' ? CallPage({context}) : HistoryPage({context})
    }
      </div>
      <button id="exit">выйти</button>
    </div>
  `
  headerListeners()

  if (page === 'callPage') {
    if (context.btnCall === 'default'){
      CallPageListeners()
    }
    callBtnListeners()
  } else {
    historyPageListeners()
  }
}


