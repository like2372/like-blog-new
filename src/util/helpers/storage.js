const storage = window.sessionStorage

export default {
  name: 'storage',

  /**
   * 设置 localStorage
   * @param {string} key 键
   * @param {Object} value 值
   */
  set (key, value) {
    storage.setItem(key, JSON.stringify(value))
  },

  /**
   * 获取 localStorage
   * @param {string} key 键
   * @return {Object}
   */
  get (key) {
    return JSON.parse(storage.getItem(key)) || null
  },

  /**
   * 移除 localStorage
   * @param {string} key 键
   */
  remove (key) {
    storage.removeItem(key)
  }
}
