// タブがアクティブになったとき
chrome.tabs.onActivated.addListener(async ({ tabId, windowId }) => {
  const tab = await chrome.tabs.get(tabId);
  console.table({
    onActivated: {
      tabId: tabId,
      windowId: windowId,
      "tab.url": tab?.url,
      "tab.active": tab?.active,
      "tab.status": tab?.status,
      "location.href": location.href,
    },
  });
});

// タブが更新されたとき
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  console.table({
    onUpdated: {
      tabId: tabId,
      windowId: tab?.windowId,
      "tab.url": tab?.url,
      "tab.active": tab?.active,
      "tab.status": tab?.status,
      "location.href": location.href,
    },
  });
  console.log(info);
});
