import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Books from "./pages/Books";
import NotFound from "./NotFound";
import BookDetails from "./pages/BookDetails";
import AddBook from "./AddBook";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>

        <Route path="/books">
          <Route index element={<Books />}></Route>
          <Route path="new" element={<AddBook />}></Route>
          <Route path=":id" element={<BookDetails />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
