import { FC, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { UserStory } from "../types";
import StoryThumbnail from "./StoryThumbnail";

const Stories: FC = () => {
  const [data, setData] = useState<UserStory[]>([]);

  useEffect(() => {
    const createRandomUser = () => {
      return {
        id: faker.datatype.uuid(),
        username: faker.internet.userName().toLowerCase(),
        //   email: faker.internet.email(),
        img: faker.image.avatar(),
        //   password: faker.internet.password(),
        //   birthdate: faker.date.birthdate(),
        //   registeredAt: faker.date.past(),
      };
    };

    const randomData: UserStory[] = [];
    Array.from({ length: 20 }).forEach(() => {
      randomData.push(createRandomUser());
    });
    setData(randomData);
    console.log(randomData);
  }, []);

  return (
    <div className="flex space-x-2 bg-white p-6 mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {data.map(({ id, img, username }) => (
        <StoryThumbnail key={id} id={id} img={img} username={username} />
      ))}
    </div>
  );
};

export default Stories;
