<template>
  <div class="about">
  </div>
</template>
<script>
export default {
  name: 'about',
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
    }).catch((err) => {
      console.error(err);
    });
  },
}
</script>
<style lang="less" scoped>
</style>