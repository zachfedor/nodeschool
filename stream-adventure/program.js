var http = require( 'http' );
var through = require( 'through2' );
var stream = through( write, end );

var server = http.createServer( function( req, res ) {
    if( req.method === 'POST' ) {
        req.pipe( stream ).pipe( process.stdout );
    }
    res.end();
});

function write( buf, _, next ) {
    this.push( buf.toString().toUpperCase() );
    next();
}
function end( done ) { done(); }

server.listen( process.argv[ 2 ]);
