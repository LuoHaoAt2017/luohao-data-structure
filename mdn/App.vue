<template>
  <div class="app">
    <div class="sidebar">
      <router-link to="/home" class="link">首页</router-link>
      <router-link to="/chess" class="link">棋盘</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
.app {
  display: flex;
  height: 100%;
  .sidebar {
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    border-right: 1px solid #ccc;
    .link {
      display: block;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
  }
  .content {
    width: 320px;
    flex-grow: 1;
    flex-shrink: 1;
  }
}
</style>