const express = require('express');
const router = express.Router();

const {
  filterGenre,
  tambahMovie,
  ambilMovie,
  ambilMovieID,
  ubahMovie,
  hapusMovie,
  filterSearch,
} = require('../controllers/movie.controller');

router.get('/', ambilMovie);
router.get('/search', filterSearch);
router.get('/filter', filterGenre);
router.get('/:id', ambilMovieID);
router.post('/', tambahMovie);
router.patch('/:id', ubahMovie);
router.delete('/:id', hapusMovie);

module.exports = router;
