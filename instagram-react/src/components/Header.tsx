import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="/images/instagram_logo.png"
            alt="Instagram logo"
            className="object-contain"
            layout="fill"
          />
        </div>
        <div className="cursor-pointer h-24 w-6 relative lg:hidden">
          <Image
            src="/images/instagram_logo_icon.png"
            alt="Instagram logo"
            className="object-contain"
            layout="fill"
          />
        </div>

        {/* Middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-trasform duration-200 eas-out" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-trasform duration-200 eas-out" />
          <div className="h-8 w-8 relative">
            <Image
              src="/images/user_avatar_placeholder.png"
              alt="user-image"
              className="object-contain rounded-full"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
