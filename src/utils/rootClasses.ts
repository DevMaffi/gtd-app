import { Bind } from 'types/decorators'

export interface AddMethodArgs {
  condition: boolean
  type: string
  className: string
  alwaysPrimary?: boolean
  remove?: string[]
}

export interface RemoveMethodArgs {
  condition: boolean
  types: string[]
  alwaysPrimary?: boolean
}

export interface RootClassesService<T> {
  add(args: AddMethodArgs): T
  addPrimary(className: string): T
  remove(args: RemoveMethodArgs): T
  toClassNameString(): string
}

class RootClasses implements RootClassesService<RootClasses> {
  private primary = true
  private cl: { [type: string]: string } = {}

  constructor(baseClasses: string) {
    this.cl.base = baseClasses
  }

  @Bind
  add({ condition, type, className, alwaysPrimary, remove }: AddMethodArgs) {
    if (!condition) return this
    if (!alwaysPrimary) this.primary = false
    if (remove) console.log('remove')

    this.cl[type] = className

    return this
  }

  @Bind
  addPrimary(className: string) {
    if (this.primary) this.cl.primary = className
    return this
  }

  @Bind
  remove({ condition, types, alwaysPrimary }: RemoveMethodArgs) {
    if (!condition) return this
    if (!alwaysPrimary) this.primary = false

    types.forEach(t => delete this.cl[t])

    return this
  }

  @Bind
  toClassNameString() {
    return Object.keys(this.cl)
      .reduce((acc, key) => (acc += `${this.cl[key]} `), '')
      .trim()
  }
}

export default RootClasses
