import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'


const Header = () => {
  const router = useRouter();

  const styles = {
    active: {
      margin: 15,
      color: '#00BFA6',
      cursor: 'pointer'
    }
  }

  return(
    <div>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
            <div className="flex justify-start">
              <Link href='/' passHref>
                <img className="h-8 w-auto sm:h-20 cursor-pointer" src="../logo.png" alt="logo" />
              </Link>
            </div>
            <div>
              <Link href='/' passHref>
                <span className="cursor-pointer ml-5" style={router.pathname === '/' ? styles.active : styles.link}>Accueil</span>
              </Link>
            </div>
            <div className="flex justify-start">
              <Link href='/search' passHref>
                <span className="cursor-pointer ml-5" style={router.pathname === '/search' ? styles.active : styles.link}>Recherchez vos articles</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;