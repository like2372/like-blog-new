import storage from './helpers/storage'

const USER = 'user'
const TOKEN = 'token'
const REFRESH_TOKEN = 'refreshToken'

export default {
  name: 'auth',

  /**
   * 获取 auth，返回：管理员信息和 token
   * @return {Object}
   */
  get () {
    return {
      [USER]: storage.get(USER),
      [TOKEN]: storage.get(TOKEN),
      [REFRESH_TOKEN]: storage.get(REFRESH_TOKEN)
    }
  },

  /**
   * 登录
   * @param {string} user 登录用户
   * @param {string} token 登录 token
   */
  login ({user, token, refreshToken}) {
    storage.set(USER, user)
    storage.set(TOKEN, token)
    storage.set(REFRESH_TOKEN, refreshToken)
  },

  /**
   * 登出
   */
  logout () {
    storage.remove(USER)
    storage.remove(TOKEN)
    storage.remove(REFRESH_TOKEN)
  },

  refresh (token) {
    storage.set(TOKEN, token)
  },
  /**
   * 是否已登录
   * @return {boolean}
   */
  loggedIn () {
    return !!storage.get(USER) && !!storage.get(TOKEN) && !!storage.get(REFRESH_TOKEN)
  }
}
