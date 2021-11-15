import React, { useState } from "react";
import { Table, Tag, Pagination } from "antd";
import * as Style from "../../styles/Header";

const ReportPage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Axie classes",
      dataIndex: "classes",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color="volcano" key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Axie Stats",
      dataIndex: "axie",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Card Stats",
      dataIndex: "card",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Purity",
      dataIndex: "purity",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Genes",
      dataIndex: "genes",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (tags) => (
        <>
          {tags === "running" ? (
            <Tag color="green">{tags}</Tag>
          ) : (
            <Tag color="volcano">{tags}</Tag>
          )}
        </>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      price: "98 - 89$",
      classes: ["a", "b", "c", "d"],
      axie: 70,
      card: 70,
      purity: 70,
      genes: 70,
      action: "running",
    },
    {
      key: "2",
      name: "Jim Green",
      price: "98 - 89$",
      classes: ["a", "b", "c", "d"],
      axie: 70,
      card: 70,
      purity: 70,
      genes: 70,
      action: "running",
    },
    {
      key: "3",
      name: "Joe Black",
      price: "98 - 89$",
      classes: ["a", "b", "c", "d"],
      axie: 70,
      card: 70,
      purity: 70,
      genes: 70,
      action: "stop",
    },
    {
      key: "4",
      name: "Jim Red",
      price: "98 - 89$",
      classes: ["a", "b", "c", "d"],
      axie: 70,
      card: 70,
      purity: 70,
      genes: 70,
      action: "running",
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <Style.logoWrap class="logo-wrap">
        <Style.svg viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="14" fill="#036CFC"></rect>
          <path
            d="M13.48 17.32C13.67 17.54 13.765 17.77 13.765 18.01C13.765 18.3 13.65 18.555 13.42 18.775C13.2 18.985 12.945 19.09 12.655 19.09C12.355 19.09 12.1 18.965 11.89 18.715L9.07 15.265L6.22 18.715C6 18.965 5.745 19.09 5.455 19.09C5.175 19.09 4.92 18.985 4.69 18.775C4.47 18.555 4.36 18.3 4.36 18.01C4.36 17.76 4.45 17.53 4.63 17.32L7.705 13.66L4.735 10.105C4.545 9.885 4.45 9.655 4.45 9.415C4.45 9.125 4.56 8.875 4.78 8.665C5.01 8.445 5.265 8.335 5.545 8.335C5.845 8.335 6.105 8.465 6.325 8.725L9.07 12.04L11.785 8.725C12.005 8.465 12.265 8.335 12.565 8.335C12.845 8.335 13.095 8.445 13.315 8.665C13.545 8.875 13.66 9.125 13.66 9.415C13.66 9.665 13.57 9.895 13.39 10.105L10.42 13.66L13.48 17.32ZM22.7471 15.925C22.7471 16.735 22.4671 17.42 21.9071 17.98C21.3571 18.53 20.6121 18.885 19.6721 19.045V19.9C19.6721 20.17 19.5871 20.385 19.4171 20.545C19.2571 20.715 19.0421 20.8 18.7721 20.8C18.5121 20.8 18.2971 20.715 18.1271 20.545C17.9571 20.385 17.8721 20.17 17.8721 19.9V19.09C17.3221 19.04 16.7871 18.925 16.2671 18.745C15.7571 18.565 15.3071 18.335 14.9171 18.055C14.7571 17.955 14.6421 17.845 14.5721 17.725C14.5121 17.595 14.4821 17.435 14.4821 17.245C14.4821 16.995 14.5571 16.775 14.7071 16.585C14.8671 16.395 15.0471 16.3 15.2471 16.3C15.4371 16.3 15.6721 16.38 15.9521 16.54C16.4121 16.81 16.8471 17.01 17.2571 17.14C17.6771 17.26 18.1121 17.32 18.5621 17.32C19.1621 17.32 19.6221 17.21 19.9421 16.99C20.2621 16.76 20.4221 16.44 20.4221 16.03C20.4221 15.78 20.3271 15.575 20.1371 15.415C19.9571 15.255 19.7321 15.13 19.4621 15.04C19.1921 14.95 18.8021 14.835 18.2921 14.695C17.5521 14.505 16.9421 14.315 16.4621 14.125C15.9821 13.935 15.5671 13.635 15.2171 13.225C14.8771 12.815 14.7071 12.265 14.7071 11.575C14.7071 10.765 14.9921 10.07 15.5621 9.49C16.1421 8.91 16.8971 8.54 17.8271 8.38V7.525C17.8271 7.255 17.9121 7.04 18.0821 6.88C18.2521 6.71 18.4671 6.625 18.7271 6.625C18.9971 6.625 19.2121 6.71 19.3721 6.88C19.5421 7.04 19.6271 7.255 19.6271 7.525V8.35C20.5271 8.47 21.3721 8.81 22.1621 9.37C22.3121 9.47 22.4171 9.585 22.4771 9.715C22.5471 9.845 22.5821 10 22.5821 10.18C22.5821 10.43 22.5021 10.65 22.3421 10.84C22.1921 11.03 22.0171 11.125 21.8171 11.125C21.7071 11.125 21.6021 11.11 21.5021 11.08C21.4121 11.05 21.2821 10.985 21.1121 10.885C20.7021 10.625 20.3321 10.43 20.0021 10.3C19.6821 10.17 19.2871 10.105 18.8171 10.105C18.2771 10.105 17.8421 10.225 17.5121 10.465C17.1921 10.705 17.0321 11.025 17.0321 11.425C17.0321 11.705 17.1271 11.935 17.3171 12.115C17.5071 12.285 17.7471 12.42 18.0371 12.52C18.3271 12.62 18.7321 12.735 19.2521 12.865C19.9821 13.045 20.5771 13.23 21.0371 13.42C21.5071 13.6 21.9071 13.895 22.2371 14.305C22.5771 14.705 22.7471 15.245 22.7471 15.925Z"
            fill="white"
          ></path>
        </Style.svg>
        <Style.H1>AxieListFilter</Style.H1>
      </Style.logoWrap>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
};

export default ReportPage;
