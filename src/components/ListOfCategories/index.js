import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { useFetchData } from '../../hooks/useFetchData'

export const ListOfCategories = () => {
  const [categories, loading, error] = useFetchData('https://petgramserver-gp0xvypt8.now.sh/categories')
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
    <List fixed={fixed}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  if (error) {
    return <h2 style={{ color: 'red', textAlign: 'center' }}>{error}</h2>
  }

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
