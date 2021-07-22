<template>
  <div class="table">
    <vxe-grid
      ref="xGrid"
      v-bind="gridOptions"
      :loading="loading"
      :data="gridData"
      :columns="gridCols"
    >
      <template #toolbar_buttons>
        <!-- <vxe-button @click="onAction(1)">行高相等</vxe-button>
        <vxe-button @click="onAction(2)">行高不等</vxe-button> -->
        <vxe-button @click="onAction(3)">刷新</vxe-button>
        <!-- <vxe-button @click="onAction(4)">导出</vxe-button> -->
      </template>
      <template #textbox="{ row, column }">
        <custom-textbox :row="row" :col="column"></custom-textbox>
      </template>
      <template #address="{ row, column }">
        <custom-address :row="row" :col="column"></custom-address>
      </template>
      <template #attachment="{ row, column }">
        <custom-attachment :row="row" :col="column"></custom-attachment>
      </template>
      <template #datetime="{ row, column }">
        <custom-datetime :row="row" :col="column"></custom-datetime>
      </template>
      <template #organization="{ row, column, rowIndex }">
        <custom-organization
          :row="row"
          :rowIndex="rowIndex"
          :col="column"
        ></custom-organization>
      </template>
      <template #pager>
        <vxe-pager
          :layouts="gridPage.pageLayout"
          :current-page="gridPage.currentPage"
          :page-size="gridPage.pageSize"
          :page-sizes="pageSelector"
          :total="gridPage.total"
          @page-change="onPageChange"
          size="medium"
        >
        </vxe-pager>
      </template>
    </vxe-grid>
  </div>
</template>

