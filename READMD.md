#lolibooru
######An Node.js module designed to use the Lolibooru API.

How to Use
```js
var Lolibooru = require("node-lolibooru");
var loli = new Lolibooru();


loli.getLoli(1, 1, "1girl").then((data) => { console.log(data) })