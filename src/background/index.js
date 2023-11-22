console.log("background is running");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome extension successfully installed");
});
