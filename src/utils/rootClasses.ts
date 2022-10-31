import { Bind } from 'types/decorators'

interface AddMethodArgs {
  condition: boolean
  type: string
  className: string
  alwaysPrimary?: boolean
  remove?: string[]
}

interface RemoveMethodArgs {
  condition: boolean
  types: string[]
  alwaysPrimary?: boolean
}

export interface RootClassesService {
  add(args: AddMethodArgs): this
  addPrimary(className: string): this
  remove(args: RemoveMethodArgs): this
  toClassNameString(): string
}

class RootClasses implements RootClassesService {
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
