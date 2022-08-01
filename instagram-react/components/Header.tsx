import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl">
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
      <div>Right side</div>
    </div>
  );
};

export default Header;
