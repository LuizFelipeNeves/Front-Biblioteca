import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

export const useDataApi = (initialUrl, initialData = []) => {
  const [data, setData] = useState(initialData)
  const [url, setUrl] = useState(initialUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios(url)
        console.log(result)
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [url])
  return [{ data, isLoading, isError }, setUrl, setData]
}
