var fs = require('fs');

fs.readFile( process.argv[ 2 ], 'utf8', printNewLines );

function printNewLines( err, data ) {
    if( err ) {
        console.log( err );
    } else {
        var lines = data.toString().split( '\n' );

        console.log( lines.length - 1 );
    }
}
