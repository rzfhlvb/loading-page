const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 100);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);

    setTimeout(() => {
      load = 0;
      int = setInterval(blurring, 100);
    }, 2000);
  }

  loadText.innerText = load + "%";
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};