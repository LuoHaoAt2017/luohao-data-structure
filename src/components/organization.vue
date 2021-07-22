<template>
  <div class="custom-cell">
    <a-avatar shape="square" :size="24" :style="{ backgroundColor: color, verticalAlign: 'middle' }">
      {{ colData }}
    </a-avatar>
  </div>
</template>
<script>
import { Avatar } from "ant-design-vue";
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
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
      default: 0
    }
  },
  data() {
    return {
      color: colorList[this.rowIndex],
    }
  },
  computed: {
    colData() {
      return this.row[this.col.property];
    },
  },
  methods: {},
  created() {
    // console.log("row: ", this.row, " col: ", this.col);
  },
};
</script>
<style lang="less" scoped>
</style>