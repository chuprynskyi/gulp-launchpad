let glitch = document.querySelectorAll('.glitch');
let line = document.querySelectorAll('.line');

let count = 8;

for (let i = 0; i < count; i++) {
  glitch.forEach((item, idx) => {
    divClone = line[idx].cloneNode(true);
    item.appendChild(divClone);
  });
}
