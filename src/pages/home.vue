<template>
  <div class="home">
    home
  </div>
</template>
<script>
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
      url: '/getDepartment',
      method: 'POST'
    }).then((res) => {
      console.table(res.data);
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