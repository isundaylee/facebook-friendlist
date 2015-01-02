document.addEventListener('DOMContentLoaded', function() {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'show') {
      $('#string').text(request.string);
      $('#string').select();

      $('#count').text(request.count);
    }
  });

  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'readDOM'});
  });
});