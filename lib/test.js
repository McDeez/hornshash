var hornshash=require('./hornshash');
var HH = new hornshash();
var assert = require('assert');

var dict=require('./dict');

var hash = HH.hash();
assert.notEqual(hash.length, 0, "Hash generated is the wrong size");
assert.equal(hash.split(" ").length, 4, "Wrong number of words generated");

var set = [];
var HH1 = new hornshash({words:1});
var hash = HH1.hash();
assert.notEqual(hash.length, 0, "One word hash generated the wrong size");
assert.equal(hash.split(" ").length, 1, "Wrong number of words generated");
for(var i=0; i < 1000; i++){
  set.push(HH1.hash());
}
for(var i in set){
  assert.equal((dict.indexOf(set[i]) >= 0), true, "Non-dictionary word generated");
}
