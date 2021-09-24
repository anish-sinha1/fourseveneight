import { RequestHandler } from "express";
import multer from "multer";
import fs from "fs";
import util from "util";

export const unlinkFile = util.promisify(fs.unlink);

import { uploadFile, downloadFile, deleteFile } from "../aws/s3config";

export const upload = multer({ dest: "uploads/" });

export const uploadImage: RequestHandler = async (req, _, next) => {
  const file = req.file;

  if (file) {
    uploadFile(file);
    await unlinkFile(file.path);
  }
  next();
};

export const downloadImage: RequestHandler = async (req, res) => {
  const key = req.params.key;
  const readStream = downloadFile(key);
  if (readStream)
    readStream
      .on("data", (data) => {
        res.write(data);
      })
      .on("end", () => readStream.pipe(res))
      .on("error", () => res.end());
};

export const deleteImage: RequestHandler = async (req, _, next) => {
  try {
    const key = req.params.key;
    deleteFile(key);
    next();
  } catch (err) {}
};
