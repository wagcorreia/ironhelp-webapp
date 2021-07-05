import React from 'react'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        <Navbar exact path="/" component={Navbar}></Navbar>
        <Switch>
          {/* <Route exact path="/" component={Navbar} /> */}
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
