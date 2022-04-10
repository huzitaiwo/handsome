import { useEffect, useState } from 'react'
import { Firestore } from '../firebase/config'

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // realtime data for document
  useEffect(() => {
    setIsLoading(true)
    const ref = Firestore.collection(collection).doc(id)

    const unsubscribe = ref.onSnapshot(snapshot => {
      if (snapshot.data()) {
        setIsLoading(false)
        setDocument({ ...snapshot.data(), id: snapshot.id })
        setError(null)
      }
      else {
        setError('no such document')
      }
    }, (err) => {
      setIsLoading(false)
      setError('failed to get document')
      console.log(err.message)
    })

    return () => unsubscribe()

  }, [collection, id])

  return { document, error, isLoading }

} 