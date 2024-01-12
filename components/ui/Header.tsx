import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "../ThemeToggler"
import SearchInput from "./SearchInput"
import GenreDropDown from "./GenreDropDown"

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
        <Link href="/" className="mr-10">
            <Image 
                // image src from Disney+ website   
                width={120}
                height={100}            
                src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1656431462/web-images/logo-d-plus-horizontal.svg"
                alt="Disney+ Logo"
                className="cursor-pointer"
            />
        </Link>

        <div className="flex space-x-2">            
            {/* Search Input */}
            <SearchInput />

            {/* Genre Drop Down */}
            <GenreDropDown />
            
            {/* Theme Toggle */}
            <ThemeToggler />

        </div>
    </header>
  )
}

export default Header