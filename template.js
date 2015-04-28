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
    init.prompt('description'),
    init.prompt('version')
  ], function(err,props){

    var files = init.filesToCopy(props);
    init.copyAndProcess(files,props);
    
    init.writePackageJSON('package.json', {
      name: props.name,
      version: '0.0.0',

      devDependencies: {
        'grunt-contrib-jshint': '~0.11.2'
      }
    });

    done();
  });
};
