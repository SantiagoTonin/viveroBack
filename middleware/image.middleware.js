
import multer, { diskStorage } from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, "../imagesUpload/"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// export const fileUpload = multer({
//   storage: diskstorage,
// }).single("image");

// export const fileUpload = multer({
//   storage: diskstorage,
// }).single("image");


export const fileUpload = multer({
  storage: diskstorage,
}).array("image",10);