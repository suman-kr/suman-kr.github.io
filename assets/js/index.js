var count = 0;
const switchTheme = () => {
  const body = document.getElementsByTagName("body");
  const button = document.getElementById("switch");
  const dark = `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62)) repeat scroll 0% 0%`;
  const light = `rgba(0, 0, 0, 0) linear-gradient(to right, rgb(53, 92, 125), rgb(108, 91, 123), rgb(192, 108, 132)) repeat scroll 0% 0%`;
  const createOn = document.createElement("i");
  createOn.setAttribute("class", "fas fa-toggle-on");
  const createOff = document.createElement("i");
  createOff.setAttribute("class", "fas fa-toggle-off");
  if (count % 2 === 0) {
    body[0].style.background = dark;
    button.innerHTML = "";
    button.appendChild(createOn);
  } else {
    body[0].style.background = light;
    button.removeChild(button.childNodes[0]);
    button.appendChild(createOff);
  }

  count += 1;
};
