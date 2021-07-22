<template>
  <div class="table">
    <vxe-grid v-bind="gridOptions" :data="gridData" :columns="gridCols">
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
        <custom-organization :row="row" :rowIndex="rowIndex" :col="column"></custom-organization>
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
import mockData from "../mocks/table";
import CustomAddress from "../components/address.vue";
import CustomAttachment from "../components/attachment.vue";
import CustomDatetime from "../components/datetime.vue";
import CustomOrganization from "../components/organization.vue";
export default {
  name: "Table",
  components: {
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
        height: "900",
        border: true,
        round: true,
        resizable: true,
        headerAlign: "center",
        align: "left",
        loading: false,
        highlightHoverRow: true,
        showOverflow: true, // 'tooltip'
        showHeaderOverflow: true, // 设置表头所有内容过长时显示为省略号
        showHeader: true,
        showFooter: false,
        "scroll-x": {
          enabled: true, // 横向虚拟滚动不支持分组表头
          // gt: 15,
          // oSize: 20,
        },
        "scroll-y": {
          enabled: true,
          // gt: 15,
          // oSize: 20,
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
          label: '10',
          value: 10,
        },
        {
          label: '20',
          value: 20,
        },
        {
          label: '50',
          value: 50,
        },
        {
          label: '100',
          value: 100,
        },
      ],
      gridCols: [],
      gridData: [],
    };
  },
  methods: {
    loadData({ pageSize } = { pageSize: 20 }) {
      this.gridData = mockData({ pageSize });
      this.gridPage.total = 500;
    },
    loadCols() {
      this.gridCols = [
        { type: "seq", width: 50, align: "center" },
        { type: "checkbox", width: 50, align: "center" },
        { field: "title", title: "title", width: 150 },
        { field: "age", title: "age", minWidth: 150 },
        {
          field: "datetime",
          title: "datetime",
          minWidth: 150,
          slots: { default: "datetime" },
        },
        {
          field: "address",
          title: "address",
          minWidth: 150,
          slots: { default: "address" },
        },
        {
          field: "organization",
          title: "organization",
          minWidth: 150,
          slots: { default: "organization" },
        },
        {
          field: "attachment",
          title: "attachment",
          minWidth: 150,
          slots: { default: "attachment" },
        },
        {
          title: "子表信息",
          children: [
            {
              field: "datetime1",
              title: "datetime1",
              minWidth: 150,
              slots: { default: "datetime" },
            },
            {
              field: "datetime2",
              title: "datetime2",
              minWidth: 150,
              slots: { default: "datetime" },
            },
            {
              field: "datetime3",
              title: "datetime3",
              minWidth: 150,
              slots: { default: "datetime" },
            },
            {
              field: "address1",
              title: "address1",
              minWidth: 150,
              slots: { default: "address" },
            },
            {
              field: "address2",
              title: "address2",
              minWidth: 150,
              slots: { default: "address" },
            },
            {
              field: "address3",
              title: "address3",
              minWidth: 150,
              slots: { default: "address" },
            },
            {
              field: "organization1",
              title: "organization1",
              minWidth: 150,
              slots: { default: "organization" },
            },
            {
              field: "organization2",
              title: "organization2",
              minWidth: 150,
              slots: { default: "organization" },
            },
            {
              field: "organization3",
              title: "organization3",
              minWidth: 150,
              slots: { default: "organization" },
            },
            {
              field: "attachment1",
              title: "attachment1",
              minWidth: 150,
              slots: { default: "attachment" },
            },
            {
              field: "attachment2",
              title: "attachment2",
              minWidth: 150,
              slots: { default: "attachment" },
            },
            {
              field: "attachment3",
              title: "attachment3",
              minWidth: 150,
              slots: { default: "attachment" },
            },
          ],
        },
      ];
    },
    onPageChange({ currentPage, pageSize }) {
      this.gridPage.currentPage = currentPage;
      this.gridPage.pageSize = pageSize;
      this.gridPage.pageOffset = (currentPage - 1) * pageSize;
      this.loadData({
        pageSize: this.gridPage.pageSize,
        pageOffset: this.gridPage.pageOffset
      });
    }
  },
  mounted() {
    this.loadCols();
    this.loadData();
  },
};
</script>

<style lang="less">
</style>