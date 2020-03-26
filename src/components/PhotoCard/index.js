import React from 'react'
import { Link } from '@reach/router'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ImgWrapper, Img, Article } from './styles'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  const toggleButton = (toggleLike) => {
    const handleFavClick = () => {
      toggleLike({
        variables: {
          input: { id }
        }
      })
    }
    return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
  }

  return (
    <Article ref={element}>
      {
        show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {toggleButton}
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
}


PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} Value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} Value must be greater than 0`)
    }
  }
}