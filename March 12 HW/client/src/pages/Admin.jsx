import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Box } from "@mui/material";
import AdminTable from "../components/AdminTable";
import { BASE_URL, endpoints } from "../constants/constants";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

import "./admin.css";
import { NavLink } from "react-router";

const Admin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formVisible, setFormVisible] = useState(false);

  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
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

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      console.log("Fetching from:", `${BASE_URL}/${endpoints.blogs}`); // Log the URL
      const response = await axios.get(`${BASE_URL}/${endpoints.blogs}`);
      console.log("API Response:", response); // Log full response
      console.log("Blogs data:", response.data); // Log the data

      if (response.data && Array.isArray(response.data)) {
        setBlogs(response.data);
      } else if (response.data && Array.isArray(response.data.data)) {
        setBlogs(response.data.data);
      } else {
        console.error("Unexpected data format:", response.data);
        setBlogs([]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      setBlogs([]);
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
      setFormVisible(false);

      fetchBlogs();

      if (response.status === 200) {
        setFormData({
          title: "",
          description: "",
          author: "",
          category: "",
          image: null,
        });
        // getAllBlogs();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (blog) => {
    console.log("Edit blog:", blog);
  };

  const handleDelete = async (blogId) => {
    try {
      await axios.delete(`${BASE_URL}/${endpoints.blogs}/${blogId}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllAuthors();
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log("Current blogs state:", blogs);

  return (
    <div className="flex justify-center bg-[#212121] h-dvh">
      {formVisible ? (
        <div className="fixed w-full h-full bg-[#00000080] transition-all duration-250 z-1000 formMain">
          <div className="bg-[#505050] text-white shadow-[0px_0px_20px_#00FFFF40] p-3 rounded-xl flex absolute transition-all  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 adminForm">
            <form
              onSubmit={submitForm}
              className="flex flex-col gap-3 w-full items-start"
            >
              <div className="p-2 text-xl font-semibold">Add Blog</div>
              <div className="flex flex-col justify-center gap-1 w-full">
                <label className="pl-3" htmlFor="">
                  Title
                </label>
                <input
                  placeholder="Write title"
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  value={formData.title}
                  className="outline-none w-full transition-all duration-250 focus:border-cyan-500 border-2 rounded-lg px-2 py-1"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col justify-center gap-1 w-full">
                <label className="pl-3" htmlFor="">
                  Description
                </label>
                <input
                  placeholder="Write your description"
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  value={formData.description}
                  className="outline-none w-full transition-all duration-250 focus:border-cyan-500 border-2 rounded-lg px-2 py-1"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col justify-center gap-1 w-full">
                <label className="pl-3" htmlFor="">
                  Author
                </label>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  name="author"
                  id=""
                  value={formData.author}
                  className="outline-none w-full transition-all duration-250 focus:border-cyan-500 border-2 rounded-lg px-2 py-1"
                  required
                >
                  <option
                    className="bg-[#505050]"
                    value=""
                    disabled
                    hidden
                    selected
                  >
                    Select Author
                  </option>
                  {authors.map((author) => (
                    <option value={author._id} className="bg-[#505050]">
                      {author.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col justify-center gap-1 w-full">
                <label className="pl-3" htmlFor="">
                  Category
                </label>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  value={formData.category}
                  className="outline-none w-full transition-all duration-250 focus:border-cyan-500 border-2 rounded-lg px-2 py-1"
                  name="category"
                  id=""
                  required
                >
                  <option
                    className="bg-[#505050]"
                    value=""
                    disabled
                    hidden
                    selected
                  >
                    Select Category
                  </option>
                  {categories.map((category) => (
                    <option className="bg-[#505050]" value={category._id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col justify-center gap-1 w-full">
                <label className="pl-3" htmlFor="">
                  Image
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                  className="outline-none w-full transition-all duration-250 focus:border-cyan-500 border-2 rounded-lg px-2 py-1"
                  type="file"
                  required
                />
              </div>
              <div className="flex gap-3 items-center self-end py-2">
                <button
                  type="reset"
                  onClick={() => {
                    setFormVisible(false);
                  }}
                  className="rounded-xl bg-transparent px-3 py-2 text-white border-2 border-white hover:bg-white hover:text-[#212121] transition-all duration-250 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-cyan-400 px-3 py-2 border-2 border-cyan-400 hover:bg-white hover:text-[#212121] hover:border-white transition-all duration-250 text-white cursor-pointer"
                >
                  Add Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="container">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <NavLink to={"/"} className="text-xl text-[#fbfbfb]">
              Home
            </NavLink>
            <IoIosArrowForward className="mt-1 text-[#fbfbfb]" />
            <h4 className="text-2xl text-white font-semibold">Blogs</h4>
          </div>
          <button
            onClick={() => {
              setFormVisible(true);
            }}
            className="flex items-center gap-1 cursor-pointer hover:bg-white hover:text-black hover:border-white transition-all duration-250 border-2 border-whtie text-white px-3 py-2 rounded-lg"
          >
            <FaPlus />
            Add Blog
          </button>
        </div>

        <Box py={4}>
          <AdminTable
            blogs={blogs}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Box>
      </div>
    </div>
  );
};

export default Admin;
