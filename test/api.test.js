'use strict';
var test = require('tape');
const spacetime = require('./lib');
var api = require('../api/index.json');

test('test main methods', t => {
  Object.keys(api.main).forEach((k) => {
    var s = spacetime('1998-03-28');
    s[k]();
    t.ok(true, k);
  });
  t.end();
});

test('test getter methods', t => {
  Object.keys(api.getters).forEach((k) => {
    var s = spacetime('1998-03-28');
    s[k]();
    t.ok(true, k);
  });
  t.end();
});

test('test util methods', t => {
  Object.keys(api.utils).forEach((k) => {
    //skip these ones
    if (k === 'd' || k === 'log') {
      t.ok(true, k);
      return
    }
    var s = spacetime('1998-03-28');
    s[k]();
    t.ok(true, k);
  });
  t.end();
});
