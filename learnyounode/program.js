var http = require( 'http' );
var concatStream = require( 'concat-stream' );

http.get( process.argv[ 2 ], function( response ) {
    //response.setEncoding( "utf8" );
    response.pipe( concatStream( function( data ) {
        console.log( data.toString().length );
        console.log( data.toString());
    }));
});
