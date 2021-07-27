import Mock from "mockjs";

Mock.mock("/getTableData5", function(options) {
  const { pageSize } = JSON.parse(options.body);
  return Mock.mock({
    "list|100": [
      {
        address1: "@address2Val",
        address2: "@address2Val",
        address3: "@address2Val",
        address4: "@address2Val",
        address5: "@address2Val",
        address6: "@address2Val",
        address7: "@address2Val",
        address8: "@address2Val",
        address9: "@address2Val",
      },
    ],
  }).list.slice(0, pageSize);
});

Mock.mock("/getTableCols5", function(options) {
  const { include } = JSON.parse(options.body);
  const columns = [
    {
      field: "address1",
      title: "address1",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "address" },
    },
    {
      field: "address2",
      title: "address2",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "address" },
    },
    {
      field: "address3",
      title: "address3",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "address" },
    },
    {
      field: "address4",
      title: "address4",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "address" },
    },
    {
      field: "address5",
      title: "address5",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "address" },
    },
    {
      field: "address6",
      title: "address6",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "address" },
    },
    {
      field: "address7",
      title: "address7",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "address" },
    },
    {
      field: "address8",
      title: "address8",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "address" },
    },
    {
      field: "address9",
      title: "address9",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "address" },
    },
  ];
  return columns;
});