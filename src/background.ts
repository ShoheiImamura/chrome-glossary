chrome.contextMenus.create({
  id: "addToGlossary",
  title: "用語集に「%s」を追加",
  type: "normal",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("onClicked")
  if (info.menuItemId !== "addToGlossary") {
    console.log("not match");
    return;
  }
  console.log(info);
  console.log(tab);
  // フォームを表示する
  // メッセージを送信する
  if (!tab?.id) {
    return;
  }
  // if (info.menuItemId === "registerTerm") {
  // content.js へメッセージを送信
  chrome.tabs.sendMessage(tab.id, {
    action: "openForm",
    selectedText: info.selectionText,
  });
  // }
});
