var dict = require('./dict');

var DirtyDict=function(options){
  options = options || {};
  this.words = options.words || 4;
  this.delimiter = options.delimiter || " ";
}

DirtyDict.prototype.hash=function(options, callback){
  options = options || {};
  callback = callback || function(){};
  var max = dict.length;
  var hash = "";
  for(var i=0; i < this.words; i++){
    var rand = Math.floor(Math.random() * (max - 0 ));
    if(i != 0){
      hash += this.delimiter;
    }
    hash += dict[rand];
  }
  callback(hash);
  return hash;
}

module.exports=DirtyDict;


