import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class FilmGenre extends React.Component {
  state = {
    genres: []
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://api.themoviedb.org/3/genre/movie/list?api_key=3afeb04a1fe8f1b2dc3b55f9ed835c6d')
      this.setState({ genres: response.data.genres })
    } catch (err) {
      console.log(err)
    }
  }

  handleClick = e => {
    localStorage.setItem('genre', e.target.title)
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline genre-page">
            {this.state.genres.map(genre => {
              if (genre.id !== 99) {
                return (
                  <div key={genre.id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile year-card">
                    <Link to="/filmsbygenre">
                      <div className="card year">
                        <h4 onClick={this.handleClick} title={genre.id} className="title has-text-white is-3">{genre.name}</h4>
                      </div>
                    </Link>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default FilmGenre