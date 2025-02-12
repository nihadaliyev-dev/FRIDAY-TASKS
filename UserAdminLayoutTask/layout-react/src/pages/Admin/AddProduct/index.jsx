const AddProduct = () => {
  return (
    <section className="flex justify-center">
      <div className="container">
        <div className="py-3 flex flex-col gap-10">
          <div className="text-3xl font-bold py-5 addProducts__header">
            Add Product
          </div>
          <div className="rounded-lg shadow-lg">
            <form className="py-5 flex flex-col gap-4 p-5" action="">
              <div className="flex flex-col gap-2">
                <label className="pl-5" htmlFor="productTitle">
                  Product Title
                </label>
                <input
                  className="border-[#21212150] border-2 py-2 px-3 rounded-md"
                  id="productTitle"
                  type="text"
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
                />
              </div>
              <button
                type="submit"
                className="border-2 border-white py-2 px-3 rounded-md bg-blue-500 text-white"
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
