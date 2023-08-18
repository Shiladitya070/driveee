"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

type UploadFileProps = {
  userId: string;
};

// TODO: Add progress bar
const UploadFile = ({ userId }: UploadFileProps) => {
  const [files, setFiles] = useState<any>([]);

  const uploadAfile = async (file: any) => {
    const body = { name: file.name, userId, size: file.size, contentType: file.size }
    console.log("👍👍", body)
    const { url } = (await axios.post("/api/upload", body)).data

    axios.put(url, file).then(() => {
      return
    })
  }

  const handleDrop = async (event: any) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    const maxSizeInBytes = 1 * 1024 * 1024 * 1024; // 1 GB in bytes

    // Filter out files greater than 1 GB before setting the state
    const filteredFiles = Array.from(files).filter(
      (file: typeof files) => file.size <= maxSizeInBytes
    );


    if (filteredFiles.length > 0) {
      setFiles(filteredFiles);
      toast.success('Lets Upload it')
      filteredFiles.map((file) => {
        toast.promise(uploadAfile(file!), {
          // FIXME:  
          loading: `Uploading... ${file.name}`,
          success: `Uplaoded ${file.name}`,
          error: `Falied to Upload ${file.name}`,
        })

      })
      setFiles([])
    } else {
      // Display an error message or perform some other action if no valid files are found.
      toast.error("can't upload more than 1GB");
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  return (
    <div
      className="m-4 flex w-full items-center justify-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <label
        htmlFor="dropzone-file"
        className="dark:hover:bg-bray-800 flex h-64 w-10/12 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-700 hover:bg-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          {files.length > 0 ? (
            <h1>Uploading...</h1>
          ) : (
            <>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                maximun 1gb
              </p>
            </>
          )}
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};

export default UploadFile;
