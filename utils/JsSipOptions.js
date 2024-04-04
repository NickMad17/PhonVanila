import {context} from "../conntext/context.js";
import {render} from "../init/render.js";

const eventHandlers = {
  'progress': function (e) {
    console.log('call is in progress');
    context.btnCall = 'loading'
    render({context})
  },
  'failed': function (e) {
    console.log('call failed with cause: ' + e.data?.cause);
    context.btnCall = 'default'
    render({context})
  },
  'ended': function (e) {
    console.log('call ended with cause: ' + e.data?.cause);
    context.btnCall = 'call'
    render({context})
  },
  'confirmed': function (e) {
    console.log('call confirmed');
  }
};

export const options = {
  'eventHandlers': eventHandlers,
  'mediaConstraints': { 'audio': { 'mandatory': { 'echoCancellation': true } } }
};