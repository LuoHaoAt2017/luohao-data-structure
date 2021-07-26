import Mock from "mockjs";
import './table';
import './tree';
import './test';

const Random = Mock.Random;

Mock.setup({
  timeout: '500-1000'
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
