var http = require( 'http' );
var url = require( 'url' );

var server = http.createServer( function( request, response ) {
    var path = url.parse( request.url, true );
    var date = new Date( path.query.iso );

    response.writeHead( 200, { 'Content-type': 'application/json' });

    if( path.pathname == '/api/parsetime' ) {
        response.end( JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() }));
    } else if( path.pathname == '/api/unixtime' ) {
        response.end( JSON.stringify({ unixtime: date.getTime() }));
    } else {
        response.writeHead( 404 );
        response.end()
    }
});

server.listen( Number( process.argv[ 2 ]));
