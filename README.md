#lolibooru
######An Node.js module designed to use the Lolibooru API.

How to Use
```js
var Lolibooru = require("node-lolibooru");
var loli = new Lolibooru();


loli.getLoli(1, 1, "1girl").then((data) => { console.log(data) })
```

NPM Package: https://www.npmjs.com/package/node-lolibooru

Documentation:

.getLoli(limit, page, tags)

limit: The limit of posts, max is 320
page: The page number you want
tags: The tags you want to use
