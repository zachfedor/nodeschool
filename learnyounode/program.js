var fs = require( 'fs' );
var http = require( 'http' );

var server = http.createServer( function( request, response ) {
    fs.createReadStream( process.argv[ 3 ]).pipe( response );
});

server.listen( Number( process.argv[ 2 ]));
