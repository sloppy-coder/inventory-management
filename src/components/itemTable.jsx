import React from "react";
import { Table } from "antd";
const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const ItemTable = ({ tableData }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "Type",
      dataIndex: "Type",
      sorter: (a, b) => a.Type - b.Type,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Price",
      dataIndex: "Price",
    },
  ];
  //   const [loading, setLoading] = useState(false);
  const loading = false;
  const size = "large";
  const expandable = defaultExpandable;
  //   const [rowSelection, setRowSelection] = useState({});
  const rowSelection = {};
  const tableLayout = "fixed";
  const top = "none";
  const bottom = "bottomRight";
  const yScroll = true;
  const viewportHeight = window.innerHeight;
  const xScroll = false;
  const scroll = {};
  if (yScroll) {
    scroll.y = 0.5 * viewportHeight;
  }
  if (xScroll) {
    scroll.x = "100vw";
  }
  const tableColumns = columns.map((item) => ({
    ...item,
  }));
  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }
  const tableProps = {
    loading,
    size,
    expandable,
    rowSelection,
    scroll,
    tableLayout,
  };
  return (
    <>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={tableData ? tableData : []}
        scroll={scroll}
      />
    </>
  );
};
export default ItemTable;
