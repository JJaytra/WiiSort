import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="flex justify-between p-5 border-b-2 border-wiiBlue bg-slate-100">
      <div className="flex space-x-4">
        <div className="">
          <Image src="/logo.png" alt="logo" width={100} height={40} />
        </div>
      </div>
      <div className="flex">
        <div className="">
          <Link href="/library">Library</Link>
        </div>
        <div className="/page">Plaza</div>
        <div className="">Account</div>
      </div>
    </div>
  );
};

export default Nav;
