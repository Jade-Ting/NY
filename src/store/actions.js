export default {
  setCurindex: ({
    commit
  }, index) => {
    commit('setCurindex', index)
  },
  setUsername: ({
    commit
  }, username) => {
    commit('setUsername', username)
  },
  setUserinfo: ({
    commit
  }, userinfo) => {
    commit('setUserinfo', userinfo)
  },
  hasLogin: ({
    commit
  }) => {
    if (window.sessionStorage.getItem('username') != null && window.sessionStorage.getItem('password') != null) {
      commit('hasLogin')
    } else {
      console.log('没有登录')
    }
  },
  setDress: ({
    commit
  }, dress) => {
    commit('setDress', dress)
  },
  setFabuinfo: ({
    commit
  }, info) => {
    commit('setFabuinfo', info)
  },
  cutFabuinfo: ({
    commit
  }, index) => {
    commit('cutFabuinfo', index)
  },
  setFabunum: ({
    commit
  }) => {
    commit('setFabunum')
  },
  cutFabunum: ({
    commit
  }) => {
    commit('cutFabunum')
  },
}
