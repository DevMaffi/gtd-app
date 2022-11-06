import { useState } from 'react'

export type UseHttpReturnType = [() => Promise<void>, boolean, string]

const useHttp = (
  callback: (...args: any[]) => Promise<void>
): UseHttpReturnType => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const httpFetch = async (...args: any[]): Promise<void> => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch (error) {
      if (error instanceof Error) setError(error.message)
      setError('Unknown Error')
    } finally {
      setIsLoading(false)
    }
  }

  return [httpFetch, isLoading, error]
}

export default useHttp
