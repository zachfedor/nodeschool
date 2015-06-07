var http = require( 'http' );
var concatStream = require( 'concat-stream' );
var content = [];
var count = 0;

function printContent() {
    for( var i = 0; i < 3; i++ ) {
        console.log( content[ i ] );
    }
}

function getContent( index ) {
    http.get( process.argv[ 2 + index ], function( response ) {
        response.pipe( concatStream( function( data ) {
            content[ index ] = data.toString();
            count++;

            if( count == 3 ) {
                printContent();
            }
        }));
    });
}

for( var i = 0; i < 3; i++ ) {
    getContent( i );
}
