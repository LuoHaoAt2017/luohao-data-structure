<template>
  <div class="custom-cell">
    <!-- 字表中展示 多行多列 -->
    <ul v-if="col.params && col.params.inChildGrid" class="sub-row">
      <li v-for="(item, i) in colData" :key="i" class="sub-col">
        <template v-if="Array.isArray(item)">
          <span v-for="(elem, j) in item" :key="j">
            <a-popover placement="bottom">
              <template #content>
                <div class="popover-wrapper">
                  <img
                    :width="144"
                    :height="144"
                    :src="elem"
                    :alt="elem"
                    :preview="false"
                  />
                </div>
              </template>
              <a-button type="link" style="padding: 0 5px">
                <img
                  :width="24"
                  :height="24"
                  :src="elem"
                  :alt="elem"
                  :preview="false"
                />
              </a-button>
            </a-popover>
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
        <a-popover placement="bottom">
          <template #content>
            <div class="popover-wrapper">
              <img
                :width="144"
                :height="144"
                :src="item"
                :alt="item"
                :preview="false"
              />
            </div>
          </template>
          <a-button type="link" style="padding: 0 5px">
            <img
              :width="24"
              :height="24"
              :src="item"
              :alt="item"
              :preview="false"
            />
          </a-button>
        </a-popover>
      </li>
    </ul>
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
