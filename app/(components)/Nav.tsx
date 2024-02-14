import React from "react";
import Link from "next/link";
import Image from "next/image";

import { UserCircleIcon } from "@heroicons/react/16/solid";

const Nav = () => {
  return (
    <div className="flex justify-between p-5 border-b-4 border-wiiBlue bg-slate-100">
      <div className="flex space-x-4">
        <div className="">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={40} />
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="">
          <Link href="/library">Library</Link>
        </div>
        <div className="/page">
          <UserCircleIcon />
        </div>

        <div className="">
          <UserCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Nav;
