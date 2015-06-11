var test = require( 'tape' );
var feedCat = require( process.argv[ 2 ]);

test( 'feedCat test', function( t ) {
    t.plan( 2 );
    t.ok( feedCat( 'food' ) === 'yum', 'food is yummy');
    t.throws( function() {
        feedCat( 'chocolate' );
    });
});
