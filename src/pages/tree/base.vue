<template>
  <div class="container">
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="loadData">重新加载</vxe-button>
        <vxe-button @click="$refs.xTree.setAllTreeExpand(true)">展开所有</vxe-button>
        <vxe-button @click="$refs.xTree.clearTreeExpand()">关闭所有</vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      ref="xTree"
      resizable
      border
      :loading="loading"
      :tree-config="{
        children: 'childs',
        accordion: false,
        line: true,
        toggleMethod: toggleTreeMethod,
      }"
      @toggle-tree-expand="toggleExpandChangeEvent"
    >
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: "TreeBase",
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
      gridCols: [],
      gridData: [],
      loading: false,
    };
  },
  methods: {
    loadData() {
      this.loading = true;
      console.time('tree');
      this.$axios
        .request({
          url: "/getTreeData",
          method: "POST",
        })
        .then((resp) => {
          if (resp.status === 200) {
            this.gridData = resp.data;
            // console.log('count gridData: ', resp.data);
            this.$refs.xTree.loadData(resp.data);
          } else {
            this.$message.error("获取树形控件数据失败");
          }
        })
        .catch((error) => {
          this.$message.error(error);
        })
        .finally(() => {
          this.loading = false;
          setTimeout(() => {
            console.timeEnd('tree');
            console.log('count: ', this.gridData.length);
          });
        });
    },
    loadCols() {
      this.$axios
        .request({
          url: "/getTreeCols",
          method: "POST",
        })
        .then((resp) => {
          this.gridCols = resp.data;
          // console.log('gridCols: ', resp.data);
          this.$refs.xTree.loadColumn(resp.data);
        })
        .catch(() => {
          this.gridCols = [];
        });
    },
    toggleExpandChangeEvent({ expanded }) {
      // console.log("节点展开事件" + expanded);
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
  },
  mounted() {
    this.loadCols();
    this.loadData();
  },
};
</script>

<style lang="less">
@import url("~@/styles/scrollbar.less");
.app {
  padding: 10px;
}
</style>