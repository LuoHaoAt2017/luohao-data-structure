import Mock from "mockjs";

const Random = Mock.Random;

Mock.setup({
  timeout: '500-1000'
});

Mock.mock("/getDepartment", function() {
  const columns = [
    {
      objectId: '0001',
      name: '基础科学',
      parent: ''
    },
    {
      objectId: '0002',
      name: '语言学',
      parent: '0001'
    },
    {
      objectId: '0003',
      name: '数学',
      parent: '0001'
    },
    {
      objectId: '0004',
      name: '哲学',
      parent: '0001'
    },

    {
      objectId: '0006',
      name: '自然科学',
      parent: ''
    },
    {
      objectId: '0007',
      name: '物理学',
      parent: '0006'
    },
    {
      objectId: '0008',
      name: '化学',
      parent: '0006'
    },
    {
      objectId: '0009',
      name: '生物学',
      parent: '0006'
    },

    {
      objectId: '0010',
      name: '牛顿力学',
      parent: '0007'
    },
    {
      objectId: '0011',
      name: '电磁学',
      parent: '0007'
    },
    {
      objectId: '0012',
      name: '光学',
      parent: '0007'
    },
    {
      objectId: '0013',
      name: '热力学',
      parent: '0007'
    },
    {
      objectId: '0014',
      name: '相对论',
      parent: '0007'
    }
  ];
  return columns;
});