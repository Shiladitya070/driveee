import { s3Client } from "@/helpers/aws/s3client";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

async function getUploadUrl(filename: string, userId: string, contentType: string) {
    const command = new PutObjectCommand({
        Bucket: "mydriveee",
        Key: `uploads/user/${userId}/${filename}`,
        ContentType: contentType
    })
    const url = await getSignedUrl(s3Client, command)
    return url;
}

export async function POST(req: Request) {
    const { name, userId, contentType } = await req.json()

    const url = await getUploadUrl(name, userId, contentType)
    return NextResponse.json({ msg: "Ok", url })
}
