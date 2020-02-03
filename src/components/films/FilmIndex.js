import React from 'react'
import axios from 'axios'
import FilmCard from './FilmCard'

class FilmIndex extends React.Component {
  state = {
    films: [],
    year: ''
  }

  componentDidMount() {
    const year = localStorage.getItem('year')
    this.setState({ year }, () => {
      this.getFilm()
    })
  }

  async getFilm() {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_year=${this.state.year}&api_key=3afeb04a1fe8f1b2dc3b55f9ed835c6d`)
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

export default FilmIndex