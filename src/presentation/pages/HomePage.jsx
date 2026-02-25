// src/presentation/pages/HomePage.jsx
import React, { useState, useMemo } from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieCard from '../components/movies/MovieCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

const GENRES = ['Todos', 'Drama', 'Crimen', 'Acción', 'Ciencia Ficción', 'Thriller', 'Fantasía', 'Historia', 'Romance', 'Aventura'];

const HomePage = () => {
  const { movies, loading, error } = useMovies();
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [sortBy, setSortBy] = useState('title');

  const filteredMovies = useMemo(() => {
    let result = [...movies];

    if (search.trim()) {
      const lower = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(lower) ||
          m.director.toLowerCase().includes(lower) ||
          m.genre.toLowerCase().includes(lower)
      );
    }

    if (selectedGenre !== 'Todos') {
      result = result.filter((m) => m.genre.includes(selectedGenre));
    }

    result.sort((a, b) => {
      if (sortBy === 'rating') return (b.averageRating || 0) - (a.averageRating || 0);
      if (sortBy === 'year') return b.year - a.year;
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [movies, search, selectedGenre, sortBy]);

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-hero py-5 mb-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold text-dark mb-2">
            <i className="bi bi-camera-reels me-3 text-primary"></i>
            Catálogo de Películas
          </h1>
          <p className="text-muted fs-5 mb-0">
            Descubre, puntúa y guarda tus películas favoritas
          </p>
        </div>
      </section>

      <div className="container pb-5">
        {/* Filter bar */}
        <div className="card border-0 shadow-sm mb-5 p-4">
          <div className="row g-3 align-items-end">
            <div className="col-md-5">
              <label className="form-label fw-semibold small text-muted">Buscar</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <i className="bi bi-search text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Título, director, género..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button className="btn btn-light border" onClick={() => setSearch('')}>
                    <i className="bi bi-x"></i>
                  </button>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label fw-semibold small text-muted">Género</label>
              <select
                className="form-select"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                {GENRES.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold small text-muted">Ordenar por</label>
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="title">Título A–Z</option>
                <option value="year">Más recientes</option>
                <option value="rating">Mejor valoradas</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        {!loading && (
          <p className="text-muted small mb-4">
            <i className="bi bi-collection me-2"></i>
            {filteredMovies.length === movies.length
              ? `${movies.length} películas en el catálogo`
              : `${filteredMovies.length} resultado${filteredMovies.length !== 1 ? 's' : ''} encontrado${filteredMovies.length !== 1 ? 's' : ''}`}
          </p>
        )}

        {/* Content */}
        {loading && <LoadingSpinner message="Cargando catálogo..." />}

        {error && (
          <div className="alert alert-danger">
            <i className="bi bi-exclamation-triangle me-2"></i>
            Error al cargar las películas: {error}
          </div>
        )}

        {!loading && !error && filteredMovies.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-film fs-1 text-muted d-block mb-3 opacity-25"></i>
            <h5 className="text-muted">No se encontraron películas</h5>
            <p className="text-muted small">Prueba con otros filtros de búsqueda</p>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => { setSearch(''); setSelectedGenre('Todos'); }}
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {!loading && !error && filteredMovies.length > 0 && (
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-4">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="col">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
