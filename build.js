var fs = require('fs'),
    sass = require('node-sass');

sass.render({
  file: 'src/base.scss',
  outputStyle: 'expanded'
}, function(err, result) {
  if(err) {
    return console.log(err);
  }

  fs.writeFileSync('./dist/bss.css', result.css.toString());
});

sass.render({
  file: 'src/base.scss',
  outputStyle: 'compressed'
}, function(err, result) {
  if(err) {
    return console.log(err);
  }

  fs.writeFileSync('./dist/bss.min.css', result.css.toString());
});
