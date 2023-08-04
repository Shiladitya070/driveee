"use client";
import React, { useEffect, useState } from "react";
import OneFile from "./OneFile";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FileRaw, getFile } from "@/types/types";

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
        toast("error");
      });
  }, []);
  return (
    <div className="m-4 rounded-md ">
      <div className="flex flex-wrap gap-2">
        {files.map((file) => (
          <OneFile file={file} key={`${file.name}`} />
        ))}
      </div>
    </div>
  );
}

export default ShowFIles;
