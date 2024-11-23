import React from 'react';
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";

const SearchForm = async () => {
    const session = await getServerSession(options);

    // if (!session) {
    //     redirect("/api/auth/signin");
    // }
    return (
        <form action="" className="mt-6">
            {
                session ? (<input type="text" name="search" placeholder="Search Ideas"
                                  className="p-4 outline-0 bg-[#e2e2e2] w-full rounded-lg"/>) : (
                                      <Link href="/api/auth/signin" className="text-center font-semibold text-[#000000] text-xl">To view ideas please sign in</Link>
                )

            }
        </form>
    )
}
export default SearchForm
