import { s3Client } from "@/helpers/aws/s3client";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const { Key } = await request.json()
    const data = await s3Client.send(new DeleteObjectCommand({ Bucket: "mydriveee", Key: Key }))
    console.log("🔑", Key)
    return NextResponse.json({ msg: "ok", data })
}