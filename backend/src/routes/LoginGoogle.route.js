const express = require("express");
const router = express.Router();

const {
 GoogleLogin
}=require("../controllers/LoginGoogle.controller");


router.post("/",GoogleLogin);


module.exports=router;