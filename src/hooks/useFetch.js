import { useState, useEffect } from 'react'

export const useFetch = url => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      isLoading(true)

      try {
        const res = await fetch(url)

        if(!res.ok) {
          throw new Error(res.statusText)
        }

        const json = await res.json()

        setIsLoading(false)
        setError(null)
        setData(json)
      }
      catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

}