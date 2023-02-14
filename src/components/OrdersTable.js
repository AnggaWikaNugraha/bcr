import React from "react";
import { Table } from "antd";
import APIOrder from "../apis/APIOrder";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIVITY_ORDERTABLE_REDUCER_FULFILLED, ACTIVITY_ORDERTABLE_REDUCER_SETCURRENT_PAGE, ACTIVITY_ORDERTABLE_REDUCER_SETPAGE } from "../redux/type/typeCarlist";

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
  const dispatch = useDispatch()
  const orderTable = useSelector((state) => state.orderTableStateReducer)
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const firstRecordNumber = (pageNum, PageLimit, idx) => {
    return (pageNum - 1) * PageLimit + idx;
  };

  React.useEffect(() => {
    APIOrder.getListOrder({ currentPage : orderTable.currentPage, pageSize: orderTable.pageSize }).then((res) => {
      dispatch({
        type: ACTIVITY_ORDERTABLE_REDUCER_FULFILLED,
        data: res,
        pageSize: res.pageSize
      })
      // setData(res);
      // setPageSize(res.pageSize);
    }).catch((err) => {});
  }, [orderTable.pageSize, orderTable.currentPage]);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (value, obj, index) => {
        return <p key={value}>{firstRecordNumber(orderTable.currentPage, orderTable.pageSize, index + 1)}</p>;
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
      {orderTable.data ? (
        <Table
          style={{ width: "97%", textAlign: "center" }}
          columns={columns}
          dataSource={orderTable.data.orders}
          pagination={{
            defaultCurrent: orderTable.data.page,
            pageSize: orderTable.data.pageSize,
            total: orderTable.data.count,
            onChange: (page, pS, sorter) => {
              dispatch({
                type: ACTIVITY_ORDERTABLE_REDUCER_SETCURRENT_PAGE,
                currentPage: page
              })
              dispatch({
                type: ACTIVITY_ORDERTABLE_REDUCER_SETPAGE,
                setPageSize: pS
              })
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
