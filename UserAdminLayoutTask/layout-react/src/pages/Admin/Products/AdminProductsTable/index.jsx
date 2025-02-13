// import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import AdminProductsDeleteBtn from "./AdminProductsDeleteBtn";
import AdminProductsEditBtn from "./AdminProductsEditBtn";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AdminProductsTable = ({ products, onDelete, onEdit }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => <img className="w-10" src={image} />,
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: {
        compare: (a, b) => a.title.length - b.title.length,
        multiple: 3,
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: {
        compare: (a, b) => a.description.length - b.description.length,
        multiple: 2,
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: {
        compare: (a, b) => a.category.length - b.category.length,
        multiple: 1,
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: {
        compare: (a, b) => a.price - b.price,
      },
    },
    {
      title: "Tools",
      dataIndex: "id",
      render: (id) => (
        <div className="flex gap-2">
          <AdminProductsDeleteBtn onClick={() => onDelete(id)} />
          <AdminProductsEditBtn onClick={() => onEdit(id)} />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey="id"
      onChange={onChange}
    />
  );
};

AdminProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default AdminProductsTable;
