import getters from './getters.js';
const state = {
  curindex: 0,
  username: '',
  userinfo: {},
  dress: {},
  fabuinfo: []
}
const mutations = {
  setCurindex: (state, index) => {
    state.curindex = index
  },
  setUsername: (state, username) => {
    state.username = username
  },
  setUserinfo: (state, userinfo) => {
    window.sessionStorage.setItem('useravatar', userinfo.avatar)
    state.userinfo = userinfo
    console.log(state.userinfo)
  },
  hasLogin: (state) => {
    state.isLogin = true
  },
  setDress: (state, dress) => {
    state.dress = dress
  },
  setFabuinfo: (state, info) => {
    console.log(state, info)
    state.fabuinfo.push(info)
  },
  cutFabuinfo: (state, index) => {
    state.fabuinfo.splice(index, 1)
    state.fabunum--
    console.log(state.fabuinfo)
  },
  setFabunum: (state) => {
    state.fabunum++
  },
  cutFabunum: (state) => {
    state.fabunum--
  },
}
export default {
  getters,
  state,
  mutations
}
