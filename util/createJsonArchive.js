var fs = require("fs");


var recordFile = function parse(nameObj, recordObject, callback) {


    fs.writeFile("./"+nameObj+".json", JSON.stringify(recordObject), 'utf-8', (err) => {
        if (err) {
            console.error(err);
            return callback("File has not created", false);
        };
        // console.log("File has been created");
        return callback("File has been created", true);
    });


}


module.exports = {
    recordFile: recordFile
};
