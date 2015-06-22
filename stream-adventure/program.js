var concat = require( 'concat-stream' );

process.stdin
    .pipe( concat( function( data ) {
        var result = data.toString();

        result = result.split( '' ).reverse().join( '' );

        process.stdout.write( result );
    }));
