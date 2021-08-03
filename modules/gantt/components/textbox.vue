<template>
  <div class="custom-cell">
    <!-- 主表中展示 单行多列-->
    <div>
      <span v-for="(elem, index) in colData" :key="index">
        {{ elem }}
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
      const resp = this.row[this.col.property];
      return Array.isArray(resp) ? resp : [resp];
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