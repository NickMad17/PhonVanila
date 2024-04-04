export const context = {
  user: {
    name: localStorage?.getItem('name'),
    server: localStorage?.getItem('server')
  },
  callUser: {
    name: null,
    status: null,
    time: null
  },
  btnCall: 'default', // default | call | loading | youCall
  page: 'callPage', // callPage | historyPage
  numbers: ''
}

