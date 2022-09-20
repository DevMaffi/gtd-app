class RootClasses {
  /**
   * @property {boolean} primary - Tells "addPrimary" method should it provide
   * primary "className" prop to results object or not
   */
  #primary = true

  /**
   * @property {Object} cl - Contains results object model of classNames
   */
  #cl = {}

  /**
   * Creates an instance of RootClasses
   * @param {string} baseClasses - String of base class names splitted by space
   */
  constructor(baseClasses) {
    this.#cl.base = baseClasses
  }

  /**
   * Object of add function arguments
   * @typedef {Object} AddProps
   * @property {boolean} condition - Should to add "className" or not
   * @property {string} type - Defines a key where to store "className"
   * @property {string} className - String of class names splitted by space
   * @property {boolean} alwaysPrimary - Should not the new "className"
   * deprecate primary styles
   * @property {Array<string>} remove - Defines an array of keys which should be
   * removed
   */

  /**
   * @property {Function} add - Adds "className" to results object if
   * "condition" it true
   *
   * @param {AddProps} props
   * @returns {RootClasses} - Current instance of RootClasses
   */
  add = ({ condition, type, className, alwaysPrimary, remove }) => {
    if (!condition) return this
    if (!alwaysPrimary) this.#primary = false
    if (remove) this.remove({ condition: true, types: remove, alwaysPrimary })

    if (!type) {
      console.warn(
        '[RootClasses] => Provide a "type" prop. "className" value was added to extra section, where it can be rewritten by other extras.'
      )
      this.#cl.extra = className
    } else this.#cl[type] = className

    return this
  }

  /**
   * @property {Function} addPrimary - Adds "className" to results object if
   * "#primary" class field is true
   *
   * @param {string} className - String of class names splitted by space
   * @returns {RootClasses} - Current instance of RootClasses
   */
  addPrimary = className => {
    if (this.#primary) this.#cl.primary = className
    return this
  }

  /**
   * Object of remove function arguments
   * @typedef {Object} RemoveProps
   * @property {boolean} condition - Should to remove "className" or not
   * @property {Array<string>} types - Defines an array of keys which should be
   * removed
   * @property {boolean} alwaysPrimary - Should not the leak of class names
   * deprecate primary styles
   */

  /**
   * @property {Function} remove - Removes "type" keys from results object by
   * passed in arguments arrays if "condition" is true
   *
   * @param {RemoveProps} props
   * @returns {RootClasses} - Current instance of RootClasses
   */
  remove = ({ condition, types, alwaysPrimary }) => {
    if (!condition) return this
    if (!alwaysPrimary) this.#primary = false

    types.forEach(t => delete this.#cl[t])

    return this
  }

  /**
   * @property {Function} toClassNameString - Converts results object into a
   * trimmed string, contains its properties split with space
   *
   * @returns {string} - String which represents results object
   */
  toClassNameString() {
    return Object.keys(this.#cl)
      .reduce((sum, key) => (sum += `${this.#cl[key]} `), '')
      .trim()
  }
}

export default RootClasses
