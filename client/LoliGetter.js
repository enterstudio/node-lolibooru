"use strict";

var rp = require("request-promise-any")

class LoliGetter{
    constructor(data) {
        // none
    }
    
    getLoli(limit, page, tags) {
        var options = {
            method: 'POST',
            uri: 'https://lolibooru.moe/post/index.json',
            body: {
                "limit": limit,
                "page": page,
                "tags": tags,
            },
            json: true // Automatically stringifies the body to JSON 
        };
        return rp(options).then((loliData) => { return (loliData[0]) })
    }
}

module.exports = LoliGetter;