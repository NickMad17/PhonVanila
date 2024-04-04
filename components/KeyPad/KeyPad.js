export const KeyPad = ({context}) => {
  const html = `
  <div class="box" >
        <input value="${context.numbers}" class="input-numb" id="input" />
        <div class="numb__box">
          <button class="numb">1</button>
          <button class="numb">2</button>
          <button class="numb">3</button>
          <button class="numb">4</button>
          <button class="numb">5</button>
          <button class="numb">6</button>
          <button class="numb">7</button>
          <button class="numb">8</button>
          <button class="numb">9</button>
          <button id="clear">clear</button>
          <button class="numb">0</button>
          <button id="erase"><-</button>
        </div>
        <div style="margin-top: 10px" id="btn-box"></div>
      </div>
  `
  return html
}