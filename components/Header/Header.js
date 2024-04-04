export const Header = ({context}) => {
  const html = `
  <div class="nav__box">
      <button class="nav ${context.page === 'callPage' && 'active'}" id="call-page">Позвонить</button>
      <button class="nav ${context.page === 'historyPage' && 'active'}" id="history-page">История</button>
    </div>
  `
  return html
}