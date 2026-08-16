import cloudinaryApi from "../services/cloudinaryapi";

async function uploadImage(file) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", import.meta.env.VITE_API_PRESET_NAME); // ganti sesuai nama preset milikmu

  const response = await cloudinaryApi.post(
    import.meta.env.VITE_API_CLOUDINARY,
    formData
  );

  return response.data.secure_url;
}

export default uploadImage;
