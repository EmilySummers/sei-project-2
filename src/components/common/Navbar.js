import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item has-text-white title" to="/">
              <div className="logo">
                <p className="title">20</p>
              </div>
              TopTwenty</Link>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item has-text-white title is-4" to="/years">Films by Year</Link>
            <Link className="navbar-item has-text-white title is-4" to="/genres">Films by Genre</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar