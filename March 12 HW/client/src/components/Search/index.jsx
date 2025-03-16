import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/constants";

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const fullText = "Search for anything and press 'Enter'...";
  const typingSpeed = 150;
  const startDelay = 500;
  const pauseAtEnd = 2000;
  const eraseSpeed = 100;

  useEffect(() => {
    let timeouts = [];

    const animatePlaceholder = async () => {
      setPlaceholder("");

      await new Promise((resolve) => {
        const timeout = setTimeout(resolve, startDelay);
        timeouts.push(timeout);
      });

      for (let i = 0; i <= fullText.length; i++) {
        const timeout = setTimeout(() => {
          setPlaceholder(fullText.substring(0, i));
        }, i * typingSpeed);
        timeouts.push(timeout);
      }

      await new Promise((resolve) => {
        const timeout = setTimeout(resolve, pauseAtEnd);
        timeouts.push(timeout);
      });

      for (let i = fullText.length; i >= 0; i--) {
        const timeout = setTimeout(() => {
          setPlaceholder(fullText.substring(0, i));
        }, (fullText.length - i) * eraseSpeed + pauseAtEnd + fullText.length * typingSpeed);
        timeouts.push(timeout);
      }

      const timeout = setTimeout(() => {
        animatePlaceholder();
      }, pauseAtEnd + fullText.length * (typingSpeed + eraseSpeed));
      timeouts.push(timeout);
    };

    animatePlaceholder();

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const debouncedHandleSearch = debounce((text) => {
    setSearchText(text);
    onSearch(text);
  }, 500);

  const handleSearch = (text) => {
    debouncedHandleSearch(text);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full max-w-2xl mx-auto mb"
    >
      <div className="relative">
        <input
          type="text"
          // value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-250s"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline hover:text-indigo-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
