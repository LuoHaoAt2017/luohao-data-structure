<template>
  <div class="container">
    <a-menu mode="horizontal" v-model="defaultSelectedKeys">
      <a-menu-item key="base">
        <router-link to="/tree/base">基础配置</router-link>
      </a-menu-item>
      <a-menu-item key="lazy">
        <router-link to="/tree/lazy">子表懒加载</router-link>
      </a-menu-item>
    </a-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { Menu } from 'ant-design-vue';
export default {
  name: "Tree",
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item
  },
  data() {
    return {
      defaultSelectedKeys: ['base']
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  .ant-menu-horizontal {
    line-height: 40px;
  }
}
</style>