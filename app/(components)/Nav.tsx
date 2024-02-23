import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <div className="flex justify-center p-5 bg-wiiBlue mb-10">
      <div className="flex justify-between items-center text-white max-w-screen-lg w-full mx-auto text-xl">
        <div>
          <Link href="/">
            <Image src="/logo_white.png" alt="logo" width={150} height={40} />
          </Link>
        </div>
        <Link href="/savedgames" className="hover:text-gray-300">
          Saved
        </Link>
        <Link href="/Profile" className="hover:text-gray-300">
          Profile
        </Link>
        <Link href="/ClientPage" className="hover:text-gray-300">
          Client
        </Link>
        {session ? (
          <Link
            href="/api/auth/signout?callbackUrl=/"
            className="hover:text-gray-300"
          >
            Logout
          </Link>
        ) : (
          <Link href="/api/auth/signin" className="hover:text-gray-300">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
