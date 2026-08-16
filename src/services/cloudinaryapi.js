// services/cloudinaryApi.js

import axios from "axios";

const cloudinaryApi = axios.create({
  baseURL: import.meta.env.VITE_API_CLOUDINARY,
});

export default cloudinaryApi;
