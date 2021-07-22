import Mock from "mockjs";

Mock.setup({
  timeout: '500-1500'
});

Mock.Random.extend({
  idVal() {
    return Random.guid();
  },
  textVal() {
    return Random.paragraph();
  },
  date1Val() {
    // 一维数组
    return Mock.mock({
      "firstlist|8": [Random.date("yyyy-MM-dd")],
    }).firstlist;
  },
  date2Val() {
    // 二维数组
    return Mock.mock({
      "firstlist|8": [
        Mock.mock({
          "secondlist|4": [Random.date("yyyy-MM-dd")],
        }).secondlist,
      ],
    }).firstlist;
  },
  numberVal() {
    return Random.integer(20, 40);
  },
  address1Val() {
    // 一维数组
    return Mock.mock({
      "firstlist|8": [Random.province() + Random.city() + Random.county()],
    }).firstlist;
  },
  address2Val() {
    // 二维数组
    return Mock.mock({
      "firstlist|8": [
        Mock.mock({
          "secondlist|4": [Random.province() + Random.city() + Random.county()],
        }).secondlist,
      ],
    }).firstlist;
  },
  org1Val() {
    // 一维数组
    return Mock.mock({
      "firstlist|8": [Random.cname()],
    }).firstlist;
  },
  org2Val() {
    // 二维数组
    return Mock.mock({
      "firstlist|8": [
        Mock.mock({
          "secondlist|4": [Random.cname()],
        }).secondlist,
      ],
    }).firstlist;
  },
  attach1Val() {
    // 一维数组
    return Mock.mock({
      "firstlist|8": [
        Random.image("200x200", "#ffcc33", "#FFF", "png", Random.city()),
      ],
    }).firstlist;
  },
  attach2Val() {
    // 二维数组
    return Mock.mock({
      "firstlist|8": [
        Mock.mock({
          "secondlist|4": [
            Random.image("200x200", "#ffcc33", "#FFF", "png", Random.city()),
          ],
        }).secondlist,
      ],
    }).firstlist;
  },
  website() {
    return Random.protocol() + Random.domain();
  },
  myemail() {
    return Random.email()
  },
  myip() {
    return Random.ip();
  },
  status() {
    return Random.color();
  },
  myname() {
    return Random.name(true)
  },
  brief() {
    return Random.paragraph();
  }
});

const Random = Mock.Random;

Mock.mock('/getTableData', function(options) {
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