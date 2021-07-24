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
        <vxe-button @click="onAction(4)">重载</vxe-button>
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
          @page-change="onChange"
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
        showOverflow: 'tooltip', // 'tooltip'
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
          this.loadData();
          break;
        case 2:
          this.loadData();
          break;
        case 3:
          this.loadData();
          break;
        case 4:
          this.forceLoad();
          break;
        default:
          break;
      }
    },
    loadData({ pageSize } = { pageSize: 20 }, callback) {
      this.loading = true;
      console.time('data');
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
        console.timeEnd('data');
        setTimeout(() => {
          callback && callback();
        });
      });
    },
    loadCols() {
      console.time('cols');
      return new Promise((resolve) => {
        this.$axios.request({
          url: '/getTableCols',
          method: 'POST',
          data: {
            include: true
          }
        }).then((resp) => {
          this.gridCols = resp.data;
          resolve(true);
        }).catch(() => {
          this.gridCols = [];
          console.timeEnd('cols');
          resolve(false);
        });
      });
    },
    onChange({ currentPage, pageSize }) {
      this.gridPage.currentPage = currentPage;
      this.gridPage.pageSize = pageSize;
      this.gridPage.pageOffset = (currentPage - 1) * pageSize;
      this.loadData({
        pageSize: this.gridPage.pageSize,
        pageOffset: this.gridPage.pageOffset,
      });
    },
    forceLoad() {
      console.time('total');
      this.loadCols().then(() => {
        this.loadData({ pageSize: 20 }, () => {
          console.timeEnd('total');
        });
      });
    }
  },
  mounted() {
    this.forceLoad();
  },
};
</script>

<style lang="less">
.table {
  padding: 10px 20px;
}
</style>