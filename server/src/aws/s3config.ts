import S3 from "aws-sdk/clients/s3";
import fs from "fs";
import express from "express";

const s3Client = new S3({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: `${process.env.AWS_ACCESS_KEY}`,
  secretAccessKey: `${process.env.AWS_SECRET_KEY}`,
});

export const uploadFile = (file: Express.Multer.File) => {
  try {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
      Bucket: `${process.env.AWS_BUCKET_NAME}`,
      Body: fileStream,
      Key: `image-fse-${file.filename}`,
    };
    s3Client.upload(uploadParams).promise();
  } catch (err) {}
};

export const downloadFile = (fileKey: string) => {
  try {
    const downloadParams = {
      Key: fileKey,
      Bucket: `${process.env.AWS_BUCKET_NAME}`,
    };
    return s3Client.getObject(downloadParams).createReadStream();
  } catch (err) {}
};

export const deleteFile = (fileKey: string) => {
  try {
    const deleteParams = {
      Bucket: `${process.env.AWS_BUCKET_NAME}`,
      Key: fileKey,
    };
    s3Client.deleteObject(deleteParams);
  } catch (err) {}
};
