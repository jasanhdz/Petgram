import React from 'react'
import { FavsWithQuery } from '../containers/GetFavorites'
import { Layout } from '../components/Layout'

const Favs = () => (
  <Layout show title='Tus favoritos' subtitle='aquí puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>

)

export default Favs