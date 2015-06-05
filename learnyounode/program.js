var dirList = require( './dirList.js' );

dirList( process.argv[ 2 ], process.argv[ 3 ], printDirList );

function printDirList( err, data ) {
    if( err ) {
        console.log( "There was an error" );
    } else {
        data.forEach( function( item ) {
            console.log( item );
        });
    }
}
