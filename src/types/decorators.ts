export function Bind(
  target: any,
  propName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value

  return {
    configurable: true,
    enumerable: false,
    get() {
      return original.bind(this)
    },
  }
}
