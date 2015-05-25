requirejs.config({
  "baseUrl": 'scripts/lib',
  "paths": {
    "app": "../",
    "jquery" : "jquery-2.1.4.min"
  }
});

requirejs(['{%=name%}']);
