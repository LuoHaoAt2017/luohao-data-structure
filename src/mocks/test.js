import Mock from "mockjs";

Mock.mock('/getTableData1', function(options) {
  const { pageSize } = JSON.parse(options.body);
  return Mock.mock({
    "list|100": [
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

Mock.mock('/getTableCols1', function(options) {
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
    },
    {
      field: "address",
      title: "address",
      minWidth: 150,
      params: { inChildGrid: false },
    },
    {
      field: "organization",
      title: "organization",
      minWidth: 150,
      params: { inChildGrid: false },
    },
    {
      field: "attachment",
      title: "attachment",
      minWidth: 150,
      params: { inChildGrid: false },
    },
    {
      title: "子表信息",
      children: [
        {
          field: "datetime1",
          title: "datetime1",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "datetime2",
          title: "datetime2",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "datetime3",
          title: "datetime3",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "datetime4",
          title: "datetime4",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "datetime5",
          title: "datetime5",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "address1",
          title: "address1",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "address2",
          title: "address2",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "address3",
          title: "address3",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "address4",
          title: "address4",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "address5",
          title: "address5",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "organization1",
          title: "organization1",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "organization2",
          title: "organization2",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "organization3",
          title: "organization3",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "organization4",
          title: "organization4",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "organization5",
          title: "organization5",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "attachment1",
          title: "attachment1",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "attachment2",
          title: "attachment2",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "attachment3",
          title: "attachment3",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "attachment4",
          title: "attachment4",
          minWidth: 150,
          params: { inChildGrid: true },
        },
        {
          field: "attachment5",
          title: "attachment5",
          minWidth: 150,
          params: { inChildGrid: true },
        },
      ],
    },
  ];
  if (include) {
    // ip
    Array.from({length: 5}, (_, index) => index).forEach((index) => {
      columns.push({ field: "ip" + (index + 1), title: "ip" + (index + 1), minWidth: 150, showOverflow: true });
    });
    // name
    Array.from({length: 5}, (_, index) => index).forEach((index) => {
      columns.push({ field: "name" + (index + 1), title: "name" + (index + 1), minWidth: 150, showOverflow: true });
    });
    // status
    Array.from({length: 5}, (_, index) => index).forEach((index) => {
      columns.push({ field: "status" + (index + 1), title: "status" + (index + 1), minWidth: 150, showOverflow: true });
    });
    // website
    Array.from({length: 5}, (_, index) => index).forEach((index) => {
      columns.push({ field: "website" + (index + 1), title: "website" + (index + 1), minWidth: 150, showOverflow: true });
    });
    // brief
    Array.from({length: 5}, (_, index) => index).forEach((index) => {
      columns.push({ field: "brief" + (index + 1), title: "brief" + (index + 1), minWidth: 150, showOverflow: true });
    });
    // email
    Array.from({length: 5}, (_, index) => index).forEach((index) => {
      columns.push({ field: "email" + (index + 1), title: "email" + (index + 1), minWidth: 150, showOverflow: true });
    });
    // create
    Array.from({length: 5}, (_, index) => index).forEach((index) => {
      columns.push({ field: "create" + (index + 1), title: "create" + (index + 1), minWidth: 150, showOverflow: true });
    });
    // update
    Array.from({length: 5}, (_, index) => index).forEach((index) => {
      columns.push({ field: "update" + (index + 1), title: "update" + (index + 1), minWidth: 150, showOverflow: true });
    });
  }
  return columns;
});