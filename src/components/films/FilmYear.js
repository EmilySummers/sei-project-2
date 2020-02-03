import React from 'react'
import { Link } from 'react-router-dom'

class FilmYear extends React.Component {
  state = {
    year: ''
  }

  handleClick = e => {
    localStorage.setItem('year', e.target.innerHTML)
  }

  createCards = () => {
    const years = []
    for (let i = 2019; i >= 2010; i--) {
      years.push(
        <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile year-card">
          <Link to="/films">
            <div className="card year">
              <h4 onClick={this.handleClick} className="title has-text-white is-1">{i}</h4>
            </div>
          </Link>
        </div>
      )
    }
    return years
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline year-page">
            {this.createCards()}
          </div>
        </div>
      </section>
    )
  }
}

export default FilmYear