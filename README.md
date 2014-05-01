hornshash
=========

A Human Readable and very memorable hash generator using unsavory words. WARNING NSFW!


This is a really simple POC for a project I've been working on, all it does is take a dictionary of bad words and generates a hash with a set number of them

## Usage

```javascript
var hornshash=require('hornshash');
var HH= new hornshash();

var hash=HH.hash();
```

hornshash will also take in an options JSON object allowing you to set the number of words it will put out in the hash and the delimiter

```javascript
var hornshash=require('hornshash');
var options={
              words:7, //default is 4
              delimiter:"|" //default is " "
            };
var HH=new hornshash();
var hash=HH.hash();
```
