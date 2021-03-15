
import gulp from 'gulp';

import yargs from 'yargs';
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
const PRODUCTION = yargs.argv.prod;

// export const hello = (done) => {
//   console.log (PRODUCTION);
//   done();
// }
  
const path = {
  styles: {
    src: ['src/assets/scss/bundle.scss','src/assets/scss/admin.scss'],
    dest: 'dist/asset/css'
  },
  images:{
    src: 'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
    dest: 'dist/asset/images'
  },

  others:{
    src: ['src/assets/**/*','!src/assets/{images,js,scss}',
    '!src/assets/{images,js,scss}/**/*'],

    dest:'dist/asset'
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

export const images = () =>{
  return gulp.src(path.images.src)
  .pipe(gulpif(PRODUCTION,imagemin()))
  .pipe(gulp.dest(path.images.dest));
}


export const watch=() =>{
  gulp.watch('src/assets/scss/**/*.scss',styles)
}

export const copy = () =>{
  return gulp.src(path.others.src)
  .pipe(gulp.dest(path.others.dest))
}

  // exports.default = hello;