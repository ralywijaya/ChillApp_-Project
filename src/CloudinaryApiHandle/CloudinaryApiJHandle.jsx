import cloudinaryApi from "../services/cloudinaryapi";




async function uploadImage(file) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "react_upload"); // ganti sesuai nama preset milikmu

  const response = await cloudinaryApi.post(
    "/image/upload",
    formData
  );

  return response.data.secure_url;
}

export default uploadImage