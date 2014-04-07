require.config({

  deps: ['main'],

  paths: {
    // Libraries.
    jquery: '../assets/js/libs/jquery',
    lodash: '../assets/js/libs/lodash',
    backbone: '../assets/js/libs/backbone'
  },

  // Aliases
  map: {
    '*': {
      'underscore': 'lodash'
    }
  },

  shim: {
  }
});
