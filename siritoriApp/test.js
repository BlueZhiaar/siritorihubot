'use strict';
const siri = require('./index.js');
const assert = require('assert');

//addsiriとshowsirilistのテスト
siri.addsiri('まいご');
siri.addsiri('はた');

console.log(siri.showsirilist());

//delsiriのテスト
console.log(siri.showsirilist());

//searchkasiraのテスト（後で消す）
siri.addsiri('とうだい');
siri.addsiri('はみがき');
console.log(siri.showsirilist());
//console.log(siri.searchkasira('は'));

//siritoriのテスト
console.log(siri.siritori('ことのは'));
console.log(siri.siritori('とんま'));

console.log('テストが正常に完了しました');