import glossary from "../glossary.json";
import "../styles/glossary.css";

// 文章中に「の」が含まれている場合「<b></b>」で囲む
document.body.querySelectorAll("p").forEach((elm) => {
  glossary.forEach((item) => {
    elm.innerHTML = elm.innerHTML.replace(
      new RegExp(item.word, "g"),
      `<span class="glossary-item">
        ${item.word}
        <span class="glossary-card">
            ${item.description}
            <hr class="glossary-divider"/>
            英）${item.englishName}
        </span>
        <span class="glossary-helper"></span>
      </span>`
    );
  });
});
