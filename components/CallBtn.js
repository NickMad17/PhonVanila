import Button from "../models/Button.js";

export const CallBtn = () => {
  let btn = new Button(document.getElementById('btn-box'))
  btn.setLoading(true)
  setTimeout(() => {
    btn.setLoading(false)
  },3000)
  btn.setLoading(true)
  setTimeout(() => {
    btn.setLoading(false)
    btn.setSuccess(true)
  },3000)
}