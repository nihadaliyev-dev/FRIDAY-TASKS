import PropTypes from "prop-types";
import { Link } from "react-router";
const Home = ({ posts }) => {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="grid grid-cols-3 gap-5">
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

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;
