'use client'

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
<nav className="p-2 bg-fuchsia-950 dark:bg-fuchsia-500 text-white flex justify-between">
      <div className="flex">
        <Link href="/">
        <Image src='/image.png' width={30} height={30} alt="image"/>
          <p className="text-lg font-bold">Kenya Methodist University</p>
        </Link>
      </div>
      <div>
        <button
          onClick={toggleDarkMode}
          className="mr-4 bg-fuchsia-700 px-3 py-1 rounded hover:bg-fuchsia-800"
        >
    
        </button>
        <Link href="/admin">
          <p className="bg-fuchsia-700 px-3 py-1 rounded hover:bg-fuchsia-800">
            Admin
          </p>
        </Link>
      </div>
    </nav>
  );
}