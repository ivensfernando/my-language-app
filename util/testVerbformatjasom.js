var theCreator = require('./createJsonArchive.js');
var verbformatstojasom = require('./verbformatstojasom.js');
var fs = require('fs');

var sampleObject = {
    a: 1,
    b: 2,
    c: {
        x: 11,
        y: 22
    }
};



var htmlString = fs.readFileSync('./verbforms.html').toString();

verbformatstojasom.read(htmlString, function (err, verbs) {
    theCreator.recordFile("verbs", verbs, function (err, delta) {
        console.log(err , delta);
    } );
} );


