import React, { useEffect, useState } from "react";
import { cloudinaryUrl } from "../utils/cloudinaryApi";
import axios from "axios";
import { uploadVideoApi } from "../api/videoApi";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

const UploadPage = () => {
  const [file, setFile] = useState();
  const [previewVideo, setPreviewVideo] = useState();
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleOnchangeFile = (e) => {
    const file = e.target.files[0];
    if (file?.type !== "video/mp4")
      return toast.error("Vui lòng chọn file định dạng video mp4!");
    if (file?.size / 1024 / 1024 > 35)
      return toast.error("Dung lượng file phải bé hơn 30mb!");

    const preview = URL.createObjectURL(file);
    setPreviewVideo(preview);
    setFile(e.target.files[0]);
  };

  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    return () => {
      previewVideo && URL.revokeObjectURL(previewVideo);
    };
  }, [previewVideo]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (data.title.trim().length > 76)
      return toast.error("Tiêu đề video không được dài quá 76 kí tự!");
    if (data.description.trim().length > 100)
      return toast.error("Mô tả video ko được dài quá 100 kí tự!");
    if (!file) return toast.error("Bạn chưa chọn video nào!");
    URL.revokeObjectURL(previewVideo);
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "o9mf5rdx");

      const res = await axios.post(cloudinaryUrl, formData, {
        onUploadProgress: (p) => {
          const { loaded, total } = p;
          let percent = Math.floor((loaded * 100) / total);
          setProgress(percent);
        },
      });

      const newVideo = {
        ...data,
        videoUrl: res.data.url,
      };
      const uploadVideo = await uploadVideoApi(newVideo);
      if (uploadVideo.data.success) {
        navigate("/");
        toast.success(uploadVideo.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("upload video fail!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmitForm} className="text-white">
      <Title title={"Upload a new video | ATube - Video sharing website"} />
      <div className="flex items-center border md:flex-row flex-col rounded-sm bg-[#111]">
        <label
          htmlFor="file-upload"
          className="md:w-[50%] w-full aspect-[16/9] flex items-center justify-center border-r"
        >
          <i className="text-[60px] bx bx-plus"></i>
          <input
            type="file"
            id="file-upload"
            hidden
            onChange={handleOnchangeFile}
            accept="video/mp4,video/x-m4v,video/*"
          />
        </label>
        {previewVideo && (
          <video
            controls
            src={previewVideo}
            className="md:w-[50%] w-full aspect-[16/9]"
          />
        )}
      </div>
      <div className="mt-4">
        <div>
          <label className="block my-2">Title</label>
          <input
            className="px-3 py-1 w-full bg-[#222] rounded-sm outline-none"
            placeholder="Title..."
            name="title"
            onChange={handleChangeInput}
            value={data.title}
          />
        </div>
        <div>
          <label className="block my-2">Description</label>
          <textarea
            className="px-3 py-1 w-full bg-[#222] rounded-sm outline-none"
            placeholder="Description..."
            name="description"
            rows={5}
            value={data.description}
            onChange={handleChangeInput}
          />
        </div>
        <div className="my-4">
          <button className="px-3 py-2 bg-blue-500 rounded-sm text-white w-full">
            Upload video!
          </button>
        </div>
      </div>

      {loading && <Loading progress={progress} />}
    </form>
  );
};

export default UploadPage;