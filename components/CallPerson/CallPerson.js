
export const CallPerson = ({context}) => {
  const html = `
  <div class="box" >
    <div class="person-name">${context.callUser.name}</div>  
    <div style="display:flex; justify-content:center;">
        <div class="icon-container">
            <span class="person-icon">🙂</span>
        </div>
    </div>
    ${context.callUser.time ? (
        `
        <p class="timer">
            ${context.callUser.time}
        </p>    
        `
  )
  :
  '<p class="timer">00:00:00</p>'
  }  
  </div>
  `
  return html
}