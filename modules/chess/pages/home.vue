<template>
  <div class="home">
    <div id="container"></div>
  </div>
</template>
<script>
import Playground from '../utils/playground';
export default {
  name: 'home',
  data() {
    return {
      playground: null
    }
  },
  methods: {

  },
  created() {

  },
  mounted() {
    const container = document.querySelector('#container');
    this.playground = new Playground(container);
  }
}
</script>
<style lang="less" scoped>
#container {
}
</style>