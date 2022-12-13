import "./style.css";
import MainSection from "./Components/MainSection";
import Header from "./Components/Header";
import Discussion from "./Components/Discussion";
import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";

function App() {
  const [discussions, setDiscussions] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((data) => {
        return data.json();
      })
      .then((data) => setDiscussions(data));
  }, [discussions.length, currentPage]);

  return (
    <>
      <Header></Header>
      <MainSection />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={discussions.length}
        paginate={setCurrentPage}
      ></Pagination>
      <Discussion posts={currentPosts(discussions)} />
    </>
  );
}

export default App;
