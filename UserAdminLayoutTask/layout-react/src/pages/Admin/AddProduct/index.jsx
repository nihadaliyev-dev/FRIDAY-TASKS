import { useState } from "react";
import { addNewProductAsync } from "../../../services/services";

const AddProduct = () => {
  const [newProdTitle, setNewProdTitle] = useState();
  const [newProdPrice, setNewProdPrice] = useState();
  const [newProdImage, setNewProdImage] = useState();
  const [newProdDesc, setNewProdDesc] = useState();
  console.log(newProdTitle, newProdPrice, newProdDesc, newProdImage);
  const handleProductAdd = (e) => {
    e.preventDefault();
    e.target.resetForm();
    console.log(e.target);
    addNewProductAsync(newProdTitle, newProdDesc, newProdImage, newProdPrice);
  };

  return (
    <section className="flex justify-center">
      <div className="container">
        <div className="py-3 flex flex-col gap-10">
          <div className="text-3xl font-bold py-5 addProducts__header">
            Add Product
          </div>
          <div className="rounded-lg shadow-lg">
            <form
              className="py-5 flex flex-col gap-4 p-5"
              action=""
              onSubmit={handleProductAdd}
            >
              <div className="flex flex-col gap-2">
                <label className="pl-5" htmlFor="productTitle">
                  Product Title
                </label>
                <input
                  className="border-[#21212150] border-2 py-2 px-3 rounded-md"
                  id="productTitle"
                  type="text"
                  value={newProdTitle}
                  onChange={(e) => setNewProdTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="pl-5" htmlFor="productDescription">
                  Product Desciption
                </label>
                <input
                  className="border-[#21212150] border-2 py-2 px-3 rounded-md"
                  id="productDescription"
                  type="text"
                  value={newProdDesc}
                  onChange={(e) => setNewProdDesc(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="pl-5" htmlFor="productPrice">
                  Product Price
                </label>
                <input
                  className="border-[#21212150] border-2 py-2 px-3 rounded-md"
                  id="productPrice"
                  type="number"
                  value={newProdPrice}
                  onChange={(e) => setNewProdPrice(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="pl-5" htmlFor="productImage">
                  Product Image
                </label>
                <input
                  className="border-[#21212150] border-2 py-2 px-3 rounded-md"
                  id="productImage"
                  type="text"
                  value={newProdImage}
                  onChange={(e) => setNewProdImage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="border-2 cursor-pointer hover:border-[#212121] transition-all duration-300 border-white py-2 px-3 rounded-md bg-blue-500 text-white"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
