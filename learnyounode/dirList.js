module.exports = function( dir, ext, cb ) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir( dir, function( err, list ) {
        if( err ) {
            return cb( err );
        }

        ext = '.' + ext;
        var array = [];

        for( var i = 0; i < list.length; i++ ) {
            if( path.extname( list[ i ] ) == ext ) {
                array.push( list[ i ]);
            }
        }
        
        return cb( null, array );
    });
}
