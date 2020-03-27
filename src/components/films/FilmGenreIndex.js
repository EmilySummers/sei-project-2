import React from 'react'
import axios from 'axios'
import FilmCard from './FilmCard'

const key = process.env.MOVIE_KEY

class FilmGenreIndex extends React.Component {
  state = {
    films: [],
    genre: ''
  }

  componentDidMount() {
    const genre = localStorage.getItem('genre')
    this.setState({ genre }, () => {
      this.getFilm()
    })
  }

  async getFilm() {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${this.state.genre}&api_key=${key}`)
      this.setState({ films: res.data.results })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.films.map(film => <FilmCard key={film.id} {...film} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default FilmGenreIndex