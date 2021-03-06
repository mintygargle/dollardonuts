function openPanel(acc) {
  var accordion = acc.target;

  var panel = accordion.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    accordion.className = accordion.className.replace(" active", "");
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    accordion.className += " active";
  }
}

export default openPanel;
