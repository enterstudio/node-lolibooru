const LoliGET = require("./client/LoliGetter");

function Lolibooru(data) {
    return new LoliGET(data)
}

Lolibooru.LoliGET = LoliGET;

module.exports = Lolibooru;