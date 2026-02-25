// src/presentation/components/movies/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const MovieCard = ({ movie }) => {
  const { id, title, year, genre, posterUrl, averageRating, totalRatings } = movie;

  return (
    <div className="card h-100 border-0 shadow-sm movie-card">
      <div className="position-relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
        <img
          src={posterUrl || 'https://via.placeholder.com/300x450?text=Sin+Imagen'}
          alt={`Póster de ${title}`}
          className="card-img-top w-100 h-100 object-fit-cover movie-poster"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450?text=Sin+Imagen';
          }}
        />
        <div className="movie-overlay d-flex align-items-end p-3">
          <Link
            to={`/movies/${id}`}
            className="btn btn-light btn-sm w-100 fw-semibold"
          >
            <i className="bi bi-play-fill me-1"></i>Ver ficha
          </Link>
        </div>
        <span className="badge bg-primary position-absolute top-0 start-0 m-2">{year}</span>
      </div>
      <div className="card-body d-flex flex-column gap-1 p-3">
        <h6 className="card-title mb-0 fw-bold text-dark">
          <Link to={`/movies/${id}`} className="text-decoration-none text-dark stretched-link-title">
            {title}
          </Link>
        </h6>
        <span className="badge bg-light text-secondary border small align-self-start">{genre}</span>
        <div className="d-flex align-items-center gap-2 mt-auto pt-1">
          <StarRating value={Math.round(averageRating)} readOnly size="sm" />
          <span className="text-muted small">
            {averageRating > 0
              ? `${averageRating.toFixed(1)} (${totalRatings})`
              : 'Sin votos'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
