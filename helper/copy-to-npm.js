const gulp = require('gulp');

const pkg = require('../package.json');
const util = require('./util');


function main () {
    copyPkg();
    copyFiles();
}
 
function copyPkg () {
    const npmPkg = util.pick({
        target: pkg,
        attrs: [
            'name', 'version', 'description', 'main', 'unpkg', 'jsdelivr',
            'typings', 'repository', 'keywords', 'author', 'license', 'bugs', 'homepage'
        ]
    });
    util.write('npm/package.json', JSON.stringify(npmPkg, null, 4));
}

function copyFiles () {
    gulp.src(['README.md', 'LICENSE', 'src/index.d.ts'], {
        allowEmpty: true
    })
        .pipe(gulp.dest('npm'));
}

main();