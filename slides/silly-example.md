## Silly Example

manifest.json:
```js
{
    "name": "Worldcat Rick Roll",
    "version": "0.0.1",
    "manifest_version": 2,
    "content_scripts": [{
        "matches": ["*://www.worldcat.org/search*"],
        "js": ["content.js"],
        "run_at": "document_end"
    }]
}
```

content.js:
```js
Array.prototype.forEach.call(
    document.querySelectorAll('tr.menuElem .name a'),
    function (el) {
        el.href = 'http://youtu.be/dQw4w9WgXcQ';
});
```

[Manifest](https://developer.chrome.com/extensions/manifest) documentation | [Content Script](https://developer.chrome.com/extensions/content_scripts) documentation
