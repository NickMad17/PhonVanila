import Button from "../models/Button.js";
import {initJsSip} from "../init/initJsSip.js";

export const CallBtn = (value='') => {
  console.log(value)
  let btn = new Button(document.getElementById('btn-box'))

  const ua = initJsSip('0344865', 'voip.uiscom.ru')

  ua.start();
  ua.on('connected', function (e) {
    console.log('коннект успешен')
  });

// Register callbacks to desired call events
  const eventHandlers = {
    'progress': function (e) {
      console.log('call is in progress');
      btn.setLoading(true)
    },
    'failed': function (e) {
      console.log('call failed with cause: ' + e.data?.cause);
      btn.setSuccess(false)
      btn.setLoading(false)
    },
    'ended': function (e) {
      console.log('call ended with cause: ' + e.data?.cause);
      btn.setLoading(false)
      btn.setSuccess(false)
      btn.render(() => {
        ua.call(`sip:${value}@voip.uiscom.ru`, options)
      })
    },
    'confirmed': function (e) {
      console.log('call confirmed');
      btn.setLoading(false)
      btn.setSuccess(true)
      btn.render(() => {
        ua.stop()
      })
    }
  };

  const options = {
    'eventHandlers': eventHandlers,
    'mediaConstraints': {'audio': true}
  };

  btn.render(() => {
    ua.call(`sip:${value}@voip.uiscom.ru`, options)
  })
}
