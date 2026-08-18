const db = require('../config/database.config');

const getMovies = async () => {
  return db('movie');
};
const getMoviesID = async (id) => {
  return db('movie').where({ id_movie: id });
};

const postMovies = async (data) => {
  return db('movie').insert(data);
};

const deleteMovies = async (id) => {
  return db('movie').where({ id_movie: id }).delete();
};

const updateMovies = async (id, data) => {
  return await db('movie').where({ id_movie: id }).update({
    nama_movie: data.nama_movie,
    kategori_umur: data.kategori_umur,
    deskripsi_movie: data.deskripsi_movie,
  });
};

module.exports = { getMovies, getMoviesID, postMovies, deleteMovies, updateMovies };
