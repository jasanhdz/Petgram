import { useState, useEffect } from 'react'

export const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    window.fetch(url)
      .then(res => res.json())
      .then(response => {
        setData(response)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
        setError("Hubo un error al obtener los datos, verifique la url o intente más tarde")
      })
    return () => {
      console.log('ComponentWillUnMount')
    }
  }, [])

  return [data, loading, error]
}