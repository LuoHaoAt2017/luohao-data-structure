import Mock from "mockjs";

Mock.mock("/getTableData4", function(options) {
  const { pageSize } = JSON.parse(options.body);
  return Mock.mock({
    "list|100": [
      {
        attachment1: "@attach2Val",
        attachment2: "@attach2Val",
        attachment3: "@attach2Val",
        attachment4: "@attach2Val",
        attachment5: "@attach2Val",
        attachment6: "@attach2Val",
        attachment7: "@attach2Val",
        attachment8: "@attach2Val",
        attachment9: "@attach2Val",
      },
    ],
  }).list.slice(0, pageSize);
});

Mock.mock("/getTableCols4", function(options) {
  const { include } = JSON.parse(options.body);
  const columns = [
    {
      field: "attachment1",
      title: "attachment1",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "attachment" },
    },
    {
      field: "attachment2",
      title: "attachment2",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "attachment" },
    },
    {
      field: "attachment3",
      title: "attachment3",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "attachment" },
    },
    {
      field: "attachment4",
      title: "attachment4",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "attachment" },
    },
    {
      field: "attachment5",
      title: "attachment5",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "attachment" },
    },
    {
      field: "attachment6",
      title: "attachment6",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "attachment" },
    },
    {
      field: "attachment7",
      title: "attachment7",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "attachment" },
    },
    {
      field: "attachment8",
      title: "attachment8",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "attachment" },
    },
    {
      field: "attachment9",
      title: "attachment9",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "attachment" },
    },
  ];
  return columns;
});