document.body.onload = function () {
  chrome.storage.sync.get(['key'], function (result) {
    if (!chrome.runtime.error) {
      document.getElementById("selected_name").innerText = result.key;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('btnapply').onclick = function () {
    chrome.storage.sync.set({ key: document.getElementsByName("iname")[0].value }, function () {
    })
  }
  document.getElementById('btnclear').onclick = function () {
    chrome.storage.sync.set({ key: "does not exist." }, function () {
    })
  }
})