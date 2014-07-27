##  Background Script Pt. 2

```js
var getDPLAresults = function (wp, cb) {
    $.ajax({
        url: 'http://api.dp.la/v2/items?api_key=SECRET&q=' + encodeURIComponent(query),
        dataType: 'json'
    }).done(function (data) {
        var suggestions = buildSuggestions(data);
        // if we didn't get anything, try again
        if (suggestions.length === 0) {
            if (wp.redirects.length !== 0) {
                query = wp.redirects.pop(); // more fallbacks after this…
            }

            getDPLAresults(wp, cb);
            return;
        }

        cb(suggestions);
});};
```
