import Image from "next/image";

const Header = () => {
  return (
    <div>
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
        <div>Right side</div>
      </div>

      {/* Middle */}
      {/* Right */}
    </div>
  );
};

export default Header;
