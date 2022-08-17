import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { IMAGE_WIDTH } from "../constants";

type Suggestion = {
  id: string;
  username: string;
  jobTitle: string;
  img: string;
};

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    const createrRandomSuggestion = () => {
      return {
        id: faker.datatype.uuid(),
        username: faker.internet.userName().toLowerCase(),
        jobTitle: faker.name.jobTitle(),
        img: faker.image.avatar(),
      };
    };

    const randomData: Suggestion[] = [];
    Array.from({ length: 5 }).forEach(() => {
      randomData.push(createrRandomSuggestion());
    });
    setSuggestions(randomData);
  }, []);

  return (
    <div className="mt-4">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map(({ id, username, jobTitle, img }) => (
        <div key={id} className="flex items-center mt-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt="user story avatar"
            className="h-10 rounded-full p-[2px] border cursor-pointer"
          />
          <div className="flex-1 mx-4">
            <p className="font-semibold text-sm">{username}</p>
            <p className="text-gray-400 text-xs">{jobTitle}</p>
          </div>
          <button className="font-semibold text-blue-400 text-sm">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
