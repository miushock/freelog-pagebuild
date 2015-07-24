/*
 * grunt-intit-freelog-widget
 *
 */

'use strict';

exports.description = 'Create a widget project scaffold for freelog, provide basic testing scripts.';

exports.notes = '';

exports.after = '';

exports.warnOn = '*';

//template start
exports.template = function(grunt, init, done) {
  init.process({}, [
    //Prompt project infos
    init.prompt('name'),
    init.prompt('author_email'),
    init.prompt('description'),
  ], function(err,props){

    var files = init.filesToCopy(props);
    init.copyAndProcess(files,props);

    init.writePackageJSON('package.json', {
      name: props.name,
      author_email: props.author_email,
      version: '0.0.0',

      devDependencies: {
        'grunt-contrib-jshint': '~0.11.2',
        'grunt-contrib-watch': '~0.6.0',
        'grunt-contrib-copy': '~0.8.0',
        'jsdom': '~3.0.0',
        'jquery': '~2.1.4',
        'freelog-widgetscript': '~0.0.3'
      }
    });

    done();
  });
};
