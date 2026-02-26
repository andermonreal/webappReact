// src/core/domain/ports/MovieRepository.js
/**
 * Port interface for Movie persistence
 * Implementations must provide these methods
 */
export const MovieRepositoryPort = {
  getAll: async () => { throw new Error('Not implemented'); },
  getById: async (id) => { throw new Error('Not implemented'); },
  updateRating: async (movieId, userId, rating) => { throw new Error('Not implemented'); },
  getRatingByUser: async (movieId, userId) => { throw new Error('Not implemented'); },
};

// src/core/domain/ports/CommentRepository.js
export const CommentRepositoryPort = {
  getByMovieId: async (movieId) => { throw new Error('Not implemented'); },
  add: async (movieId, userId, userEmail, text) => { throw new Error('Not implemented'); },
};

// src/core/domain/ports/FavoriteRepository.js
export const FavoriteRepositoryPort = {
  getByUserId: async (userId) => { throw new Error('Not implemented'); },
  toggle: async (userId, movie) => { throw new Error('Not implemented'); },
  isFavorite: async (userId, movieId) => { throw new Error('Not implemented'); },
};
