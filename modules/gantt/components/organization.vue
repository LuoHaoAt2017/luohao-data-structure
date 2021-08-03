<template>
  <div class="custom-cell">
    <!-- 字表中展示 多行多列 -->
    <ul v-if="col.params && col.params.inChildGrid" class="sub-row">
      <li v-for="(item, i) in colData" :key="i" class="sub-col">
        <template v-if="Array.isArray(item)">
          <span v-for="(elem, j) in item" :key="j" style="margin-right: 5px;">
            <a-avatar
              shape="square"
              :size="24"
              :style="{ backgroundColor: color, verticalAlign: 'middle' }"
            >
              {{ elem }}
            </a-avatar>
          </span>
        </template>
        <span v-else class="name">
          <a-avatar
            shape="square"
            :size="24"
            :style="{ backgroundColor: color, verticalAlign: 'middle' }"
          >
            {{ item }}
          </a-avatar>
        </span>
      </li>
      <li v-if="more">......</li>
    </ul>
    <!-- 主表中展示 单行多列-->
    <div v-else class="sup-row">
      <span v-for="(elem, index) in colData" :key="index" class="sup-col"  style="margin-right: 5px;">
        <a-avatar
          shape="square"
          :size="24"
          :style="{ backgroundColor: color, verticalAlign: 'middle' }"
        >
          {{ elem }}
        </a-avatar>
      </span>
    </div>
  </div>
</template>
<script>
import { Avatar } from "ant-design-vue";
const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
export default {
  name: "CustomOrganization",
  components: {
    AAvatar: Avatar,
  },
  props: {
    row: {
      type: Object,
      default: () => {},
    },
    col: {
      type: Object,
      default: () => {},
    },
    rowIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      more: false,
      color: colorList[this.rowIndex],
    };
  },
  computed: {
    colData() {
      const prop = this.col.property;
      const resp = (prop && this.row[prop]) || [];
      const list = Array.isArray(resp) ? resp : [resp];
      if (list.length > 6) {
        this.more = true;
        return list.slice(0, 6);
      }
      return list;
    },
  },
  methods: {},
  created() {},
};
</script>
<style lang="less" scoped>
ul.sub-row {
  li.sub-col {
    height: 32px;
    line-height: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.sup-row {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .sup-col {
    display: inline-block;
    height: 32px;
    line-height: 32px;
  }
}
</style>