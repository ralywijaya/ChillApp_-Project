const express = require('express');
const cors = require('cors');
const serialTMDBRoute = require('../routes/serialTMDB.route');
const movieTMDBRoute = require('../routes/movieTMDB.route');
const DaftarSayaRoute=require('../routes/DaftarSaya.route')
const LoginGoogleRoute = require('../routes/LoginGoogle.route');
const LupaPasswordRoute = require('../routes/LupaPassword.route');
const GantiPasswordRoute = require('../routes/GantiPassword.route.');
const userRoute = require('../routes/user.route');
const movieRoute = require('../routes/movie.route');
const AunthLoginRoute = require('../routes/LoginAuth.route');
const middlewareLogin = require('../middlewares/AunthLogin.middleware');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/daftarsaya", DaftarSayaRoute);
app.use('/movieTMDB', movieTMDBRoute);
app.use('/serialTMDB', serialTMDBRoute);
app.use('/user', userRoute);
app.use('/movie', middlewareLogin.Login, movieRoute);
app.use('/aunth/login', AunthLoginRoute);
app.use('/lupa/password', LupaPasswordRoute);
app.use('/ganti/password', GantiPasswordRoute);
app.use('/login/google', LoginGoogleRoute);
app.listen(port, () => {
  // console.log(`Server berjalan di port ${port}`);
});

// untuk demo pastikan menggunakan url ini
// http://localhost:3000/user untuk get,dan post
// http://localhost:3000/user/:id untuk delete,put pastikan menggunakan req params untuk id
