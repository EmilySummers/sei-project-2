import React from 'react'
import axios from 'axios'

class FilmShow extends React.Component {
  state = {
    film: [],
    genres: []
  }

  async componentDidMount() {
    const filmId = this.props.match.params.id
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=3afeb04a1fe8f1b2dc3b55f9ed835c6d`)
      this.setState({ film: res.data })
      this.getGenres()
    } catch (err) {
      console.log(err)
    }
  }

  getGenres = () => {
    const newGenres = this.state.film.genres.map(genre => {
      return genre.name
    })
    this.setState({ genres: newGenres })
  }

  render() {
    const { title, poster_path, overview, tagline, backdrop_path, runtime, vote_average, vote_count, id } = this.state.film
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half-desktop">
              <img className="show-image" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt={title} />
            </div>
            <div className="column is-half-desktop is-full-tablet is-full-mobile second">
              <div className="divide">
                <h2 className="title has-text-white is-2 show-title">{title}</h2>
                <div className="score">
                  <div className="score-cicle">
                  <p className="score-num">{vote_average}</p>
                  <p className="subtitle has-text-grey"><span className="has-text-weight-bold">{vote_count}</span> reviews</p>
                  </div>
                </div>
              </div>
              <img src="../assets/underline.png" alt="underline" />
              
              <p className="subtitle has-text-white">{overview}</p>
              <p className="subtitle has-text-white has-text-weight-bold">{runtime} mins</p>
              <div className="genres">
              {this.state.genres.map((genre, i) => (
                <p key={i} className="has-text-white has-text-weight-bold genre">{genre}</p>
              ))}
              </div>
              <div className="slogan" style={{ backgroundImage: 'url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + `${backdrop_path})`, backgroundSize: 'cover' }}>
                <p>{tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default FilmShow