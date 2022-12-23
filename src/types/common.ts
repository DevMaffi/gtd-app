export type ArrowFn<T = any> = (...args: any[]) => T

export type HttpFetchCallback<T> = (...args: any[]) => Promise<T>
