const output = document.querySelector(".output__radius");
const box = document.querySelector(".box");
let tr = 0,
  tl = 0,
  br = 0,
  bl = 0;

output.value = `border-radius: ${window.getComputedStyle(box).borderRadius}`;

const onChange = () => {
  setBorder();
};

const validate = evt => {
  let regex = /^[0-9\b\t]+$/;

  let ch = String.fromCharCode(evt.which);
  if (!regex.test(ch)) {
    evt.preventDefault();
  }
};

const radiusBl = () => {
  bl = document.querySelector(".input_bl").value;
  if (bl == "") {
    bl = 0;
    output.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px; `;
  }
  output.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px; `;
};

const radiusBr = () => {
  br = document.querySelector(".input_br").value;
  if (br == "") {
    br = 0;
    output.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px; `;
  }
  output.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px; `;
};

const radiusTr = () => {
  tr = document.querySelector(".input_tr").value;
  if (tr == "") {
    tr = 0;
    output.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px; `;
  }
  output.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px; `;
};

const radiusTl = () => {
  tl = document.querySelector(".input_tl").value;
  if (tl == "") {
    tl = 0;
    output.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px; `;
  }
  output.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px; `;
};

const setBorder = () => {
  document.querySelector(".box").style.borderTopRightRadius = tr + "px";
  document.querySelector(".box").style.borderTopLeftRadius = tl + "px";
  document.querySelector(".box").style.borderBottomRightRadius = br + "px";
  document.querySelector(".box").style.borderBottomLeftRadius = bl + "px";
};

const copyText = () => {
  let copy = document.querySelector(".output__radius");
  copy.select();
  copy.setSelectionRange(0, 99999);
  document.execCommand("copy");
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copy.value;
};

const outMouse = () => {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
};
