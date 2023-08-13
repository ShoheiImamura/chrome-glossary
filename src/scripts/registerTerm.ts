chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("onMessage in registerTerm")
  if (message.action === "openForm") {
    openForm(message.selectedText);
  }
  console.log(sender);
  console.log(message);
  console.log(sendResponse);
  return true;
});

function openForm(selectedText: string) {
  // 登録フォームを作成
  const form = document.createElement("div");
  form.innerHTML = `
    <div style="position: fixed; top: 10%; left: 30%; width: 40%; background-color: white; border: 1px solid black; padding: 20px; z-index: 9999;">
      <h2>用語集に登録</h2>
      <input type="text" value="${selectedText}" style="width: 100%;">
      <button id="submitTerm">登録</button>
    </div>
  `;
  document.body.appendChild(form);

  // ボタンにイベントリスナを追加
  document.getElementById("submitTerm")?.addEventListener("click", function () {
    // ここでAPIリクエストを行う
    // 例: fetch('https://your-api-endpoint.com', { method: 'POST', body: JSON.stringify({ term: selectedText }) });
    // フォームを削除する
    form.remove();
    alert("登録しました！");
  });
}
