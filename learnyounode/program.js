var http = require( 'http' );
var concatStream = require( 'concat-stream' );
var content = {};

function printContent() {
    if( content.one && content.two && content.three ) {
        console.log( content.one );
        console.log( content.two );
        console.log( content.three );
    }
}

http.get( process.argv[ 2 ], function( response ) {
    response.pipe( concatStream( function( data ) {
        content.one = data.toString();
        printContent();
    }));
});

http.get( process.argv[ 3 ], function( response ) {
    response.pipe( concatStream( function( data ) {
        content.two = data.toString();
        printContent();
    }));
});

http.get( process.argv[ 4 ], function( response ) {
    response.pipe( concatStream( function( data ) {
        content.three = data.toString();
        printContent();
    }));
});
