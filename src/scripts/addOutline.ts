// <a>に赤色のアウトラインを追加
document.body.querySelectorAll("a").forEach((elm) => {
  elm.style.outline = "dotted 1px red";
});

// <img> に青色のアウトラインを追加
document.body.querySelectorAll("img").forEach((elm) => {
  elm.style.outline = "dotted 1px blue";
});
