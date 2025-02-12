import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import axios from "axios";

import { BASE_URL, endpoints } from "./constants/constants";

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import Page404 from "./pages/Page404";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  const [posts, setPosts] = useState(null);

  const getPostsAsync = async () => {
    const response = await axios.get(`${BASE_URL}/${endpoints.posts}`);
    setPosts(response.data);
  };

  useEffect(() => {
    getPostsAsync();
  }, []);

  return (
    <>
      <Header />
      {posts && (
        <Routes>
          <Route path="/" element={<Home posts={posts} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts">
            <Route index element={<Posts posts={posts} />}></Route>
            <Route path=":id" element={<PostDetails />}></Route>
          </Route>

          <Route path="*" element={<Page404 />} />
        </Routes>
      )}

      <Footer />
    </>
  );
}

export default App;
