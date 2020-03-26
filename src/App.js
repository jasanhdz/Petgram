import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <Login path='/login' />}
        {!isAuth && <Register path='/register' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        {isAuth && <Redirect from='/register' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
