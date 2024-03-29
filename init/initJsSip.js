import * as JsSIP from "jssip";

export const initJsSip = (name, host) => {
  const socket = new JsSIP.WebSocketInterface(`wss://${host}`);
  const configuration = {
    sockets  : [ socket ],
    uri      : `sip:${name}@${host}`,
    password : 'g22ZNzHuh4'
  };

  const ua = new JsSIP.UA(configuration);
  return ua
}
