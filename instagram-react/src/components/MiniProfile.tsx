import Image from "next/image";

const MiniProfile = () => {
  return (
    <div className="flex items-center mt-8">
      <div className="h-14 w-14 relative">
        <Image
          src="/images/user_avatar_placeholder.png"
          alt="user-image"
          className="object-contain rounded-full border p-[2px]"
          layout="fill"
        />
      </div>
      <div className="ml-4">
        <h2 className="font-bold">imaginedThings</h2>
        <p className="font-sm text-gray-400">Tomasz Wasilonek</p>
      </div>
      <button className="font-semibold text-blue-400 text-sm ml-auto">
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
