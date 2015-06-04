var fs = require('fs');

if( process.argv.length > 2 ) {
    var file = process.argv[ 2 ];
    var buf = fs.readFileSync( file );
    var str = buf.toString();
    var array = str.split( '\n' );

    console.log( array.length - 1 );
}
