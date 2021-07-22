<template>
  <div class="app">
    <div class="sidebar">
      <router-link to="/table" class="link">列表视图</router-link>
      <router-link to="/gantt" class="link">甘特图</router-link>
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
      width: 100%;
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