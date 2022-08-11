import { COLUMN_GAP, POST_COLUMN_WIDTH, RIGHT_PANE_WIDTH } from "../constants";
import Posts from "./Posts";
import Stories from "./Stories";

const MAX_PAGE_WIDTH = POST_COLUMN_WIDTH + COLUMN_GAP + RIGHT_PANE_WIDTH;

const Feed = () => {
  return (
    <main
      className={`grid justify-center grid-flow-col md:max-w-[${MAX_PAGE_WIDTH}px] mx-auto`}
    >
      <section className={`w-[${POST_COLUMN_WIDTH}px]`}>
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:inline-grid">
        column
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
