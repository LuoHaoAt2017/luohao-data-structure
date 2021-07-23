import Mock from "mockjs";

Mock.mock('/getTreeData', function(options) {
  const { pageSize } = JSON.parse(options.body);
  return Mock.mock({
    "list|20-50": [
      {
        id: "@idVal",
        title: "@textVal",
        age: "@numberVal",
        datetime: "@date1Val",
        address: "@address1Val",
        organization: "@org1Val",
        attachment: "@attach1Val",

        name1: "@myname",
        name2: "@myname",
        name3: "@myname",
        name4: "@myname",
        name5: "@myname",

        ip1: "@myip",
        ip2: "@myip",
        ip3: "@myip",
        ip4: "@myip",
        ip5: "@myip",

        status1: '@status',
        status2: '@status',
        status3: '@status',
        status4: '@status',
        status5: '@status',

        website1: '@website',
        website2: '@website',
        website3: '@website',
        website4: '@website',
        website5: '@website',

        email1: '@myemail',
        email2: '@myemail',
        email3: '@myemail',
        email4: '@myemail',
        email5: '@myemail',

        brief1: '@brief',
        brief2: '@brief',
        brief3: '@brief',
        brief4: '@brief',
        brief5: '@brief',

        create1: "@date1Val",
        create2: "@date1Val",
        create3: "@date1Val",
        create4: "@date1Val",
        create5: "@date1Val",

        update1: "@date1Val",
        update2: "@date1Val",
        update3: "@date1Val",
        update4: "@date1Val",
        update5: "@date1Val",

        datetime1: "@date2Val",
        datetime2: "@date2Val",
        datetime3: "@date2Val",
        datetime4: "@date2Val",
        datetime5: "@date2Val",

        address1: "@address2Val",
        address2: "@address2Val",
        address3: "@address2Val",
        address4: "@address2Val",
        address5: "@address2Val",

        organization1: "@org2Val",
        organization2: "@org2Val",
        organization3: "@org2Val",
        organization4: "@org2Val",
        organization5: "@org2Val",

        attachment1: "@attach2Val",
        attachment2: "@attach2Val",
        attachment3: "@attach2Val",
        attachment4: "@attach2Val",
        attachment5: "@attach2Val",
      },
    ],
  }).list.slice(0, pageSize);
});

Mock.mock('/getTreeCols', function(options) {
  const { include } = JSON.parse(options.body);
  const columns = [
    { type: "seq", width: 50, align: "center" },
    { type: "checkbox", width: 50, align: "center" },
    { field: "title", title: "title", width: 150, showOverflow: true },
    { field: "age", title: "age", minWidth: 150 },
    {
      field: "datetime",
      title: "datetime",
      minWidth: 150,
      params: { inChildGrid: false },
      slots: { default: "datetime" },
    },
    {
      field: "address",
      title: "address",
      minWidth: 150,
      params: { inChildGrid: false },
      slots: { default: "address" },
    },
    {
      field: "organization",
      title: "organization",
      minWidth: 150,
      params: { inChildGrid: false },
      slots: { default: "organization" },
    },
    {
      field: "attachment",
      title: "attachment",
      minWidth: 150,
      params: { inChildGrid: false },
      slots: { default: "attachment" },
    },
  ];
  // ip
  Array.from({length: 5}, (_, index) => index).forEach((index) => {
    columns.push({ field: "ip" + (index + 1), title: "ip" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
  });
  // name
  Array.from({length: 5}, (_, index) => index).forEach((index) => {
    columns.push({ field: "name" + (index + 1), title: "name" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
  });
  // status
  Array.from({length: 5}, (_, index) => index).forEach((index) => {
    columns.push({ field: "status" + (index + 1), title: "status" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
  });
  // website
  Array.from({length: 5}, (_, index) => index).forEach((index) => {
    columns.push({ field: "website" + (index + 1), title: "website" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
  });
  // brief
  Array.from({length: 5}, (_, index) => index).forEach((index) => {
    columns.push({ field: "brief" + (index + 1), title: "brief" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
  });
  // email
  Array.from({length: 5}, (_, index) => index).forEach((index) => {
    columns.push({ field: "email" + (index + 1), title: "email" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
  });
  // create
  Array.from({length: 5}, (_, index) => index).forEach((index) => {
    columns.push({ field: "create" + (index + 1), title: "create" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
  });
  // update
  Array.from({length: 5}, (_, index) => index).forEach((index) => {
    columns.push({ field: "update" + (index + 1), title: "update" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
  });
  return columns;
});