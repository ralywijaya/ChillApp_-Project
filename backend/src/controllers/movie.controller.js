const prisma = require('../config/prisma.config');

const ambilMovie = async (req, res) => {
  try {
    const getMovie = await prisma.movie.findMany();

    if (getMovie.length == 0) {
      return res.status(400).json({ massage: 'ambil movie gagal' });
    }
    // console.log(getMovie);
    return res.status(200).json({
      message: 'Berhasil mengambil data movie',
      data: getMovie,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Gagal mengambil database movie',
      error: error.message,
    });
  }
};

const ambilMovieID = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const getMovieID = await prisma.movie.findUnique({ where: { id_movie: id } });

    if (id == 0 || !id) {
      return res.status(400).json({ massage: 'ambil movie berdasarkan id gagal' });
    }

    return res.status(200).json(getMovieID);
  } catch (error) {
    return res.status(500).json({
      message: 'Gagal mengambil database movie berdasarkan id',
      error: error.message,
    });
  }
};

const tambahMovie = async (req, res) => {
  try {
    const body = req.body;

    const postMovie = await prisma.movie.create({
      data: {
        nama_movie: body.nama_movie,
        kategori_umur: body.kategori_umur,
        deskripsi_movie: body.deskripsi_movie,
      },
    });

    if (!postMovie) {
      return res.status(400).json({ massage: 'post user gagal' });
    }
    return res.status(200).json({ massage: 'post user berhasil', data: body });
  } catch (error) {
    return res.status(500).json({
      message: 'Gagal post database film',
      error: error.message,
    });
  }
};

const ubahMovie = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const body = req.body;
    const updateMovie = await prisma.movie.update({
      where: {
        id_movie: id,
      },
      data: {
        nama_movie: body.nama_movie,
        kategori_umur: body.kategori_umur,
        deskripsi_movie: body.deskripsi_movie,
      },
    });

    if (id == 0) {
      return res.status(400).json({ massage: 'update database movie gagal' });
    }

    return res.status(200).json({ massage: 'update movie berhasil,', data: updateMovie });
  } catch (error) {
    return res.status(500).json({
      message: 'Gagal Update data movie',
      error: error.message,
    });
  }
};

const hapusMovie = async (req, res) => {
  try {
    const id = Number(req.params.id);
    // console.log(id);

    const deleteMovie = await prisma.movie.delete({ where: { id_movie: id } });
    if (!deleteMovie) {
      return res.status(400).json({ massage: 'hapus movie gagal' });
    }

    return res.status(200).json({ massage: 'hapus movie berhasil', data: deleteMovie });
  } catch (error) {
    return res.status(500).json({
      message: 'Gagal hapus data movie berdasarkan id',
      error: error.message,
    });
  }
};

const filterGenre = async (req, res) => {
  try {
    const genreQuery = req.query.genre;

    const movie = await prisma.movie.findMany({ where: { genre: { contains: genreQuery } } });

    if (movie.length == 0) {
      return res.status(400).json({ message: 'genre tidak ditemukan' });
    }
    return res.status(200).json({
      message: 'Berhasil mengambil data genre movie',
      data: movie,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'filter genre gagal',
      error: error.message,
    });
  }
};
const filterSearch = async (req, res) => {
  try {
    const judulQuery = req.query.judul;

    const movie = await prisma.movie.findMany({ where: { nama_movie: { contains: judulQuery } } });

    if (movie.length == 0) {
      return res.status(400).json({ message: 'movie tidak ditemukan' });
    }
    return res.status(200).json({
      message: 'Berhasil mengambil data movie',
      data: movie,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'filter genre gagal',
      error: error.message,
    });
  }
};

module.exports = {
  ambilMovie,
  ambilMovieID,
  ubahMovie,
  tambahMovie,
  hapusMovie,
  filterGenre,
  filterSearch,
};
