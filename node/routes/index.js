const { ImageUpload, test } = require("../controller/index.js");

const router = require("express").Router();
const multer = require("multer");

//store image in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//middleware function to upload single image


router.get("/api", test);

router.post("/upload", upload.single("image"), ImageUpload);

module.exports = router;
