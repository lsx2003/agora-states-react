import "./style.css";
import MainSection from "./Components/MainSection";
import Header from "./Components/Header";
import Discussion from "./Components/Discussion";
import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
import Posts from "./Components/Post";

function App() {
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(false);
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
    const fetchData = fetch("http://localhost:4000/")
      .then((data) => {
        setLoading(true);
        return data.json();
      })
      .then((data) => setDiscussions(data));
    setLoading(false);
  }, []);
  console.log(discussions);

  return (
    <>
      <Header></Header>
      <MainSection />
      <Discussion posts={currentPosts(discussions)} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={discussions.length}
        paginate={setCurrentPage}
      ></Pagination>
    </>
  );
}

export default App;
