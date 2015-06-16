var fs = require( 'fs' );
var through = require( 'through2' );
var split = require( 'split' );
var count = 1;

process.stdin
    .pipe( split() )
    .pipe( through( function( line, _, next ) {
        line = line.toString();

        if( count % 2 == 0 ) {
            line = line.toUpperCase();
        } else {
            line = line.toLowerCase();
        }

        count++;
        console.log( line );
        next();
    }))
    .pipe( process.stdout );
