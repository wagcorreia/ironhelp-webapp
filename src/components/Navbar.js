import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/Login">
          <img
            src="../images/logoIronhack.png"
            alt="IronHack"
            width="30"
            height="24"
          />
        </Link>
        <Link className="navbar-brand" to="">
          <i class="fa fa-fw fa-search"></i> Search
        </Link>
        <Link className="navbar-brand" to="">
          <i class="fa fa-fw fa-envelope"></i> Contact
        </Link>
        <Link className="navbar-brand" to="/Login">
          <i class="fa fa-fw fa-user"></i> Login
        </Link>
        <Link className="navbar-brand" to="/SignUp">
          <i class="fa fa-fw fa-user"></i> SignIn
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
