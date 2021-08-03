<template>
  <div class="home">
    home
  </div>
</template>
<script>
import Tree from '../../libs/algo/index';
export default {
  name: 'home',
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
    this.$axios.request({
      url: '/getSubject',
      method: 'POST'
    }).then((res) => {
      console.table(res.data);
      const tree = new Tree({
        data: res.data
      });
      const subject = tree.getData();
      console.log(subject);
    }).catch((err) => {
      console.error(err);
    });
  },
  mounted() {
  }
}
</script>
<style lang="less" scoped>
</style>