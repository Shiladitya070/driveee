import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESSKEYID!,
    secretAccessKey: process.env.AWS_S3_SECRECTACCESSKEYID!,
  },
});
