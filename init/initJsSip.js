import * as JsSIP from "jssip";

export const initJsSip = (name, host, password) => {
  const socket = new JsSIP.WebSocketInterface(`wss://${host}`);
  const configuration = {
    sockets  : [ socket ],
    uri      : `sip:${name}@${host}`,
    password : password
  };

  const ua = new JsSIP.UA(configuration);
  return ua
}
