var net = require( 'net' );
var moment = require( 'moment' );

function now() {
    return moment().format( 'YYYY-MM-DD HH:mm' );
}

var server = net.createServer( function( socket ) {
    socket.end( now() + '\n' );
});

server.listen( Number( process.argv[ 2 ]));
