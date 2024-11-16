import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import logo from "../../public/assets/opinion-hub-logo.png";

async function Nav() {
  const session = await getServerSession(options);

  return (
    <header className="py-4">
      <nav className="flex justify-between items-center">
        {/* <Image src={logo} alt="logo" width={150} /> */}
        <p className="text-2xl sour-gummy">Opinion Hub</p>
        {session ? (
          <ul className="list-none flex gap-6"> 
            <li>
              <Link
                href=""
                className="font-medium text-md hover:text-xl text-[#DBDAD6] hover:text-[#464644]"
              >
                Write Post
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/signout?callbackUrl=/"
                className="font-medium text-md hover:text-xl text-[#DBDAD6] hover:text-[#464644]"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="list-none flex gap-6">
            <li>
              <Link
                href=""
                className="font-medium text-md hover:text-xl text-[#DBDAD6] hover:text-[#464644]"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/signin"
                className="font-medium text-md hover:text-xl text-[#DBDAD6] hover:text-[#464644]"
              >
                Log in
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Nav;