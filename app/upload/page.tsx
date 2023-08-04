import UploadFile from "@/components/UploadFile";
import { currentUser } from "@clerk/nextjs";
import React from "react";

async function Page() {
  const user = await currentUser();

  return (
    <div className="flex min-h-screen flex-col items-center  py-2 text-white">
      <h1>Upload</h1>

      <UploadFile username={user?.username} />
    </div>
  );
}

export default Page;
