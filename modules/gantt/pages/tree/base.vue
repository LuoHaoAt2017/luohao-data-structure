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
      show-overflow
      show-header-overflow
      highlight-hover-row
      height="800"
      :scroll-x="{
        enabled: true,
        gt: 20,
        oSize: 5
      }"
      :scroll-y="{
        enabled: true,
        gt: 30,
        oSize: 5
      }"
      :tree-config="{
        children: 'children',
        accordion: false,
        line: true,
        lazy: true, // 是否使用懒加载（启用后只有指定 hasChild 的节点才允许被点击）
        toggleMethod: toggleTreeMethod,
      }"
      :loading="loading"
      :row-key="true"
      :resizable="true"
      :border="true"
      @toggle-tree-expand="toggleExpandChangeEvent">
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: "TreeBase",
  data() {
    return {
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
          url: "/getTreeData1",
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
          url: "/getTreeCols1",
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
@import url("../../styles/scrollbar.less");
</style>