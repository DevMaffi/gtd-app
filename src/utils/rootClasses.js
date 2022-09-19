class RootClasses {
  #primary = true
  #classes = []

  constructor(baseClasses) {
    this.#classes = baseClasses
  }

  add = ({ condition, className, alwaysPrimary, remove }) => {
    if (!condition) return this
    if (!alwaysPrimary) this.#primary = false
    if (remove)
      this.remove({ condition: true, className: remove, alwaysPrimary })

    this.#classes.push(className)

    return this
  }

  addPrimary = className => {
    if (this.#primary) this.#classes.push(className)
    return this
  }

  remove = ({ condition, className, alwaysPrimary }) => {
    if (!condition) return this
    if (!alwaysPrimary) this.#primary = false

    this.#classes = this.#classes.filter(c => c !== className)

    return this
  }

  toClassNameString() {
    return this.#classes.join(' ')
  }
}

export default RootClasses
