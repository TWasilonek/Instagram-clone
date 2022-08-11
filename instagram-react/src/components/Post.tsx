import { FC } from "react";
import Image from "next/image";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { PostType } from "../types";

type PostProps = PostType & {};

const Post: FC<PostProps> = ({ id, img, username, userImg, caption }) => {
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

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Enter your comment..."
          className="border-none flex-1"
        />
        <button type="submit" className="text-blue-400 font-bold">
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
