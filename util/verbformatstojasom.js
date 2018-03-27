var cheerio = require('cheerio');



var read = function parse(html, callback) {

    if (!html) {
        console.log('html is empty: returning: ' + JSON.stringify(m));
        return callback('html is empty: returning: ' , null);
    } else {

        var $ = cheerio.load(html, {
            ignoreWhitespace: true,
            xmlMode: false
        });

        var verb = {
            verbs : []
        };

        $("body").each(
            function () {

                $('table' ).each(
                    function () {
                        $('tr' ).each(
                            function () {
                                var tmp = $(this).text();

                                //verb.push(tmp);
                                //console.log('"karaio di assa branca"', tmp);

                                var perereca = tmp.split(" ")
                                    if (perereca[1].indexOf("S.No.")===-1) {

                                        //console.log('"karaio di assa"', perereca);

                                        var verbJs = {
                                            indice: perereca[1],
                                            baseForm: perereca[2],
                                            pastForm: perereca[3],
                                            pastParticipleForm: perereca[4],
                                            osEsIes: perereca[5],
                                            ingrsquoform : perereca[6]
                                        };

                                        verb.verbs.push(verbJs);
                                    }

                            });

                 });
            });
    }

    // console.log(verb);
    return callback('rodo: ' , verb);
}


module.exports = {
    read: read
};
