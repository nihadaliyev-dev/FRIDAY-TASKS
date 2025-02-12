import { useParams } from "react-router";
import { BASE_URL, endpoints } from "../../constants/constants";
import axios from "axios";
import { useEffect, useState } from "react";

const PostDetails = () => {
  let { id } = useParams();
  let [post, setPost] = useState({});

  const getPostById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${endpoints.posts}/${id}`);
    setPost(response.data);
    return response.data;
  };

  useEffect(() => {
    getPostById(id);
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <div>
        <h3 className="text-3xl font-bold">Product Details</h3>
      </div>
      <div className="grid gap-3 !py-10">
        <p>{post.title}</p>
        <p>{post.content}</p>
        <p>{post.author}</p>
        <p>{post.date}</p>
      </div>
    </div>
  );
};

export default PostDetails;
