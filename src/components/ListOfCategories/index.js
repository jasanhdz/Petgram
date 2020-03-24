import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgramserver-gp0xvypt8.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
    return () => {
      console.log('ComponentWillUnMounts')
    }
  }, [])

  return { categories, loading }
}


export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed} >
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  if (loading) {
    return 'cargando...'
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}