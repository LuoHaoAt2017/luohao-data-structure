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
    return Random.integer(20, 40);
  },
  addressVal() {
    return Random.province() + Random.city() + Random.county();
  },
  orgVal() {
    return Random.cname();
  },
  attachVal() {
    return Random.image("200x200", "#ffcc33", "#FFF", "png", Random.city());
  },
});

export default function mockData({ pageSize }) {
  return Mock.mock({
    "list|100-500": [
      {
        id: "@idVal",
        title: "@textVal",
        age: "@numberVal",
        datetime: "@dateVal",
        datetime1: "@dateVal",
        datetime2: "@dateVal",
        datetime3: "@dateVal",
        address: "@addressVal",
        address1: "@addressVal",
        address2: "@addressVal",
        address3: "@addressVal",
        organization: "@orgVal",
        organization1: "@orgVal",
        organization2: "@orgVal",
        organization3: "@orgVal",
        attachment: "@attachVal",
        attachment1: "@attachVal",
        attachment2: "@attachVal",
        attachment3: "@attachVal",
      },
    ],
  }).list.slice(0, pageSize);
}
