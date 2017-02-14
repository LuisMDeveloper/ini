var ini = require('../');

var data = {
    'number': { count: 10 },
    'string': { drink: 'white russian' },
    'boolean': { isTrue: true },
    'nested boolean': { theDude: { abides: true, rugCount: 1 } }
}

function test() {
    for (var k in data) {
        var s = ini.stringify(data[k])
        console.log(s, data[k])
    }
}

test();