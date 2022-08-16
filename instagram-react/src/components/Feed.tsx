import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <main
      // FIXME: tailwind doesn't allow to create class names with JS varaibles interpolation
      // POST_COLUMN_WIDTH + COLUMN_GAP + RIGHT_PANE_WIDTH = MAX_PAGE_WIDTH
      // 470 + 32 + 319 = 821
      className="grid justify-center grid-flow-col gap-[32px] md:max-w-[821px] mx-auto"
    >
      {/* FIXME: tailwind doesn't allow to create class names with JS varaibles interpolation */}
      <section className="w-[470px]">
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:inline-grid">
        <div className="fixed w-[319px]">
          <MiniProfile />
          {/* Suggestions */}
        </div>
      </section>
    </main>
  );
};

export default Feed;
