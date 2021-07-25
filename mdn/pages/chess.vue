<template>
  <div class="container" id="board"></div>
</template>

<script>
export default {
  name: "chess",
  data() {
    return {
      $svg: null,
      cells: [],
      h_lines: [],
      v_lines: [],
      d_lines: [],
      cell_unit: 8,
    };
  },
  methods: {
    create_svg(tag, attrs) {
      const elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
      for (let attr in attrs) {
        if (attr === "innerHTML") {
          elem.innerHTML = attrs.innerHTML;
        } else {
          elem.setAttribute(attr, attrs[attr]);
        }
      }
      return elem;
    },
    setup_chess() {
      this.clear_chess();
      this.setup_cells();
      this.setup_lines();
    },
    setup_cells() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 9; j++) {
          this.cells.push({
            px: i * 9,
            py: j * 9,
            han: i < 5,
          });
        }
      }
    },
    setup_lines() {
      // 棋盘横向线
      for (let i = 0; i < 10; i++) {
        this.h_lines.push({
          x1: 0 * this.cell_unit,
          y1: i * 10 * this.cell_unit,
          x2: 80 * this.cell_unit,
          y2: i * 10 * this.cell_unit,
          stroke: "black",
        });
      }
      // 棋盘纵向线
      for (let j = 0; j < 9; j++) {
        this.v_lines.push({
          x1: j * 10 * this.cell_unit,
          y1: 0 * this.cell_unit,
          x2: j * 10 * this.cell_unit,
          y2: 90 * this.cell_unit,
          stroke: "black",
        });
      }
      this.d_lines.push(
        ...[
          {
            x1: 3 * 10 * this.cell_unit,
            y1: 0 * this.cell_unit,
            x2: 5 * 10 * this.cell_unit,
            y2: 2 * 10 * this.cell_unit,
            stroke: "black",
          },
          {
            x1: 5 * 10 * this.cell_unit,
            y1: 0 * this.cell_unit,
            x2: 3 * 10 * this.cell_unit,
            y2: 2 * 10 * this.cell_unit,
            stroke: "black",
          },
          {
            x1: 3 * 10 * this.cell_unit,
            y1: 9 * 10 * this.cell_unit,
            x2: 5 * 10 * this.cell_unit,
            y2: 7 * 10 * this.cell_unit,
            stroke: "black",
          },
          {
            x1: 5 * 10 * this.cell_unit,
            y1: 9 * 10 * this.cell_unit,
            x2: 3 * 10 * this.cell_unit,
            y2: 7 * 10 * this.cell_unit,
            stroke: "black",
          },
        ]
      );
    },
    draw_river() {
      // 楚河汉界
      const elem = this.create_svg("rect", {
        x: 0,
        y: 4 * 10 * this.cell_unit,
        width: 640,
        height: 10 * this.cell_unit,
        fill: "white",
        stroke: "black",
        "stroke-width": 1,
        class: "bank",
      });
      const chuText = this.create_svg("text", {
        x: 1.2 * 10 * this.cell_unit,
        y: 4.75 * 10 * this.cell_unit,
        stroke: "red",
        fill: 'red',
        innerHTML: "楚",
        'font-size': 48,
        'font-family': "NSimSun"
      });
      const heText = this.create_svg("text", {
        x: 2.2 * 10 * this.cell_unit,
        y: 4.75 * 10 * this.cell_unit,
        fontSize: 50,
        fill: 'red',
        stroke: "red",
        innerHTML: "河",
        'font-size': 48,
        'font-family': "NSimSun"
      });
      const hanText = this.create_svg("text", {
        x: 6.8 * 10 * this.cell_unit,
        y: 4.25 * 10 * this.cell_unit,
        rotate: 180,
        stroke: "black",
        innerHTML: "汉",
        'font-size': 48,
        'font-family': "NSimSun"
      });
      const jieText = this.create_svg("text", {
        x: 5.8 * 10 * this.cell_unit,
        y: 4.25 * 10 * this.cell_unit,
        rotate: 180,
        stroke: "black",
        innerHTML: "界",
        'font-size': 48,
      });
      this.$svg.append(elem);
      this.$svg.append(chuText);
      this.$svg.append(heText);
      this.$svg.append(hanText);
      this.$svg.append(jieText);
    },
    draw_lines() {
      this.draw_h_lines();
      this.draw_v_lines();
      this.draw_d_lines();
    },
    draw_h_lines() {
      this.h_lines.forEach((line) => {
        const elem = this.create_svg("line", line);
        this.$svg.appendChild(elem);
      });
    },
    draw_v_lines() {
      this.v_lines.forEach((line) => {
        const elem = this.create_svg("line", line);
        this.$svg.appendChild(elem);
      });
    },
    draw_d_lines() {
      // 帅米字格
      this.d_lines.forEach((line) => {
        const elem = this.create_svg("line", line);
        this.$svg.appendChild(elem);
      });
    },
    render_chess() {
      this.$svg = this.create_svg("svg", {
        width: 640,
        height: 720,
      });
      const rect = this.create_svg("path", {
        d: `
          M 0 0
          H 640
          V 720
          H 0
          V 0
        `,
        fill: "none", // 禁止充填
        stroke: "black",
        "stroke-width": 2,
      });
      this.draw_lines();
      this.draw_river();
      this.$svg.appendChild(rect);
      const board = document.querySelector("#board");
      board && board.appendChild(this.$svg);
    },
    clear_chess() {
      this.$svg = null;
      this.cells = [];
      this.h_lines = [];
      this.v_lines = [];
      this.d_lines = [];
    },
  },
  created() {
    this.setup_chess();
  },
  mounted() {
    this.render_chess();
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  .river-text {
    font-size: 24px;
  }
}
</style>