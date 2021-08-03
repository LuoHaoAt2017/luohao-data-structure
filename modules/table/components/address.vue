<template>
  <div class="custom-cell">
    <!-- 字表中展示 多行多列 -->
    <ul v-if="col.params && col.params.inChildGrid" class="sub-row">
      <li v-for="(item, i) in colData" :key="i" class="sub-col">
        <template v-if="Array.isArray(item)">
          <span v-for="(elem, j) in item" :key="j">
            <span class="name" v-if="j < item.length - 1">
              {{ elem }}&#59;&nbsp;
            </span>
            <span class="name" v-else>{{ elem }}</span>
          </span>
        </template>
        <span v-else class="name">
          {{ item }}
        </span>
      </li>
      <li v-if="more">......</li>
    </ul>
    <!-- 主表中展示 单行多列-->
    <div v-else class="sup-row">
      <span v-for="(elem, index) in colData" :key="index" class="sup-col">
        <span class="name" v-if="index < colData.length - 1">
          {{ elem }}&#59;&nbsp;
        </span>
        <span class="name" v-else>{{ elem }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomAddress",
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