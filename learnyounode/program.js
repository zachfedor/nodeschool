var dirList = require( './dirList.js' );

dirList( process.argv[ 2 ], process.argv[ 3 ], function( err, list ) {
    if( err ) {
        return console.log( "There was an error: " + err );
    } else {
        list.forEach( function( item ) {
            console.log( item );
        });
    }
});
