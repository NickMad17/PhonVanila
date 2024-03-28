import * as JsSIP from "jssip";

export function setupCounter() {
  const socket = new JsSIP.WebSocketInterface('wss://voip.uiscom.ru');
  const configuration = {
    sockets  : [ socket ],
    uri      : 'sip:0344864@voip.uiscom.ru',
    password : 'g22ZNzHuh4'
  };

  const ua = new JsSIP.UA(configuration);

  ua.start();
  ua.on('connected', function(e){
    console.log('коннект успешен')
  });

// Register callbacks to desired call events
  const eventHandlers = {
    'progress': function(e) {
      console.log('call is in progress');
    },
    'failed': function(e) {
      console.log('call failed with cause: '+ e.data?.cause);
    },
    'ended': function(e) {
      console.log('call ended with cause: '+ e.data?.cause);
    },
    'confirmed': function(e) {
      console.log('call confirmed');
    }
  };

  const options = {
    'eventHandlers'    : eventHandlers,
    'mediaConstraints' : { 'audio': true }
  };


  const btn =  document.getElementById('call')

  btn.addEventListener('click', () => {
    ua.call('sip:0344865@voip.uiscom.ru', options)
  })
}
