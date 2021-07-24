export default class Playground {
  constructor(wrapper) {
    this.setup_background(wrapper);
  }

  setup_background(wrapper) {
    const room = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    room.setAttribute('width', '800');
    room.setAttribute('height', '800');
    this.setup_path_orange(room);
    this.setup_path_yellow(room);
    wrapper.appendChild(room);
  }

  setup_path_orange(room) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'orange');
    path.setAttribute('stroke', 'orange');
    path.setAttribute('stroke-width', 1);
    path.setAttribute('d', `
      M 50 50
      H 350
      V 350
      A 300 300 0 0 1 50 50
    `);
    room.appendChild(path);
  }

  setup_path_yellow(room) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'yellow');
    path.setAttribute('stroke', 'yellow');
    path.setAttribute('stroke-width', 1);
    path.setAttribute('d', `
      M 350 350
      v 300
      h 300
      A 300 300 0 0 0 350 350
    `);
    room.appendChild(path);
  }
}