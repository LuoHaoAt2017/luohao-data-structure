<template>
  <div class="container" id="board"></div>
</template>

<script>
export default {
  name: 'chess',
  data() {
    return {
      $svg: null,
      cells: [],
      h_lines: [],
      v_lines: [],
      cell_unit: 8
    }
  },
  methods: {
    create_svg(tag, attrs) {
      const elem = document.createElementNS('http://www.w3.org/2000/svg', tag);
      for(let attr in attrs) {
        elem.setAttribute(attr, attrs[attr]);
      }
      return elem;
    },
    setup_chess() {
      this.setup_cells();
      this.setup_lines();
    },
    setup_cells() {
      for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 9; j++) {
          this.cells.push({
            px: i * 9,
            py: j * 9,
            han: i < 5
          });
        }
      }
    },
    setup_lines() {
      // 棋盘横向线
      for(let i = 0; i < 10; i++) {
        this.h_lines.push({
          x1: 0 * this.cell_unit,
          y1: i * 10 * this.cell_unit,
          x2: 80 * this.cell_unit,
          y2: i * 10 * this.cell_unit,
          stroke: 'black'
        });
      }
      // 棋盘纵向线
      for(let j = 0; j < 9; j++) {
        this.v_lines.push({
          x1: j * 10 * this.cell_unit,
          y1: 0 * this.cell_unit,
          x2: j * 10 * this.cell_unit,
          y2: 90 * this.cell_unit,
          stroke: 'black'
        });
      }
    },
    draw_lines() {
      this.draw_h_lines();
      this.draw_v_lines();
    },
    draw_h_lines() {
      this.h_lines.forEach(line => {
        const elem = this.create_svg('line', line);
        this.$svg.appendChild(elem);
      });
      console.log('h_lines: ', this.h_lines);
    },
    draw_v_lines() {
      this.v_lines.forEach(line => {
        const elem = this.create_svg('line', line);
        this.$svg.appendChild(elem);
      });
    },
    render_chess() {
      this.$svg = this.create_svg('svg', {
        width: 640,
        height: 720
      });
      const rect = this.create_svg('path', {
        d: `
          M 0 0
          H 640
          V 720
          H 0
          V 0
        `,
        fill: 'none',
        stroke: 'black',
        'stroke-width': 2
      });
      this.$svg.appendChild(rect);
      this.draw_lines();
      const board = document.querySelector('#board');
      board && board.appendChild(this.$svg);
    },
  },
  created() {
    this.setup_chess();
  },
  mounted() {
    this.render_chess();
  }
}
</script>
<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>