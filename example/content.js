/*jshint strict:false,browser:true */
Array.prototype.forEach.call(
    document.querySelectorAll('tr.menuElem .name a'),
    function (el) {
        el.href = 'http://youtu.be/dQw4w9WgXcQ';
});
