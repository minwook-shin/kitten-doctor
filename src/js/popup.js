document.body.onload = function () {
  chrome.storage.sync.get(['kitten_doctor_word'], function (result) {
    if (!chrome.runtime.error) {
      document.getElementById("selected_word").innerText = result.kitten_doctor_word;
      if (result.kitten_doctor_word && result.kitten_doctor_word != "") {
        chrome.action.setBadgeText({ text: 'ON' });
      }
      if (result.kitten_doctor_word == "") {
        chrome.action.setBadgeText({ text: 'OFF' });
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnapply').onclick = function () {
    if (document.getElementsByName("iname")[0].value && document.getElementsByName("iname")[0].value.trim() != "") {
      chrome.storage.sync.set({ kitten_doctor_word: document.getElementsByName("iname")[0].value }, function () {
      })
      window.location.reload()
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.reload(tabs[0].id);
      });
      chrome.action.setBadgeText({ text: 'ON' });
    }
  }
  document.getElementById('btnclear').onclick = function () {
    chrome.storage.sync.set({ kitten_doctor_word: "" }, function () {
    })
    window.location.reload()
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.reload(tabs[0].id);
    });
    chrome.action.setBadgeText({ text: 'OFF' });
  }
})

function localizeHtmlPage() {
  // https://stackoverflow.com/a/25612056
  //Localize by replacing __MSG_***__ meta tags
  var objects = document.getElementsByTagName('html');
  for (var j = 0; j < objects.length; j++) {
    var obj = objects[j];

    var valStrH = obj.innerHTML.toString();
    var valNewH = valStrH.replace(/__MSG_(\w+)__/g, function (match, v1) {
      return v1 ? chrome.i18n.getMessage(v1) : "";
    });

    if (valNewH != valStrH) {
      obj.innerHTML = valNewH;
    }
  }
}

localizeHtmlPage();