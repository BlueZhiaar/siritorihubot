'use strict';
let words = [];
let latestWord;
const fs = require('fs');
const fileName = './words.json';

//TODOそれに続く言葉は知らないので教えてほしいと言う機能
//TODOそれに続く言葉のあるなしを判定する関数
/**
 * 同期的にファイルから復元
 */
try {
    const data = fs.readFileSync(fileName, 'utf8');
    words = JSON.parse(data);
} catch (ignore) {
    console.log(fileName + 'から復元できませんでした');
}


/**
 * 言葉をファイルに保存する 
 */
function saveWords(){
    fs.writeFileSync(fileName, JSON.stringify(words), 'utf8');
}

//TODO しりとり規則に合わない返答をしたら指摘してくれる
/**
 * 言葉を追加する
 * @param {string} しりとりに使う言葉
 */

function addsiri(siriword){
    words.push(siriword);
    saveWords();
};

/**
 * 登録した言葉の一覧を表示する
 * @return {array}
 */
function showsirilist(){
    return Array.from(words);
}

/**
 * 登録した言葉を削除する
 * @param {string}
 * @return {array}
 */
function delsiri(siriword) {
    const indexFound = words.findIndex(w => w === siriword);
    if(indexFound !== -1){
        words.splice(indexFound, 1);
    }
    saveWords();
}

/**
 * 頭の文字を取り出す関数
 * @param {string}
 * @return {string}
 */
function kasiramoji(siriword){
    return siriword.slice(0,1);
}

/**
 * 尻の文字を取り出す関数
 */
function sirimoji(siriword){
    return siriword.slice(-1);
}

//配列の中から指定の文字が頭文字の言葉の配列を返す
/**
 * @param {string} 頭文字
 * @return {array} 頭文字が共通の言葉だけの配列
 */
function searchkasira(kasira){
    let arr;
    arr = words.filter(w => kasiramoji(w) === kasira);
    return arr;
}

//配列の中のランダムな要素を返す
/**
 * @param {array}
 * @return {string}
 */
function ran(arr){
    let result;
    let num = Math.floor(Math.random() * arr.length);
    result = arr[num];
    return result;
}

/**
 * 引数の言葉から尻文字を取り出しその文字が頭文字の言葉だけの配列を作りその中のランダムな言葉を返す
 * @param {string}
 * @return {string}
 */
function siritori(siriword) {
    let result;

    let sm = sirimoji(siriword);
    let arr = searchkasira(sm);
    if (arr.length === 0) {
        return 'それに続く言葉はまだおぼえていません';
    } else {
        result = ran(arr);
        return result;
    }
}

/**
 * lastestWordにつづく言葉として適切な言葉ならtrueそうでないならfalseを返す
 * @param {string}
 * @return {boolean}
 */

/*
function isItRight(siriword){
    if(latestWord === '') {
        return true;
    }
    return sirimoji(latestWord) === kasiramoji(siriword);
}
*/




module.exports = {
    addsiri,
    showsirilist,
    delsiri,
    siritori
}
