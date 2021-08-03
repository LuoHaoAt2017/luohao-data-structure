import Mock from "mockjs";

Mock.setup({
  timeout: '500-1000'
});

Mock.mock("/getSubject", function() {
  const columns = [
    {
      objectId: '0001',
      name: '基础科学',
      parentId: ''
    },
    {
      objectId: '0002',
      name: '语言学',
      parentId: '0001'
    },
    {
      objectId: '0003',
      name: '数学',
      parentId: '0001'
    },
    {
      objectId: '0004',
      name: '哲学',
      parentId: '0001'
    },

    {
      objectId: '0006',
      name: '自然科学',
      parentId: ''
    },
    {
      objectId: '0007',
      name: '物理学',
      parentId: '0006'
    },
    {
      objectId: '0008',
      name: '化学',
      parentId: '0006'
    },
    {
      objectId: '0009',
      name: '生物学',
      parentId: '0006'
    },

    {
      objectId: '0010',
      name: '牛顿力学',
      parentId: '0007'
    },
    {
      objectId: '0011',
      name: '电磁学',
      parentId: '0007'
    },
    {
      objectId: '0012',
      name: '光学',
      parentId: '0007'
    },
    {
      objectId: '0013',
      name: '热力学',
      parentId: '0007'
    },
    {
      objectId: '0014',
      name: '相对论',
      parentId: '0007'
    }
  ];
  return columns;
});