
const _stringify = JSON.stringify;
const _parse = JSON.parse;

JSON = {
    stringify: function (e) {
        console.log("%cStringifying:%c", "color:green;", "color:white;", _stringify(e));
        return _stringify(e);
    },
    parse: function (s) {
        console.log("%cParsing:%c", "color:green;", "color:white;", s);
        let e=_parse(s)
        console.log("%cParsed:%c", "color:green;", "color:white;", e);
        return e;
    },
    isRawJSON: function (s) {
        try {
            JSON.parse(s);
            console.log("%cRawJSON:%c", "color:green;", "color:white;", s);
            return true;
        } catch (e) {
            return false;
        }
    },
    rawJSON: function (s) {
        console.log("%cRawJSON:%c", "color:green;", "color:white;", s);
        return JSON.parse(s);
    }
};
