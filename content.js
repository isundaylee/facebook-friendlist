chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == 'readDOM') {
    var list = $('._698').map(function(index, li) {
      var name = $(li).find('.fsl.fwb.fcb a');

      return {
        "name": name.text(),
        "href": name.attr('href')
      };
    }).get();

    var json_string = JSON.stringify(list, null, 2);

    chrome.runtime.sendMessage({
      action: 'show',
      string: json_string,
      count: list.length
    });
  }
});


