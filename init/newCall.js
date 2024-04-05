import {context} from "../conntext/context.js";
import {render} from "./render.js";
import {ua} from "../utils/JsSipListeners.js";
import {startTimer, stopTimer} from "./timer.js";

export let currentAnswer;
const ringtone = new Audio('audio/phone.mp3');
ringtone.loop = true

export const newCall = () => {

  // Обработчик события для нового сеанса звонка
  ua.on('newRTCSession', (data) => {
    console.log('вам поступил вызов')

    const session = data.session;

    const remoteIdentity = session._remote_identity;
    context.callUser.name = remoteIdentity._display_name || remoteIdentity._uri._user
    currentAnswer = session

    context.page = 'callPage'
    if (session.direction === "incoming") {
      ringtone.play();
      context.btnCall = 'youCall'
      context.callUser.status = 'toMe'
      render({context})
    } else if (session.direction === "outgoing") {
      context.callUser.status = 'i'
      context.btnCall = 'loading'
      render({context})
    }
    // Ваш код для обработки входящего звонка здесь
    // Например, принять звонок
    // Добавьте дополнительные обработчики событий для звонка
    session.on('accepted', () => {
      ringtone.pause();
      const remoteStream = session.connection.getRemoteStreams()[0]
      console.log('Аудиопоток установлен:', remoteStream);

      const audioElement = document.createElement('audio');
      audioElement.srcObject = remoteStream;
      audioElement.play();

      console.log('Звонок принят');
      startTimer()
      context.btnCall = 'call'
      render({context})
    });


    session.on('ended', () => {
      ringtone.pause();

      const remoteStream = session.connection.getRemoteStreams()[0];
      if (remoteStream) {
        remoteStream.getTracks().forEach(function(track) {
          track.stop();
        })
      };

      stopTimer()
      const history = JSON.parse(localStorage.getItem('history'))
      history.push(context.callUser)
      localStorage.setItem('history', JSON.stringify(history))
      context.callUser = {}
      console.log('Звонок завершен');
      context.btnCall = 'default'
      render({context})
    });

    session.on('failed', () => {
      ringtone.pause();
      context.btnCall = 'default'
      console.log('Звонок завершился неудачно');
      context.btnCall = 'default'
      context.callUser.status = 'failed'
      const history = JSON.parse(localStorage.getItem('history'))
      history.push(context.callUser)
      localStorage.setItem('history', JSON.stringify(history))
      context.callUser = {}
      render({context})
    });
  });
}