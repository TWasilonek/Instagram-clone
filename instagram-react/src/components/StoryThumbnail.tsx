import { FC } from "react";

type StoryThumbnailProps = {
  id: string;
  img: string;
  username: string;
};

const StoryThumbnail: FC<StoryThumbnailProps> = ({ id, img, username }) => {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt="user story avatar"
        className="h-14 rounded-full p-[2px] border-red-500 border-2 cursor-pointer"
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default StoryThumbnail;
