<template>
  <div class="container">
    <a-menu mode="horizontal" v-model="defaultSelectedKeys">
      <a-menu-item key="/tree/base">
        <router-link to="/tree/base">基础配置</router-link>
      </a-menu-item>
      <a-menu-item key="/tree/lazy">  
        <router-link to="/tree/lazy">懒加载</router-link>
      </a-menu-item>
    </a-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import '../../components/cell-render';
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
  created() {
    const hash = this.$route.path;
    this.defaultSelectedKeys = [hash];
  }
};
</script>

<style lang="less" scoped>
.container {
  .ant-menu-horizontal {
    line-height: 40px;
  }
}
</style>