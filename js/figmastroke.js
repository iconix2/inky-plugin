// figmastroke.js

// STROKE JOIN AND CAP FIGMA


function setActiveButton(groupName, activeId) {
  const buttons = document.querySelectorAll(`.${groupName}`);
  buttons.forEach(button => button.classList.remove('active'));
  document.getElementById(activeId).classList.add('active');
}

// Default for stroke join
const defaultJoinButton = document.getElementById("fgb3-miter");
if (defaultJoinButton) {
  // Do any initialization you need for the default active button
}

// Default for stroke cap
const defaultCapButton = document.getElementById("fgb3-no-cap");
if (defaultCapButton) {
  // Do any initialization you need for the default active button
}


document.getElementById("fgb3-no-cap").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-cap", capType: "NONE" } }, "*");
  setActiveButton('stroke-cap-button', 'fgb3-no-cap');
});

document.getElementById("fgb3-square-cap").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-cap", capType: "SQUARE" } }, "*");
  setActiveButton('stroke-cap-button', 'fgb3-square-cap');
});

document.getElementById("fgb3-round-cap").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-cap", capType: "ROUND" } }, "*");
  setActiveButton('stroke-cap-button', 'fgb3-round-cap');
});

document.getElementById("fgb3-miter").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-join", joinType: "MITER" } }, "*");
  setActiveButton('stroke-join-button', 'fgb3-miter');
});

document.getElementById("fgb3-bevel").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-join", joinType: "BEVEL" } }, "*");
  setActiveButton('stroke-join-button', 'fgb3-bevel');
});

document.getElementById("fgb3-round").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-join", joinType: "ROUND" } }, "*");
  setActiveButton('stroke-join-button', 'fgb3-round');
});