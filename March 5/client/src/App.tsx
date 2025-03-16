import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";

function App() {
  const API_URL = "http://localhost:9999";
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState([]);
  const getProducts = async (page: number, eachPageProds: number) => {
    try {
      const response: AxiosResponse = await axios(
        `${API_URL}/products?page=${page}&eachPageProds=${eachPageProds}`
      );
      setProducts(response.data);
      console.log(response.data);
      setPages(pages.fill(1, 1, response.data?.pageCount));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(1, 4);
  }, []);

  const handleSearch = async (title: string) => {
    setTimeout(() => {}, 500);
    try {
      const response: AxiosResponse = await axios(
        `${API_URL}/products?searchQuery=${title.trim()}`
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          type="text"
        />
        <select>
          <option value="">4</option>
          <option value="">8</option>
          <option value="">12</option>
          <option value="">16</option>
          <option value="">20</option>
        </select>
      </div>
      <ul>
        {products.data &&
          products.data.map((prod) => (
            <li key={prod.id} className="">
              {prod.title}
            </li>
          ))}
      </ul>
      <div>
        {pages.map((q) => {
          return <button>x</button>;
        })}
      </div>
    </>
  );
}

export default App;
