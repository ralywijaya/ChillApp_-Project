const tmdb = require("../config/tmdb.config");


const getMoviePopuler = async(req,res)=>{

try{

const response = await tmdb.get(
"/movie/popular"
);


 res.json({
    results: response.data.results.map((item) => ({
      ...item,
      media_type: "movie",
    })),
  });


}catch(error){

res.status(500).json({
message:error.message
});

}

}

const getMovieTerbaru = async(req,res)=>{

try{

const response = await tmdb.get(
"/movie/now_playing"
);



 res.json({
    results: response.data.results.map((item) => ({
      ...item,
      media_type: "movie",
    })),
  });


}catch(error){

res.status(500).json({
message:error.message
});

}

}

const getMovieTopRating = async(req,res)=>{

try{

const response = await tmdb.get(
"/movie/top_rated"
);


 res.json({
    results: response.data.results.map((item) => ({
      ...item,
      media_type: "movie",
    })),
  });


}catch(error){

res.status(500).json({
message:error.message
});

}

}
const getMovieGenre= async(req,res)=>{

try{

const response = await tmdb.get(
"/genre/movie/list"
);


res.json({
    results:response.data.genres
});


}catch(error){

res.status(500).json({
message:error.message
});

}

}


const getDetailMovie= async(req,res)=>{

try{

const id=Number(req.params.id)
const response = await tmdb.get(
`/movie/${id}/release_dates`
);

const RatingUmur = response.data.results.find(
  (item) => item.iso_3166_1 === "US"
);

const certification =
  RatingUmur?.release_dates[0]?.certification || "Not Rated";

res.json({ certification });



}catch(error){

res.status(500).json({
message:error.message
});

}

}
const getVideoMovie= async(req,res)=>{
const id=Number(req.params.id)  
try{

const response = await tmdb.get(
`/movie/${id}/videos`
);

res.json({
    results:response.data.results
});


}catch(error){

res.status(500).json({
message:error.message
});

}

}


const getMovieID= async(req,res)=>{
const id=Number(req.params.id)  
try{

const response = await tmdb.get(
`/movie/${id}`
);

res.json({
    results:response.data
});


}catch(error){

res.status(500).json({
message:error.message
});

}

}


const getMovieSimiliar= async(req,res)=>{
const id=Number(req.params.id)  
try{

const response = await tmdb.get(
`/movie/${id}/similar`
);





 res.json({
    results: response.data.results.map((item) => ({
      ...item,
      media_type: "movie",
    })),
  });



}catch(error){

res.status(500).json({
message:error.message
});

}

}


const getSearchTMDB= async(req,res)=>{
  const { query } = req.query;


if(!query){
    return res.status(200).json({message:"data tidak ada"})
}
try{

const response = await tmdb.get(
`/search/multi?query=${encodeURIComponent(query)}`
);

res.json({
    results:response.data.results
});


}catch(error){

res.status(500).json({
message:error.message
});

}

}


const getGenreIDMovie= async(req,res)=>{
const genreID = Number(req.query.with_genres);
 

if(!genreID){
    return res.status(200).json({message:"data tidak ada"})
}
try{

const response = await tmdb.get(
`/discover/movie?with_genres=${genreID}`
);


 res.json({
    results: response.data.results.map((item) => ({
      ...item,
      media_type: "movie",
    })),
  });
}catch(error){

res.status(500).json({
message:error.message
});

}

}


const getTrandingAllDay = async (req, res) => {
  try {
    const response = await tmdb.get("/trending/all/day");

    const results = response.data.results;

    const data = await Promise.all(
      results.map(async (i) => {
        try {
          const endpoint =
            i.media_type === "movie"
              ? `/movie/${i.id}/videos`
              : `/tv/${i.id}/videos`;

          const video = await tmdb.get(endpoint);

          return {
            ...i,
            videos: video.data.results,
          };
        } catch (error) {
          console.error(
            `Gagal mengambil video TMDB ${i.media_type}/${i.id}:`,
            error.code || error.message
          );

          return {
            ...i,
            videos: [],
          };
        }
      })
    );

    res.json({
      results: data,
    });
  } catch (error) {
    console.error("ERROR TRENDING TMDB:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};
// const getMoviePopuler = async(req,res)=>{

// try{

// const response = await tmdb.get(
// "/movie/popular"
// );


// res.json({
//     results:response.data.results
// });


// }catch(error){

// res.status(500).json({
// message:error.message
// });

// }

// }










module.exports = {
getMoviePopuler,getMovieTerbaru,getMovieTopRating,getMovieGenre,getDetailMovie,getVideoMovie,getMovieID,getMovieSimiliar,getSearchTMDB,getGenreIDMovie,getTrandingAllDay
};