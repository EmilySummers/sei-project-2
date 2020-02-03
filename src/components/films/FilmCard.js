import React from 'react'
import { Link } from 'react-router-dom'


const FilmCard = ({ id, title, poster_path, vote_average }) => (
  
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/films/${id}`}>
      <div className="card">
        <div className="card-header film-header">
          <h4 className="card-header-title title is-4 has-text-white">{title}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="title is-4 has-text-white">★ {vote_average}</h5>
        </div>
      </div>
    </Link>
  </div>
)

export default FilmCard