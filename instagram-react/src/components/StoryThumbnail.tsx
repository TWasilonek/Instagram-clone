import { FC } from "react";
import Image from "next/image";

type StoryThumbnailProps = {
  id: string;
  img: string;
  username: string;
};

const StoryThumbnail: FC<StoryThumbnailProps> = ({ id, img, username }) => {
  return (
    <div>
      <Image width={40} height={40} src={img} alt="user story avatar" />
      <p>{username}</p>
    </div>
  );
};

export default StoryThumbnail;