<script>
import CustomTextbox from "../components/textbox.vue";
import CustomAddress from "../components/address.vue";
import CustomAttachment from "../components/attachment.vue";
import CustomDatetime from "../components/datetime.vue";
import CustomOrganization from "../components/organization.vue";
export default {
  name: "Table",
  components: {
    CustomTextbox,
    CustomAddress,
    CustomAttachment,
    CustomDatetime,
    CustomOrganization,
  },
  data() {
    return {
      gridOptions: {
        border: true,
        stripe: true,
        resizable: true,
        height: "850",
        border: true,
        round: true,
        resizable: true,
        headerAlign: "center",
        align: "left",
        loading: false,
        highlightHoverRow: true,
        showOverflow: false, // 'tooltip'
        showHeaderOverflow: true, // 设置表头所有内容过长时显示为省略号
        showHeader: true,
        showFooter: false,
        "scroll-x": {
          enabled: false, // 横向虚拟滚动不支持分组表头
          // gt: 15,
          // oSize: 20,
        },
        "scroll-y": {
          enabled: true,
          // gt: 15,
          // oSize: 20,
        },
        toolbarConfig: {
          custom: true,
          slots: {
            buttons: "toolbar_buttons",
          },
        },
      },
      gridPage: {
        total: 0,
        currentPage: 1,
        pageSize: 20,
        pageOffset: 0,
        pageLayout: [
          "PrevPage",
          "NextPage",
          "Jump",
          "PageCount",
          "Sizes",
          "Total",
        ],
      },
      pageSelector: [
        {
          label: "10",
          value: 10,
        },
        {
          label: "20",
          value: 20,
        },
        {
          label: "50",
          value: 50,
        },
        {
          label: "100",
          value: 100,
        },
      ],
      gridCols: [],
      gridData: [],
      loading: false
    };
  },
  methods: {
    onAction(type) {
      switch (type) {
        case 1:
          this.gridOptions.showOverflow = true;
          this.loadData();
          break;
        case 2:
          this.gridOptions.showOverflow = false;
          this.loadData();
          break;
        case 3:
          this.loadData();
          break;
        case 4:
          break;
        default:
          break;
      }
    },
    loadData({ pageSize } = { pageSize: 20 }) {
      this.loading = true;
      this.$axios.request({
        url: '/getTableData',
        method: 'POST',
        data: {
          pageSize: pageSize
        }
      }).then((resp) => {
        if (resp.status === 200) {
          this.gridData = resp.data;
          this.gridPage.total = 500;
        } else {
          this.$message.error('获取列表数据失败');
        }
      }).catch((error) => {
        this.$message.error(error);
      }).finally(() => {
        this.loading = false;
      });
    },
    loadCols() {
      this.gridCols = [
        { type: "seq", width: 50, align: "center" },
        { type: "checkbox", width: 50, align: "center" },
        { field: "title", title: "title", width: 150, showOverflow: true },
        { field: "age", title: "age", minWidth: 150 },
        {
          field: "datetime",
          title: "datetime",
          minWidth: 150,
          params: { inChildGrid: false },
          slots: { default: "datetime" },
        },
        {
          field: "address",
          title: "address",
          minWidth: 150,
          params: { inChildGrid: false },
          slots: { default: "address" },
        },
        {
          field: "organization",
          title: "organization",
          minWidth: 150,
          params: { inChildGrid: false },
          slots: { default: "organization" },
        },
        {
          field: "attachment",
          title: "attachment",
          minWidth: 150,
          params: { inChildGrid: false },
          slots: { default: "attachment" },
        },
        {
          title: "子表信息",
          children: [
            {
              field: "datetime1",
              title: "datetime1",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "datetime" },
            },
            {
              field: "datetime2",
              title: "datetime2",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "datetime" },
            },
            {
              field: "datetime3",
              title: "datetime3",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "datetime" },
            },
            {
              field: "datetime4",
              title: "datetime4",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "datetime" },
            },
            {
              field: "datetime5",
              title: "datetime5",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "datetime" },
            },
            {
              field: "address1",
              title: "address1",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "address" },
            },
            {
              field: "address2",
              title: "address2",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "address" },
            },
            {
              field: "address3",
              title: "address3",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "address" },
            },
            {
              field: "address4",
              title: "address4",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "address" },
            },
            {
              field: "address5",
              title: "address5",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "address" },
            },
            {
              field: "organization1",
              title: "organization1",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "organization" },
            },
            {
              field: "organization2",
              title: "organization2",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "organization" },
            },
            {
              field: "organization3",
              title: "organization3",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "organization" },
            },
            {
              field: "organization4",
              title: "organization4",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "organization" },
            },
            {
              field: "organization5",
              title: "organization5",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "organization" },
            },
            {
              field: "attachment1",
              title: "attachment1",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "attachment" },
            },
            {
              field: "attachment2",
              title: "attachment2",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "attachment" },
            },
            {
              field: "attachment3",
              title: "attachment3",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "attachment" },
            },
            {
              field: "attachment4",
              title: "attachment4",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "attachment" },
            },
            {
              field: "attachment5",
              title: "attachment5",
              minWidth: 150,
              params: { inChildGrid: true },
              slots: { default: "attachment" },
            },
          ],
        },
      ];
      // ip
      Array.from({length: 5}, (_, index) => index).forEach((index) => {
        this.gridCols.push({ field: "ip" + (index + 1), title: "ip" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
      });
      // name
      Array.from({length: 5}, (_, index) => index).forEach((index) => {
        this.gridCols.push({ field: "name" + (index + 1), title: "name" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
      });
      // status
      Array.from({length: 5}, (_, index) => index).forEach((index) => {
        this.gridCols.push({ field: "status" + (index + 1), title: "status" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
      });
      // website
      Array.from({length: 5}, (_, index) => index).forEach((index) => {
        this.gridCols.push({ field: "website" + (index + 1), title: "website" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
      });
      // brief
      Array.from({length: 5}, (_, index) => index).forEach((index) => {
        this.gridCols.push({ field: "brief" + (index + 1), title: "brief" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
      });
      // email
      Array.from({length: 5}, (_, index) => index).forEach((index) => {
        this.gridCols.push({ field: "email" + (index + 1), title: "email" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
      });
      // create
      Array.from({length: 5}, (_, index) => index).forEach((index) => {
        this.gridCols.push({ field: "create" + (index + 1), title: "create" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
      });
      // update
      Array.from({length: 5}, (_, index) => index).forEach((index) => {
        this.gridCols.push({ field: "update" + (index + 1), title: "update" + (index + 1), minWidth: 150, showOverflow: true, slots: {default: 'textbox'} });
      });
    },
    onPageChange({ currentPage, pageSize }) {
      this.gridPage.currentPage = currentPage;
      this.gridPage.pageSize = pageSize;
      this.gridPage.pageOffset = (currentPage - 1) * pageSize;
      this.loadData({
        pageSize: this.gridPage.pageSize,
        pageOffset: this.gridPage.pageOffset,
      });
    },
  },
  mounted() {
    this.loadCols();
    this.loadData();
  },
};
</script>

<style lang="less">
.table {
  padding: 10px 20px;
}
.custom-cell {
  ul,
  li {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  ul.sub-row {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    li {
      span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  ul.sup-row {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    li {
      height: 32px;
      line-height: 32px;
    }
  }
}
</style>