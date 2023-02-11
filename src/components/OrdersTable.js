import React from "react";
import { Table } from "antd";
import APIOrder from "../apis/APIOrder";
import { useState } from "react";

export function convertUTCtoLocal(utc) {
  if (!utc) return null;
  const date = new Date(utc);
  const formatter = new Intl.DateTimeFormat("id-ID", { year: "numeric", month: "short", day: "numeric" });
  return formatter.format(date);
}

export function convertNumbertoLocalCurrency(number) {
  if (!number) return null;
  const formatter = new Intl.NumberFormat("id-Id", { style: "currency", currency: "IDR" });
  return formatter.format(number);
}

function OrdersTable() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const firstRecordNumber = (pageNum, PageLimit, idx) => {
    return (pageNum - 1) * PageLimit + idx;
  };

  React.useEffect(() => {
    APIOrder.getListOrder({ currentPage, pageSize }).then((res) => {
      setData(res);
      setPageSize(res.pageSize);
    });
  }, [currentPage, pageSize]);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (value, obj, index) => {
        return <p key={value}>{firstRecordNumber(currentPage, pageSize, index + 1)}</p>;
      },
    },
    {
      title: "User Email",
      dataIndex: "User",
      key: "id",
      render: (user, __, idx) => <p key={idx}>{user.email}</p>,
      sorter: {
        compare: (a, b) => a.user - b.user,
        multiple: 6,
      },
    },

    {
      title: "Car",
      dataIndex: "car",
      key: "id",
      render: (val, __, idx) => <p key={idx}>{val || "-"}</p>,
      sorter: {
        compare: (a, b) => a.val - b.val,
        multiple: 5,
      },
    },

    {
      title: "Start Rent",
      dataIndex: "start_rent_at",
      key: "id",
      render: (val, __, idx) => <p key={idx}>{convertUTCtoLocal(val)}</p>,
      sorter: {
        compare: (a, b) => a.val - b.val,
        multiple: 4,
      },
    },
    {
      title: "Finish Rent",
      dataIndex: "finish_rent_at",
      key: "id",
      render: (val, __, idx) => <p key={idx}>{convertUTCtoLocal(val)}</p>,
      sorter: {
        compare: (a, b) => a.val - b.val,
        multiple: 3,
      },
    },
    {
      title: "Price",
      dataIndex: "total_price",
      key: "id",
      render: (val, __, idx) => <p key={idx}>{convertNumbertoLocalCurrency(val)}</p>,
      sorter: {
        compare: (a, b) => a.val - b.val,
        multiple: 2,
      },
    },
    {
      title: "Status Order",
      dataIndex: "status",
      key: "id",
      render: (val, __, idx) => <p key={idx}>{val ? "Selesai" : "Masih Disewa"}</p>,
      sorter: {
        compare: (a, b) => a.val - b.val,
        multiple: 1,
      },
    },
  ];

  return (
    <div>
      {data ? (
        <Table
          style={{ width: "97%", textAlign: "center" }}
          columns={columns}
          dataSource={data.orders}
          pagination={{
            defaultCurrent: data.page,
            pageSize: data.pageSize,
            total: data.count,
            onChange: (page, pS, sorter) => {
              setCurrentPage(page);
              setPageSize(pS);
            },
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default OrdersTable;
