import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    window.fetch('https://petgramserver-gp0xvypt8.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        return setCategories(response)
      })
    return () => {
      console.log('ComponentWillUnMounts')
    }
  }, [])
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}