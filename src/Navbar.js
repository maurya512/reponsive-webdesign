import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* fixated the col display to 10 to ensure they stay in the center of the screen */}
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">ESSNTL</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  {/* spaces out the navbar items to the right */}
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                    {/* Links to various components */}
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
