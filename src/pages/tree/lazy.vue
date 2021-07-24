<template>
  <div class="container">
    <vxe-table
      resizable
      border="inner"
      ref="xTree"
      :tree-config="{
        children: 'childs',
        accordion: false,
        line: false,
        toggleMethod: toggleTreeMethod,
      }"
      :expand-config="{ lazy: true, loadMethod: loadContentMethod }"
      :data="tableData1"
      @toggle-tree-expand="toggleExpandChangeEvent"
    >
      <vxe-table-column
        type="seq"
        align="left"
        width="80"
        fixed="left"
      ></vxe-table-column>
      <vxe-table-column
        field="name"
        title="数据标题"
        show-overflow="tooltip"
        tree-node
      ></vxe-table-column>
      <vxe-table-column type="expand" width="120" title="子表明细">
        <template #default>more</template>
        <template #content="{ row }">
          <vxe-grid :columns="row.childCols" :data="row.childData"></vxe-grid>
        </template>
      </vxe-table-column>
      <vxe-table-column field="size" title="Size"></vxe-table-column>
      <vxe-table-column field="type" title="Type"></vxe-table-column>
      <vxe-table-column field="date" title="Date"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
import XEUtils from 'xe-utils';
export default {
  name: "TreeLazy",
  data() {
    return {
      tableData1: [
        {
          id: 1000,
          name: "vxe-table 从入门到放弃1",
          type: "mp3",
          size: 1024,
          date: "2020-08-01",
        },
        {
          id: 1005,
          name: "Test2",
          type: "mp4",
          size: null,
          date: "2021-04-01",
          childs: [
            {
              id: 24300,
              name: "Test3",
              type: "avi",
              size: 1024,
              date: "2020-03-01",
            },
            {
              id: 20045,
              name: "vxe-table 从入门到放弃4",
              type: "html",
              size: 600,
              date: "2021-04-01",
            },
            {
              id: 10053,
              name: "vxe-table 从入门到放弃96",
              type: "avi",
              size: null,
              date: "2021-04-01",
              childs: [
                {
                  id: 24330,
                  name: "vxe-table 从入门到放弃5",
                  type: "txt",
                  size: 25,
                  date: "2021-10-01",
                },
                {
                  id: 21011,
                  name: "Test6",
                  type: "pdf",
                  size: 512,
                  date: "2020-01-01",
                },
                {
                  id: 22200,
                  name: "Test7",
                  type: "js",
                  size: 1024,
                  date: "2021-06-01",
                },
              ],
            },
          ],
        },
        {
          id: 23666,
          name: "Test8",
          type: "xlsx",
          size: 2048,
          date: "2020-11-01",
          childs: [
            {
              id: 24300,
              name: "Test3",
              type: "avi",
              size: 1024,
              date: "2020-03-01",
            },
            {
              id: 20045,
              name: "vxe-table 从入门到放弃4",
              type: "html",
              size: 600,
              date: "2021-04-01",
            },
            {
              id: 10053,
              name: "vxe-table 从入门到放弃96",
              type: "avi",
              size: null,
              date: "2021-04-01",
              childs: [
                {
                  id: 24330,
                  name: "vxe-table 从入门到放弃5",
                  type: "txt",
                  size: 25,
                  date: "2021-10-01",
                },
                {
                  id: 21011,
                  name: "Test6",
                  type: "pdf",
                  size: 512,
                  date: "2020-01-01",
                },
                {
                  id: 22200,
                  name: "Test7",
                  type: "js",
                  size: 1024,
                  date: "2021-06-01",
                },
              ],
            },
          ],
        },
        {
          id: 24555,
          name: "vxe-table 从入门到放弃9",
          type: "avi",
          size: 224,
          date: "2020-10-01",
        },
      ],
      toolbarConfig: {
        custom: true,
        slots: {
          buttons: "toolbar_buttons",
        },
      },
    };
  },
  methods: {
    toggleExpandChangeEvent({ row, expanded }) {
      console.log("节点展开事件" + expanded);
    },
    getTreeExpansionEvent() {
      let treeExpandRecords = this.$refs.xTree.getTreeExpandRecords();
      this.$XModal.alert(treeExpandRecords.length);
    },
    toggleTreeMethod({ expanded, row }) {
      if (expanded) {
        if (row.date === "2019-10-22") {
          this.$XModal.message({
            id: "openErr",
            content: "不允许展开",
            status: "error",
          });
          return false;
        }
      } else {
        if (row.date === "2019-03-04") {
          this.$XModal.message({
            id: "closeErr",
            content: "不允许关闭",
            status: "error",
          });
          return false;
        }
      }
      return true;
    },
    loadContentMethod({ row }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let childCols = XEUtils.sample(
            [
              { type: "seq", title: "Sequence" },
              { field: "name", title: "Name" },
              { field: "role", title: "Role" },
              { field: "age", title: "Age" },
              { field: "sex", title: "Sex" },
            ],
            XEUtils.random(3, 5)
          );
          let childData = XEUtils.sample(
            [
              { name: "TEST1", role: "Develop", age: 20, sex: "女" },
              { name: "TEST2", role: "Develop", age: 22, sex: "女" },
              { name: "TEST3", role: "Develop", age: 24, sex: "男" },
              { name: "TEST4", role: "Develop", age: 26, sex: "女" },
              { name: "TEST5", role: "Develop", age: 28, sex: "男" },
              { name: "TEST6", role: "Develop", age: 30, sex: "男" },
            ],
            XEUtils.random(1, 5)
          );
          row.childCols = childCols;
          row.childData = childData;
          resolve();
        }, 500);
      });
    },
  },
  mounted() {},
};
</script>

<style lang="less">
@import url("~@/styles/scrollbar.less");
.app {
  padding: 10px;
}
</style>