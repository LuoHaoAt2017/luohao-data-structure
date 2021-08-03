<template>
  <div class="container">
    <a-button-group>
      <a-button @click="changeView('Day')">日</a-button>
      <a-button @click="changeView('Week')">周</a-button>
      <a-button @click="changeView('Month')">月</a-button>
    </a-button-group>
    <div id="gantt" class="gantt"></div>
  </div>
</template>

<script>
import Gantt from "gantt";
export default {
  name: "Gantt",
  data() {
    return {
      gantt: null,
      tasks: [
        {
          start: "2018-10-01",
          end: "2018-10-08",
          name: "Redesign website",
          id: "Task 0",
          progress: 20,
        },
        {
          start: "2018-10-03",
          end: "2018-10-06",
          name: "Write new content",
          id: "Task 1",
          progress: 5,
          dependencies: "Task 0",
        },
        {
          start: "2018-10-04",
          end: "2018-10-08",
          name: "Apply new styles",
          id: "Task 2",
          progress: 10,
          dependencies: "Task 1",
        },
        {
          start: "2018-10-08",
          end: "2018-10-09",
          name: "Review",
          id: "Task 3",
          progress: 5,
          dependencies: "Task 2",
        },
        {
          start: "2018-10-08",
          end: "2018-10-10",
          name: "Deploy",
          id: "Task 4",
          progress: 0,
          dependencies: "Task 2",
        },
        {
          start: "2018-10-11",
          end: "2018-10-11",
          name: "Go Live!",
          id: "Task 5",
          progress: 0,
          dependencies: "Task 4",
          custom_class: "bar-milestone",
        },
        // {
        //   start: "2014-01-05",
        //   end: "2019-10-12",
        //   name: "Long term task",
        //   id: "Task 6",
        //   progress: 0,
        // },
      ],
      view_modes: ["Day", "Week", "Month"],
    };
  },
  methods: {
    addGantt() {
      const gantt = new Gantt("#gantt", this.tasks, {
        // header_height: 50,
        // column_width: 30,
        // step: 24,
        // view_modes: this.view_modes,
        // bar_height: 20,
        // bar_corner_radius: 3,
        // arrow_curve: 5,
        // padding: 18,
        view_mode: "Day", // view_modes: ["Day", "Week", "Month"],
        // date_format: "YYYY-MM-DD",
        // custom_popup_html: function (task) {
        //   // the task object will contain the updated
        //   // dates and progress value
        //   const end_date = moment(task._end).format("MMM D");
        //   return `
        //     <div class="details-container">
        //       <h5>${task.name}</h5>
        //       <p>Expected to finish by ${end_date}</p>
        //       <p>${task.progress}% completed!</p>
        //     </div>
        //     `;
        // },
        on_click: function (task) {
          console.log(task);
        },
        on_date_change: function (task, start, end) {
          console.log(task, start, end);
        },
        on_progress_change: function (task, progress) {
          console.log(task, progress);
        },
        on_view_change: function (mode) {
          console.log(mode);
        },
      });
      this.gantt = gantt;
    },
    changeView(opt) {
      this.gantt.change_view_mode(opt);
    },
  },
  mounted() {
    this.addGantt();
  },
};
</script>

<style lang="less">
@import url("~@/styles/scrollbar.less");
</style>