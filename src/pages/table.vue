<template>
  <div class="table">
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script>
import mockData from "../mocks/table";
export default {
  name: "Table",
  data() {
    return {
      gridOptions: {
        border: true,
        stripe: true,
        resizable: true,
        height: 800,
        border: true,
        round: true,
        resizable: true,
        minWidth: 150,
        headerAlign: 'center',
        align: 'left',
        loading: false,
        highlightHoverRow: true,
        showOverflow: true, // 'tooltip'
        showHeaderOverflow: true, // 设置表头所有内容过长时显示为省略号
        showHeader: true,
        showFooter: true,
        'scroll-x': {
          enabled: true, // 横向虚拟滚动不支持分组表头
          // gt: 15,
          // oSize: 20,
        },
        'scroll-y': {
          enabled: true,
          // gt: 15,
          // oSize: 20,
        },
        columns: [
          { type: "seq", width: 50 },
          { type: "checkbox", width: 50 },
          { field: "title", title: "title" },
          { field: "rate", title: "rate"},
          {
            title: "子表信息",
            children: [
              { field: "datetime1", title: "datetime1" },
              { field: "datetime2", title: "datetime2" },
              { field: "datetime3", title: "datetime3" },
              { field: "address1", title: "address1" },
              { field: "address2", title: "address2" },
              { field: "address3", title: "address3" },
              { field: "organization1", title: "organization1" },
              { field: "organization2", title: "organization1" },
              { field: "organization3", title: "organization1" },
              { field: "attachments1", title: "attachments1" },
              { field: "attachments2", title: "attachments2" },
              { field: "attachments3", title: "attachments3" },
            ],
          },
        ],
        data: [],
      },
    };
  },
  methods: {
    loadData() {                        
      this.gridOptions.data = mockData();
      // console.table(this.gridOptions.data);
    }
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="less">
</style>