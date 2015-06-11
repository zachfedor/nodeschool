var test = require( 'tape' );
var fancify = require( process.argv[ 2 ]);

test( 'fancify test', function( t ) {
    t.equal( fancify( 'Hello' ), '~*~Hello~*~', 'fancified string' );
    t.equal( fancify( 'Hello', true ), '~*~HELLO~*~', 'all caps string' );
    t.equal( fancify( 'Hello', false, '!' ), '~!~Hello~!~', 'fancy fancified string' );
    t.equal( fancify( 'Hello', true, '!' ), '~!~HELLO~!~', 'fancy fancified all caps string' );
    t.end();
});
