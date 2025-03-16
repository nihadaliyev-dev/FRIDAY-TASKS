import PropTypes from "prop-types";
import { BASE_URL, endpoints } from "../../../constants";

import axios from "axios";
import AdminProductsTable from "./AdminProductsTable";
// import DeleteModal from "./AdminProductsTable/AdminProductsDeleteBtn/AdminProductsDeleteModal";
import { useState } from "react";
import { Modal } from "antd";

import { Button, notification, Space } from "antd";

// import "@ant-design/v5-patch-for-react-19";

// import { deleteProductAsync } from "../../../services/services";

const Products = ({ products, setProducts }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [willDeleted, setWillDeleted] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  console.log(products);

  const handleDelete = (id) => {
    console.log(willDeleted);
    setModal2Open(true);
    if (willDeleted) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);

      try {
        axios.delete(`${BASE_URL}/${endpoints.products}/${id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const openNotification = (pauseOnHover) => () => {
    api.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      showProgress: true,
      pauseOnHover,
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const handleEdit = async (id) => {
  //   e.preventDefault();
  //   console.log(editedBook.id);
  //   try {
  //     const response = await editDataById(
  //       endpoints.BOOKS,
  //       editedBook.id,
  //       editedBook
  //     );
  //     console.log(response);
  //     // if(response.status === 201){
  //     //     setBooks([...books, editedBook])
  //     // }

  //     endpoints.BOOKS.then((data) => {
  //       setProducts(data);
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <section className="flex justify-center">
      <div className="container">
        <div className="py-3">
          <div className="text-3xl font-bold py-5 products__header">
            Products
          </div>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            // onOk={handleEdit}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          <div>
            <AdminProductsTable
              products={products}
              onDelete={handleDelete}
              // onEdit={handleEdit}
            ></AdminProductsTable>
            {/* <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.rating.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
          <Modal
            title="Vertically centered modal dialog"
            centered
            open={modal2Open}
            onOk={() => {
              setWillDeleted(true);
              setModal2Open(false);
              openNotification(true);
            }}
            onCancel={() => {
              setWillDeleted(false);
              setModal2Open(false);
              openNotification(false);
            }}
          >
            <p>some contents...</p>
          </Modal>
        </div>
      </div>
      {contextHolder}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default Products;
