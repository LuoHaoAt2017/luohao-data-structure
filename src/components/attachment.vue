<template>
  <div class="custom-cell">
    <a-popover placement="bottom">
      <template #content>
        <div class="popover-wrapper">
          <img
            :width="144"
            :height="144"
            :src="colData"
            :alt="colData"
            :preview="false"
          />
        </div>
      </template>
      <a-button type="link" style="padding: 0 5px">
        <img
          :width="24"
          :height="24"
          :src="colData"
          :alt="colData"
          :preview="false"
        />
      </a-button>
    </a-popover>
  </div>
</template>

<script>
import { Button, Popover } from "ant-design-vue";
export default {
  name: "CustomAttachment",
  components: {
    AButton: Button,
    APopover: Popover,
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

<style lang="less">
.custom-img-cell {
  position: relative;
  .custom-img-wrapper {
    .ant-image {
      margin-right: 10px;
      border: 1px solid #eee;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
.popover-wrapper {
  .ant-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
