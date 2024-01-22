"use client";
import React from "react";
import { getFile } from "@/types/types";
import { AiFillDelete, AiOutlineCloudDownload } from 'react-icons/ai'
import ReactPlayer from 'react-player';
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
type oneFileProps = {
  file: getFile;
};

function OneFile({ file }: oneFileProps) {

  const isImage = /\.(jpg|jpeg|png|gif)$/i.test(file.name);
  const isVideo = /\.(mp4|webm|ogg)$/i.test(file.name);

  const deleteFile = () => {
    axios.post(`api/File/`, { Key: file.key }).then((res) => {
      console.log("🗑️", res.data)
      toast.success(`Deleted ${file.name}`)
      window.location.reload()
    }).catch(error => console.log(error))
  }
  const justName = (
    <div className="card bg-slate-800 w-96 shadow-xl px-5 py-6">
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
  )
  if (!isImage && !isVideo) {
    return justName
  }

  return (
    <div className="card bg-slate-800 min-h-[200px] min-w-[200px] w-auto h-fit shadow-xl px-5 py-6">
      <div className="flex items-center gap-2 justify-between flex-shrink-0">

        {isImage && (
          <div className="flex-shrink-0">
            <Image src={file.url} alt={file.name} layout="responsive" width={200} height={200} />
          </div>
        )}
        {isVideo && <ReactPlayer url={file.url} controls width="100%" height="auto" />}
      </div>
      <div className="flex mt-3 gap-2 text-sm">

        <a className="btn btn-info btn-outline  w-fit" target="_blank" href={file.url}>
          <AiOutlineCloudDownload />
        </a>
        <button onClick={deleteFile} className="btn btn-outline  btn-error">
          <AiFillDelete />
        </button>
      </div>

    </div>
  );
}

export default OneFile;
