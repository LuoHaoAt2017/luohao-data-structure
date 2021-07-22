<template>
  <div class="custom-cell">
    {{ colData }}
  </div>
</template>
<script>
export default {
  name: 'CustomAddress',
  props: {
    row: {
      type: Object,
      default: () => {}
    },
    col: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    colData() {
      return this.row[this.col.property];
    }
  },
  methods: {
  },
  created() {
    // console.log('row: ', this.row, ' col: ', this.col);
  }
}
</script>
<style lang="less" scoped>

</style>