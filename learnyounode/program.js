var net = require( 'net' );
var moment = require( 'moment' );
var data = moment().format( 'YYYY-MM-DD HH:mm' ) + "\n";

var server = net.createServer( function( socket ) {
    socket.end( data );
});
server.listen( process.argv[ 2 ]);
