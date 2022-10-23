class UserService {
  #userId
  #name
  #lastName
  #email
  #password

  /**
   * @param {Object} args
   * @param {String} args.userId
   * @param {String} args.name
   * @param {String} args.lastName
   * @param {String} args.email
   * @param {String} args.password
   * @param {String} args.role
   * @param {Integer} args.balance
   */
  constructor(args = {}) {
    const {
      userId = '',
      name = '',
      lastName = '',
      email = '',
      password = '',
    } = args

    this.#userId = userId
    this.#name = name
    this.#lastName = lastName
    this.#email = email
    this.#password = password
  }
}

module.exports = UserService