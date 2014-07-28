##  Background Script Pt. 1

```js
chrome.runtime.onMessage.addListener(function (request, sender) {
    var wp = request;
    query = wp.title;

    getDPLAresults(wp, function (suggestions) {
        chrome.tabs.sendMessage(sender.tab.id, suggestions);
    });
});
```

[Message Passing](https://developer.chrome.com/extensions/messaging) documentation
