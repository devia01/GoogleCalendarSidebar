let style = document.createElement("style");
style.innerHTML = `
  body {
    display: block !important;
  }

  [role="heading"] + div > div:nth-child(2) {
    display: none;
  }
  `;
document.head.appendChild(style);

setTimeout(function () {
  document.querySelector('[aria-label="오늘"]').click();
}, 1000);
