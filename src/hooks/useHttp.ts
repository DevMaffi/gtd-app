import { useState } from 'react'
import { HttpFetchCallback } from 'types/common'

export type UseHttpReturnType = [() => Promise<void>, boolean, string]

const useHttp = (callback: HttpFetchCallback<void>): UseHttpReturnType => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const httpFetch = async (...args: any[]): Promise<void> => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch (error) {
      if (error instanceof Error) setError(error.message)
      else setError('Unknown Error')
    } finally {
      setIsLoading(false)
    }
  }

  return [httpFetch, isLoading, error]
}

export default useHttp
