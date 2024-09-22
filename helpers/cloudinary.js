import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "dze2tntce",
  api_key: "591597841633266",
  api_secret: "m2Hxw68oYJd5HdPRK244Jfxcyqc", // Click 'View API Keys' above to copy your API secret
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}
const upload = multer({ storage });

export const Cloudinary = {
  imageUploadUtil,
  upload,
};
