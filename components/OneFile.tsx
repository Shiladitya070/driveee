import React from "react";
import { getFile } from "@/types/types";
import Image from "next/image";

type oneFileProps = {
  file: getFile;
};

function OneFile({ file }: oneFileProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image
          src={file.url}
          alt={file.name}
          layout={"fill"}
          objectFit={"contain"}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default OneFile;
