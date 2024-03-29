import { SignOutButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import React from "react";

async function NavBar() {
  const user = await currentUser();

  return (
    <div className="navbar shadow-xl align-middle border-b border-b-slate-500">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          Driveee
        </Link>
      </div>
      {user ? (
        <div className="flex items-center gap-x-2">
          <Link href={"/upload"}>
            <button className="btn btn-accent">Upload</button>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={user.imageUrl}
                  width={500}
                  height={500}
                  alt="Profile pic"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <SignOutButton />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <p>Welcome</p>
      )}
    </div>
  );
}

export default NavBar;
