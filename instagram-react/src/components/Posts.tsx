import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { PostType } from "../types";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const crateRandomPost = () => {
      return {
        id: faker.datatype.uuid(),
        username: faker.internet.userName().toLowerCase(),
        userImg: faker.image.avatar(),
        img: faker.image.image(),
        caption: faker.lorem.sentence(),
      };
    };

    const randomData: PostType[] = [];
    Array.from({ length: 10 }).forEach(() => {
      randomData.push(crateRandomPost());
    });
    setPosts(randomData);
  }, []);

  return (
    <div className="flex flex-col">
      {posts.map(({ id, img, username, userImg, caption }) => (
        <Post
          key={id}
          id={id}
          img={img}
          username={username}
          userImg={userImg}
          caption={caption}
        />
      ))}
    </div>
  );
};

export default Posts;
