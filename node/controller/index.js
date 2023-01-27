const asyncHandler = require("express-async-handler");
const { uploadFile, deleteFile, getObjectSignedUrl } = require("../s3-functions/s3");
const sharp = require("sharp");
const crypto = require("crypto");

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

exports.ImageUpload = asyncHandler(async (req, res) => {
  const file = req.file;
  const imageName = generateFileName();
  const fileBuffer = await sharp(file.buffer)
    .resize({ height: 1920, width: 1080, fit: "contain" })
    .toBuffer();
  await uploadFile(fileBuffer, imageName, file.mimetype);
  const url = await getObjectSignedUrl(imageName);
  res.status(200).json({ message: "Upload Successfully..!" });
});

exports.test = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Upload Successfully..!" });
});
