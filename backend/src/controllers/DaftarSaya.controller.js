const prisma = require("../config/prisma.config");
const tmdb = require("../config/tmdb.config");
// TAMBAH DAFTAR
const tambahDaftar = async (req, res) => {
  try {
    const { id, type } = req.body;

   const {user_id}=req.user
// console.log("ini adalah id_user",user_id)
    if (!id || !type) {
      return res.status(400).json({
        message: "ID dan type wajib diisi",
      });
    }

    if (type !== "movie" && type !== "tv") {
      return res.status(400).json({
        message: "Type harus movie atau tv",
      });
    }

 
    const sudahAda = await prisma.daftar_saya.findFirst({
      where: {
        id_user:user_id,
        ...(type === "movie"
          ? { tmdb_movie_id: Number(id) }
          : { tmdb_tv_id: Number(id) }),
          type_media:type
      },
    });

    if (sudahAda) {
      return res.status(400).json({
        message: "Film sudah ada di Daftar Saya",
      });
    }

    const data = await prisma.daftar_saya.create({
      data: {
        id_user:user_id,

        tmdb_movie_id:
          type === "movie" ? Number(id) : null,

        tmdb_tv_id:
          type === "tv" ? Number(id) : null,
             type_media:type
      },   
    });

    return res.status(201).json({
      message: "Berhasil ditambahkan ke Daftar Saya",
      data,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};


// HAPUS DAFTAR
const hapusDaftar = async (req, res) => {
  try {
    const { id, type } = req.body;

      const {user_id}=req.user

    if (!id || !type) {
      return res.status(400).json({
        message: "ID dan type wajib diisi",
      });
    }

    if (type !== "movie" && type !== "tv") {
      return res.status(400).json({
        message: "Type harus movie atau tv",
      });
    }
    

    const data = await prisma.daftar_saya.findFirst({
      where: {
        id_user:user_id,

        ...(type === "movie"
          ? { tmdb_movie_id: Number(id) }
          : { tmdb_tv_id: Number(id) }),
         
      },
    });

   

    // console.log("REQUEST:", { id, type, user_id });
// console.log("DATA HASIL FIND:", data);

    await prisma.daftar_saya.delete({
      where: {
        id_daftar: data.id_daftar,
      },
    });

    return res.json({
      message: "Berhasil dihapus dari Daftar Saya",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

const getDaftarSaya = async (req, res) => {
  try {
    const{ user_id} = req.user;

    const data = await prisma.daftar_saya.findMany({
      where: {
        id_user: user_id,
      },
    });

    res.json({
      results: data,
    });
    // console.log("ini adalah daftar saya",data);









  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getDaftarSayaTMDB = async (req, res) => {
  try {
    // console.log("REQ USER:", req.user);

    const { user_id } = req.user;

    // console.log("INI USER ID:", user_id);

    if (!user_id) {
      return res.status(401).json({
        message: "Tolong login dahulu",
      });
    }

    const data = await prisma.daftar_saya.findMany({
      where: {
        id_user: user_id,
      },
    });

    // console.info("DATA DAFTAR SAYA:", data);

   const dataTMDB = await Promise.all(
  data.map(async (i) => {

    let endpoint;

    if (i.type_media === "movie") {

      if (!i.tmdb_movie_id) {
        throw new Error(
          `TMDB movie ID tidak ditemukan untuk id_daftar ${i.id_daftar}`
        );
      }

      endpoint = `/movie/${i.tmdb_movie_id}`;

    } else if (i.type_media === "tv") {

      if (!i.tmdb_tv_id) {
        throw new Error(
          `TMDB TV ID tidak ditemukan untuk id_daftar ${i.id_daftar}`
        );
      }

      endpoint = `/tv/${i.tmdb_tv_id}`;

    } else {
      throw new Error(
        `type_media tidak valid: ${i.type_media}`
      );
    }

    // console.log("REQUEST TMDB:", endpoint);

    const response = await tmdb.get(endpoint);

    return {
      ...i,
      ...response.data,
    };
  })
);

    // console.log("DATA TMDB:", dataTMDB);

    return res.status(200).json({
      results: dataTMDB,
    });

  } catch (error) {
    console.error("ERROR GET DAFTAR SAYA TMDB:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};



module.exports = {
  tambahDaftar,
  hapusDaftar,getDaftarSaya,getDaftarSayaTMDB
};
