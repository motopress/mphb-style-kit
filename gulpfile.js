const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' )( require( 'sass' ) );
const autoprefixer = require( 'gulp-autoprefixer' );

/**
 * scss task, will compile the .scss files
 */
function compile( cb ) {

    gulp.src( './scss/**/*.scss' )
        .pipe( sass().on( 'error', error => console.log( error.message ) ) )
        .pipe( autoprefixer() )
        .pipe( gulp.dest( 'css/' ) );

    cb();
}

function watch() {
    /**
     * watch for changes in scss files
     */
    gulp.watch( './scss/**/*.scss', compile );

}

exports.compile = compile;
exports.watch = gulp.series(compile, watch);