export const HistoryPage = () => {
  const history =  JSON.parse(localStorage.getItem('history')).reverse()
  const html = `
      <div class="history-box">
        ${history.map(el => {
          if (el.status !== 'failed') {
            const html = `
            <div class="history-item">
              <p class="history-name">${el.name}</p>
              <div class="history-info">
                  <p class="history-time">${el.time ? el.time: ''}</p>
                  <p class="history-status" style="color: ${el.status === 'i' ? 'green':el.status === 'toMe'? 'blue': 'red'}">${el.status === 'i' ? '->':el.status === 'toMe'? '<-': 'X'} </p>
              </div>
          </div>
          `
            return html
          }
        }).join("")}
        </div>
        <button id="reset-btn" style="margin-top: 20px;">Очистить</button>
  `

  return html
}