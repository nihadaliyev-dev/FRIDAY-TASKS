import { useEffect, useState } from "react";
// import "./App.css";
import axios from "axios";
import { BASE_URL, endpoints } from "../../constants/constants";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import AdminBtn from "../../components/AdminBtn";
import Card from "../../components/Cards/Card";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnsMapArr, setBtnsMapArr] = useState([]);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState("4");
  const [sortQuery, setSortQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    date: Date.now(),
    description: "",
    author: "",
    category: "",
    image: null,
  });

  const getAllBlogs = async () => {
    try {
      setLoading(true);
      console.log(loading);
      const query = `title=${searchQuery}&page=${page}&limit=${limit}${
        sortQuery ? "&" + sortQuery : ""
      }`;

      const response = await axios.get(
        `${BASE_URL}/${endpoints.blogs}?${query}`
      );

      const data = response.data.data;
      setPageCount(response.data.pagination.totalPage);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoints.categories}`);
      const data = response.data.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllAuthors = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoints.authors}`);
      const data = response.data.data;
      setAuthors(data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("author", formData.author);
      form.append("category", formData.category);
      form.append("image", formData.image);

      const response = await axios.post(`${BASE_URL}/${endpoints.blogs}`, form);

      if (response.status === 200) {
        setFormData({
          title: "",
          description: "",
          author: "",
          category: "",
          image: null,
        });
        getAllBlogs();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaginationBtns = (pageCount) => {
    const arr = Array.from({ length: pageCount }, (_, i) => i + 1);
    setBtnsMapArr(arr);
  };

  const handlePaginationCount = (newLimit) => {
    setPage(1);
    setLimit(newLimit.split("=")[1]);
  };

  const handleSort = (sort) => {
    setPage(1);
    setSortQuery(sort);
  };

  useEffect(() => {
    getAllCategories();
    getAllAuthors();
  }, []);

  useEffect(() => {
    getAllBlogs();
  }, [page, limit, sortQuery, searchQuery]);

  useEffect(() => {
    handlePaginationBtns(pageCount);
  }, [pageCount]);

  if (loading || blogs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  const onSearch = async (searchText) => {
    setSearchQuery(searchText);
  };
  return (
    <div className="flex justify-center items-center p-6">
      <div className="container w-2/3">
        <div className="flex justify-between w-full items-center pb-4">
          <Search onSearch={onSearch} />
          <AdminBtn />
        </div>

        <div className="flex flex-col gap-5">
          {/* <div className="bg-[#fbfbfb] p-3 rounded-xl flex shadow-md">
            <form
              onSubmit={submitForm}
              className="flex flex-col gap-4 w-full items-start"
            >
              <div className="flex justify-center items-center gap-3">
                <label htmlFor="">Title</label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  value={formData.title}
                  className="w-full border-2 rounded-lg px-2 py-1"
                  type="text"
                  required
                />
              </div>
              <div className="flex justify-center items-center gap-3">
                <label htmlFor="">Description</label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  value={formData.description}
                  className="w-full border-2 rounded-lg px-2 py-1"
                  type="text"
                  required
                />
              </div>
              <div className="flex justify-center items-center gap-3">
                <label htmlFor="">Author</label>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  name="author"
                  id=""
                  value={formData.author}
                  className="w-full border-2 rounded-lg px-2 py-1"
                  required
                >
                  <option value="" disabled hidden selected>
                    Select Author
                  </option>
                  {authors.map((author) => (
                    <option>{author.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-center items-center gap-3">
                <label htmlFor="">Category</label>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  value={formData.category}
                  className="w-full border-2 rounded-lg px-2 py-1"
                  name="category"
                  id=""
                  required
                >
                  <option value="" disabled hidden selected>
                    Select Category
                  </option>
                  {categories.map((category) => (
                    <option value={category._id}>{category.title}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-center items-center gap-3">
                <label htmlFor="">Image</label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                  className="w-full border-2 rounded-lg px-2 py-1"
                  type="file"
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-cyan-400 p-3 text-white cursor-pointer"
              >
                Add Blog
              </button>
            </form>
          </div> */}
          <div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-semibold font-serif py-6">
                  Blogs
                </h3>
              </div>
              <div className="flex gap-3">
                <select
                  onChange={(e) => handleSort(e.target.value)}
                  className="border-b-1 px-3 py-2"
                  value={sortQuery}
                >
                  <option value="">Sort By: Default</option>
                  <option value="sortBy=title&order=desc">
                    Sort By: (A-Z)
                  </option>
                  <option value="sortBy=title&order=asc">Sort By: (Z-A)</option>
                </select>

                <select
                  onChange={(e) => handlePaginationCount(e.target.value)}
                  className="border-b-1 px-3 py-2"
                  value={`limit=${limit}`}
                >
                  <option value="limit=4">4 Items</option>
                  <option value="limit=8">8 items</option>
                  <option value="limit=12">12 items</option>
                  <option value="limit=18">18 items</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {blogs.map((blog) => (
                <Card key={blog._id} blog={blog} />
              ))}
            </div>
          </div>

          <Pagination
            btnsMapArr={btnsMapArr}
            page={page}
            setPage={setPage}
            setIsLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
