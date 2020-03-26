import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { favs } = data

  return favs.map(fav => (<img key={fav.id} src={fav.src} />))
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS}>
    {renderProp}
  </Query>
)