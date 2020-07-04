if (navigator.userAgent.includes("sidebar")) {
  let url = window.location.href;
  location.replace(document.referrer);
  window.open(url, "_blank");
}
