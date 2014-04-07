(function() {
"use strict";

QUnit.module("test", {
  setup: function() {
  }
});

asyncTest("Backbone exists", function() {
  expect(1);
  require(['backbone'], function(Backbone){
    ok(Backbone.VERSION, "Backbone version property exists");
    start();
  });
});

asyncTest("Lodash is available via require('underscore')", 1, function() {
  expect(1);
  require(['underscore'], function(_){
    ok(_.VERSION, "Lodash/Underscore version property exists");
    start();
  });
});

})();
