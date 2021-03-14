
import gulp from 'gulp';

import yargs from 'yargs';
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';

const PRODUCTION = yargs.argv.prod;

// export const hello = (done) => {
//   console.log (PRODUCTION);
//   done();
// }
  
const path = {
  styles: {
    src: ['src/assets/scss/bundle.scss','src/assets/scss/admin.scss'],
    dest: 'dist/asset/css'
  }
}



export const styles = () => {
 return gulp.src(path.styles.src)
 .pipe(gulpif(!PRODUCTION,sourcemaps.init()))
 .pipe(sass().on('error',sass.logError))
 .pipe(gulpif(PRODUCTION, cleanCSS({compatibility:'ie8'})))
 .pipe(gulpif(!PRODUCTION,sourcemaps.write()))
 .pipe(gulp.dest(path.styles.dest));

}

export const watch=() =>{
  gulp.watch('src/assets/scss/**/*.scss',styles)
}

  // exports.default = hello;