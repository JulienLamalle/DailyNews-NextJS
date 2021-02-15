import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'


const Header = () => {
  const router = useRouter();

  return(
    <div>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href='/' passHref>
                <img className="h-8 w-auto sm:h-20 cursor-pointer" src="../logo.png" alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;