import { useState, useEffect } from 'react'

export const useFetch = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = url => {
      isLoading(true)

      try {

      }
      catch (err) {
        setError(err.message)
      }
      const res = await fetch(url)

      if(!res.ok) {
        throw new Error(res.statusText)
      }

      const json = await res.json()


    }
  }, [])

}