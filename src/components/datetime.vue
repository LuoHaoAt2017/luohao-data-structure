<template>
  <div class="custom-cell">
    <!-- 字表中展示 多行多列 -->
    <ul v-if="col.params.inChildGrid" class="sub-row">
      <li v-for="(item, i) in colData" :key="i" class="sub-col">
        <template v-if="Array.isArray(item)">
          <span v-for="(elem, j) in item" :key="j">
            {{ elem }}
          </span>
        </template>
        <span v-else class="name"> </span>
      </li>
      <li v-if="more">
        <span>......</span>
      </li>
    </ul>
    <!-- 主表中展示 单行多列-->
    <ul v-else class="sup-row">
      <li v-for="(item, index) in colData" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CustomDatetime",
  props: {
    row: {
      type: Object,
      default: () => {},
    },
    col: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      more: false,
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