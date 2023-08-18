"use client";
import React from "react";
import { getFile } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete, AiOutlineCloudDownload } from 'react-icons/ai'
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
type oneFileProps = {
  file: getFile;
};

function OneFile({ file }: oneFileProps) {
  const router = useRouter()

  const deleteFile = () => {
    axios.post(`api/File/`, { Key: file.key }).then((res) => {
      console.log("🗑️", res.data)
      toast.success(`Deleted ${file.name}`)
    }).catch(error => console.log(error))
    router.refresh()
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-10">
      <div className="flex items-center gap-2 justify-between">

        <h1>{file.name}</h1>
        <div className="flex gap-2">
          {/* // FIXME: fix download */}
          <a className="btn btn-info btn-outline text-xl w-fit" target="_blank" href={file.url}>
            <AiOutlineCloudDownload />
          </a>
          <button onClick={deleteFile} className="btn btn-outline text-xl btn-error">
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneFile;
