import { FC } from "react";
import Image from "next/image";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { PostType } from "../types";

type PostProps = PostType & {};

const StoryThumbnail: FC<PostProps> = ({
  id,
  img,
  username,
  userImg,
  caption,
}) => {
  return (
    <div className="bg-white my-7 border ronded-md">
      <div className="flex items-center p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={userImg}
          alt="user image"
          className="h-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 ml-auto" />
      </div>

      <Image
        src={img}
        alt="post image"
        width={470}
        height={470}
        className="object-cover object-center"
      />
    </div>
  );
};

export default StoryThumbnail;
