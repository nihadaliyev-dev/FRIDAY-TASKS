import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, endpoints } from "../../constants/constants";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import CustomPaginationActionsTable from "../../components/AdminTable";

const Admin = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnsMapArr, setBtnsMapArr] = useState([]);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState("4");
  const [sortQuery, setSortQuery] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    date: Date.now(),
    description: "",
    author: "",
    category: "",
    image: null,
  });

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

  const getAllBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/${endpoints.blogs}`);
      const data = response.data.data;
      setPageCount(response.data.pagination.totalPage);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
  }, [page, limit, sortQuery]);

  useEffect(() => {
    handlePaginationBtns(pageCount);
  }, [pageCount]);

  return (
    <div className="p-8 bg-[#202020] h-dvh">
      <div className="flex justify-between items-center pb-6">
        <h4 className="text-2xl text-white font-semibold">Blogs</h4>
        <button className="cursor-pointer hover:bg-white hover:text-black hover:border-white transition-all duration-250 border-2 border-whtie text-white px-3 py-2 rounded-lg">
          Add Blog
        </button>
      </div>
      <div className="bg-[#fbfbfb] p-3 rounded-xl flex shadow-md absolute transition-all  animate-pulse top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
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
      </div>
      <CustomPaginationActionsTable
        blogs={blogs}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Admin;
