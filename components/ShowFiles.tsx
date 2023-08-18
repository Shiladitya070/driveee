"use client";
import React, { useEffect, useState } from "react";
import OneFile from "./OneFile";
import axios from "axios";
import { toast } from "react-hot-toast";
import { getFile } from "@/types/types";
import { useRouter } from "next/navigation";

function ShowFIles() {
  const [files, setFiles] = useState<getFile[]>([]);


  useEffect(() => {
    axios
      .get("/api/getFiles")
      .then((res) => {
        console.log("❤️❤️", res.data);
        setFiles(res.data);
      })
      .catch((error) => {
        console.log(error)
        toast.error("error");
      });
  }, []);
  return (
    <div className="m-4 rounded-md ">
      <div className="flex flex-wrap gap-2">
        {files.length > 0 ? (
          files.map((file) => (
            <OneFile file={file} key={`${file.key}`} />
          ))
        ) : (<>
          <h1>No files</h1>
        </>)
        }
      </div>
    </div>
  );
}

export default ShowFIles;
