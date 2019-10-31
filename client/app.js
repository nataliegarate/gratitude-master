import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {Login} from './components/auth-form'
import Form from './components/landingPage'

const App = () => {
  return (
    <div id="inner-app">
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
