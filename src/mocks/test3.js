import Mock from "mockjs";

Mock.mock("/getTableData3", function(options) {
  const { pageSize } = JSON.parse(options.body);
  return Mock.mock({
    "list|100": [
      {
        organization1: "@org2Val",
        organization2: "@org2Val",
        organization3: "@org2Val",
        organization4: "@org2Val",
        organization5: "@org2Val",
        organization6: "@org2Val",
        organization7: "@org2Val",
        organization8: "@org2Val",
        organization9: "@org2Val",
      },
    ],
  }).list.slice(0, pageSize);
});

Mock.mock("/getTableCols3", function(options) {
  const { include } = JSON.parse(options.body);
  const columns = [
    {
      field: "organization1",
      title: "organization1",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "organization" },
    },
    {
      field: "organization2",
      title: "organization2",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "organization" },
    },
    {
      field: "organization3",
      title: "organization3",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "organization" },
    },
    {
      field: "organization4",
      title: "organization4",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "organization" },
    },
    {
      field: "organization5",
      title: "organization5",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "organization" },
    },
    {
      field: "organization6",
      title: "organization6",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "organization" },
    },
    {
      field: "organization7",
      title: "organization7",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "organization" },
    },
    {
      field: "organization8",
      title: "organization8",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "organization" },
    },
    {
      field: "organization9",
      title: "organization9",
      minWidth: 150,
      params: { inChildGrid: true },
      slots: { default: "organization" },
    },
  ];
  return columns;
});