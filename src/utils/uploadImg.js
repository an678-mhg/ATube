import axios from "axios";

export const uploadImg = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_KEY);

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/an-nguyen/image/upload",
      formData
    );
    return res.data.url;
  } catch (error) {
    console.log(error);
  }
};
