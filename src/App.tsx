import { useEffect, useState } from "react";
import produce from "immer";
import { Item, Media } from "./classes";
import Container from "./components/Layout/Container";
import Header from "./components/Layout/Header";
import Loader from "./components/Layout/Loader";
import ItemBlock from "./components/ItemBlock";
import MediaBlock from "./components/MediaBlock";

function App() {
  const [allContent, setContent] = useState<Array<Item | Media>>([]);
  const [loading, setLoading] = useState(true);

  const order = allContent.length + 1;

  useEffect(() => {
    // simulate delay requesting items from backend
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const addMedia = () => {
    setContent(
      produce(allContent, (draft) => {
        draft.push(new Media(order, { name: "hello" }));
      })
    );
  };

  const addItem = () => {
    setContent(
      produce(allContent, (draft) => {
        draft.push(new Item(order, "file"));
      })
    );
  };

  const renderContent = () => {
    if (loading) return <Loader />;

    return allContent.length ? (
      allContent.map((v) => {
        if (v.type === "item") {
          return <ItemBlock key={v.order} />;
        }
        if (v.type === "media") {
          return <MediaBlock key={v.order} />;
        }
        return null;
      })
    ) : (
      <div className="my-auto mx-auto prose">
        <h4>There are no items.</h4>
      </div>
    );
  };

  console.log(allContent);

  return (
    <Container>
      <Header />
      <div>
        <div className="w-1/5 flex space-2 py-2 gap-2">
          <button
            onClick={() => addItem()}
            className="btn btn-primary"
            type="button"
          >
            Add Content
          </button>
          <button
            onClick={() => addMedia()}
            className="btn btn-primary"
            type="button"
          >
            Add Media
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col py-2">
        <div className="flex flex-col flex-1 h-100">{renderContent()}</div>
      </div>
      <div className="pt-2 pb-4">
        <button className="btn btn-primary" type="button">
          Save
        </button>
      </div>
    </Container>
  );
}

export default App;
