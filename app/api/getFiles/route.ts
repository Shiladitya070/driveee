import { s3Client } from "@/helpers/aws/s3client";
import { FileRaw, getFile } from "@/types/types";
import {
  GetObjectCommand,
  ListObjectsV2Command,
  _Object,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

async function getAllFiles(userId: string) {
  const command = new ListObjectsV2Command({
    Bucket: "mydriveee",
    Prefix: `uploads/user/${userId}`
  });
  const res = (await s3Client.send(command)).Contents;
  const filePromises = res?.map(async (f) => {
    const file = await fileMaker(f);
    return file;
  });
  const result = await Promise.all(filePromises!);

  return result;
}

const fileMaker = async (f: _Object) => {
  const newFile: getFile = {
    name: nameExtractor(f.Key),
    key: f.Key,
    url: await getFileurl(f.Key),
    date: f.LastModified!,
    size: f.Size!,
  };
  return newFile;
};
function nameExtractor(Key: string) {
  let path = Key.split("/");
  return path[path.length - 1];
}
async function getFileurl(key: string) {
  const command = new GetObjectCommand({
    Bucket: "mydriveee",
    Key: key,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}
export async function GET(request: NextRequest) {
  try {
    const user = await currentUser()
    const files = await getAllFiles(user.id);
    console.log(files)
    if (!files) {
      return NextResponse.json([]);
    }
    const response = NextResponse.json(files);
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
