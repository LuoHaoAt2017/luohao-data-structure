import Mock from "mockjs";
const Random = Mock.Random;

Random.extend({
  idVal() {
    return Math.random().toString(36).slice(2, 12);
  },
  textVal() {
    return Random.paragraph();
  },
  dateVal() {
    return Random.date("yyyy-MM-dd");
  },
  numberVal() {
    return Random.float();
  },
  addressVal() {
    return Random.province() + Random.city() + Random.county();
  },
  orgVal() {
    return Random.clast();
  },
  attachVal() {
    return Random.image("200x200", "#ffcc33", "#FFF", "png", Random.city());
  },
});

export default function mockData() {
  return Mock.mock({
    "list|100-500": [
      {
        id: "@idVal",
        title: "@textVal",
        rate: "@numberVal",
        datetime1: "@dateVal",
        datetime2: "@dateVal",
        datetime3: "@dateVal",
        address1: "@addressVal",
        address2: "@addressVal",
        address3: "@addressVal",
        organization1: "@orgVal",
        organization2: "@orgVal",
        organization3: "@orgVal",
        attachments1: "@attachVal",
        attachments2: "@attachVal",
        attachments3: "@attachVal",
      },
    ],
  }).list;
}
