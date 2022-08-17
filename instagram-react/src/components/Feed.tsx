import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main
      // FIXME: tailwind doesn't allow to create class names with JS varaibles interpolation
      // POST_COLUMN_WIDTH + COLUMN_GAP + RIGHT_PANE_WIDTH = MAX_PAGE_WIDTH
      // 470 + 32 + 319 = 821
      className="flex justify-center mx-auto"
    >
      {/* FIXME: tailwind doesn't allow to create class names with JS varaibles interpolation */}
      <section className="w-[470px] md:mr-[32px]">
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:inline-grid w-[319px]">
        {/* FIXME: tailwind doesn't allow to create class names with JS varaibles interpolation */}
        <div className="fixed w-[319px]">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;
