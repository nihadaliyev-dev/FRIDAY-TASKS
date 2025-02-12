import PropTypes from "prop-types";
import { Link } from "react-router";

const Posts = ({ posts }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-dvh">
      <div>
        <h3 className="font-bold text-bold text-3xl">Posts</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            to={`/posts/${post.id}`}
            className="shadow-lg p-4 rounded-lg"
            key={post.id}
          >
            <p className="text-xl font-bold">{post.title}</p>
            <p className="italic">{post.author}</p>
            <p>{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
