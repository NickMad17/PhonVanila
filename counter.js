import * as JsSIP from "jssip";

export function setupCounter() {
  const socket = new JsSIP.WebSocketInterface('wss://voip.uiscom.ru');
  const configuration = {
    sockets  : [ socket ],
    uri      : '0344865@voip.uiscom.ru',
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

  // ua.on('newRTCSession', (data) => {
  //   console.log('вас вызывают')
  //   const session = data.session;
  //
  //   // Ваш код для обработки входящего звонка здесь
  //   // Например, принять звонок
  //   // session.answer();
  //
  //   // Добавьте дополнительные обработчики событий для звонка
  //   session.on('accepted', () => {
  //     console.log('Звонок принят');
  //   });
  //
  //   session.on('ended', () => {
  //     console.log('Звонок завершен');
  //   });
  //
  //   session.on('failed', () => {
  //     console.log('Звонок завершился неудачно');
  //   });
  // });


  const btn =  document.getElementById('call')

  btn.addEventListener('click', async () => {
    await ua.call('0344864@voip.uiscom.ru', options)
  })
}
