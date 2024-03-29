class Button {
  constructor(element, funcClick) {
    this.counter = `btn${Math.random() * 1e8}`
    this.success = false
    this.loading = false
    this.template = element
    this.funcClick = funcClick
    this.render()
  }

  render(func = null) {
    this.template.innerHTML = `
    <button id=${this.counter} style=background:${this.success ? "red" :this.loading ? "orange" : "green"}>${this.loading ? 'Вызов...':this.success ? 'Сбросить': 'Позвонить'}</button>
  `
    this.click(func)
  }

  click(func=null) {
    document.getElementById(`${this.counter}`).addEventListener('click', () => {
      this.state = !this.state
      this.counter = `btn${Math.random() * 1e8}`
      if (this?.funcClick) {
        this.funcClick()
      }
      if (func) {
        func()
      }
      this.render()
    })
  }
  setLoading(loading) {
    this.loading = loading
    this.render()
  }

  setSuccess(success) {
    this.success = success
    this.render()
  }
}

export default Button
