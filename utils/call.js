import {ua} from "./JsSipListeners.js";
import {context} from "../conntext/context.js";
import {options} from "./JsSipOptions.js";

export const call = () => {
  ua.call(`sip:${context.numbers}@${context.user.server}`, options)

}