function openAcc(acc) {
  var accordion = acc.target;
  console.log(acc.target);
  var panel = accordion.nextElementSibling;
  console.log(panel);
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    accordion.className = accordion.className.replace(" active", "");
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    accordion.className += " active";
  }
}

export default openAcc;
