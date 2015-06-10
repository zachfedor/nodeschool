var http = require( 'http' );

var server = http.createServer( function( request, response ) {
    if( request.method == 'POST' ) {
        response.writeHead( 200, { 'content-type': 'text/html' });

        request.on( 'data', function( chunk ) {
            response.write( chunk.toString().toUpperCase());
        });

        request.on( 'end', function() {
            response.end();
        });
    }
});

server.listen( Number( process.argv[ 2 ]));
