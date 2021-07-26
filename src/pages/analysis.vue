<template>
  <div class="analysis">
    <div id="line1"></div>
    <div id="line2"></div>
    <div id="line3"></div>
    <div id="line4"></div>
  </div>
</template>
<script>
import { Chart } from "@antv/g2";
export default {
  name: "analysis",
  methods: {
    
    initLine1() {
      const data = [
        {
          size: 10,
          cost: [
            2931, 3258, 2983, 2608, 2847, 2749, 3115, 2732, 3082, 3285, 3032,
          ],
        },
        {
          size: 20,
          cost: [
            3031, 3333, 3001, 2788, 2924, 3308, 3395, 3009, 3228, 3383, 2938,
          ],
        },
        {
          size: 30,
          cost: [
            3319, 3019, 2923, 3269, 3351, 2969, 3041, 3441, 3366, 3019, 3175,
          ],
        },
        {
          size: 50,
          cost: [
            3888, 3358, 3551, 3313, 3604, 3101, 3291, 3384, 3380, 3415, 3087,
          ],
        },
        {
          size: 70,
          cost: [
            4009, 4315, 4154, 4339, 4255, 4281, 4549, 3949, 4556, 4396, 4533,
          ],
        },
        {
          size: 90,
          cost: [
            5015, 4026, 4248, 4455, 4444, 4026, 4226, 4290, 4098, 4066, 4362,
          ],
        },
      ].map((elem) => {
        return {
          size: elem.size,
          cost: elem.cost.reduce((pre, cur) => pre + cur) / 10,
        };
      });
      const chart = new Chart({
        container: "line1",
        height: 400,
        autoFit: true,
        padding: [40, 80],
      });
      chart.data(data);
      chart.scale({
        size: [0, 100],
        cost: {
          nice: true,
        },
      });
      chart.line().position("size*cost");
      chart.point().position("size*cost");
      chart.render();
    },
    initLine2() {
      const data = [
        {
          size: 10,
          cost: [
            4073, 3987, 4095, 4081, 4156, 4238, 4120, 4127, 4478, 4317, 4064,
          ],
        },
        {
          size: 20,
          cost: [
            3934, 3772, 3894, 4168, 3979, 3748, 3914, 4651, 3811, 3917, 4340,
          ],
        },
        {
          size: 30,
          cost: [
            3835, 3971, 4184, 4314, 4128, 4273, 3927, 4048, 3842, 4340, 4154,
          ],
        },
        {
          size: 50,
          cost: [
            4214, 4237, 4086, 4069, 4199, 4421, 4186, 4194, 4156, 4009, 4368,
          ],
        },
        {
          size: 70,
          cost: [
            4202, 4076, 3708, 4201, 4421, 4163, 4072, 4588, 4403, 4149, 4173,
          ],
        },
        {
          size: 90,
          cost: [
            4126, 4230, 4038, 4350, 4488, 4209, 4469, 4236, 4354, 4100, 4506,
          ],
        },
      ].map((elem) => {
        return {
          size: elem.size,
          cost: elem.cost.reduce((pre, cur) => pre + cur) / 10,
        };
      });
      const chart = new Chart({
        container: "line1",
        height: 400,
        autoFit: true,
        padding: [40, 80],
      });
      chart.data(data);
      chart.scale({
        size: [0, 100],
        cost: {
          nice: true,
        },
      });
      chart.line().position("size*cost");
      chart.point().position("size*cost");
      chart.render();
    },
    initLine3() {
      const data = [
        {
          size: 10,
          cost: [
            11370, 11473, 11092, 11411, 11048, 13500, 11263, 11508, 13719,
            12131,
          ],
        },
        {
          size: 20,
          cost: [
            12009, 12433, 12081, 14033, 11780, 12128, 11771, 12777, 12768,
            12910,
          ],
        },
        {
          size: 30,
          cost: [
            12155, 13607, 13010, 13175, 13520, 12576, 13960, 13076, 11517,
            12279,
          ],
        },
        {
          size: 50,
          cost: [
            14716, 12464, 11693, 12030, 14079, 11575, 11679, 12477, 13808,
            13351,
          ],
        },
        {
          size: 70,
          cost: [
            11562, 11955, 11489, 11825, 11648, 12266, 12915, 12703, 12750,
            11374,
          ],
        },
        {
          size: 90,
          cost: [
            12832, 11659, 11462, 11488, 11586, 11470, 11640, 11878, 13525,
            12290,
          ],
        },
      ].map((elem) => {
        return {
          size: elem.size,
          cost: elem.cost.reduce((pre, cur) => pre + cur) / 10,
        };
      });
      const chart = new Chart({
        container: "line3",
        height: 400,
        autoFit: true,
        padding: [40, 80],
      });
      chart.data(data);
      chart.scale({
        cost: {
          nice: true,
        },
      });
      chart.line().position("size*cost");
      chart.point().position("size*cost");
      chart.render();
    },
    initLine4() {
      const data = [
        {
          size: 10,
          cost: [
            11337, 12374, 11989, 11434, 11466, 11405, 11424, 11674, 12034,
            11341,
          ],
        },
        {
          size: 20,
          cost: [
            12780, 12082, 11501, 11311, 11729, 11425, 12132, 11523, 11381,
            11411,
          ],
        },
        {
          size: 30,
          cost: [
            12155, 13607, 13010, 13175, 13520, 12576, 13960, 13076, 11517,
            12279,
          ],
        },
        {
          size: 50,
          cost: [
            12052, 11507, 12889, 11353, 11500, 11370, 11378, 11912, 11263,
            12120,
          ],
        },
        {
          size: 70,
          cost: [
            12065, 12425, 12008, 11325, 11327, 11341, 11868, 12228, 12577,
            11665,
          ],
        },
        {
          size: 90,
          cost: [
            11594, 11876, 11352, 11166, 11837, 11334, 11594, 12223, 12118,
            13107,
          ],
        },
      ].map((elem) => {
        return {
          size: elem.size,
          cost: elem.cost.reduce((pre, cur) => pre + cur) / 10,
        };
      });
      const chart = new Chart({
        container: "line3",
        height: 400,
        autoFit: true,
        padding: [40, 80],
      });
      chart.data(data);
      chart.scale({
        cost: {
          nice: true,
        },
      });
      chart.line().position("size*cost");
      chart.point().position("size*cost");
      chart.render();
    },
  },
  mounted() {
    // showOverflow = true
    this.initLine1();
    // showOverflow = false
    this.initLine2();
    // showOverflow = true
    this.initLine3();
    // showOverflow = false
    this.initLine4();
  },
};
</script>