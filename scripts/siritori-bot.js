'use strict';
// Description:
//   しりとりのできるボットです。しりとりに使う言葉を教えることもできます。
// Commands:
//   ボット名 add 言葉　しりとりに使う言葉を１つ教える
//　　ボット名 del 言葉　しりとりに使う言葉を1つ削除する
// ボット名 siritori 言葉　ボットとしりとりをする
const s = require('siritoriApp');

module.exports = robot => {
    robot.respond(/add (.+)/i, msg => {
        const word = msg.match[1].trim();
        s.addsiri(word);
        msg.send(`追加しました: ${word}`);
    });
    robot.respond(/del (.+)/i, msg => {
        const word = msg.match[1].trim();
        s.delsiri(word);
        msg.send(`削除しました: ${word}`);
    });
    robot.respond(/siritori (.+)/i, msg => {
        const word = msg.match[1].trim();
        msg.send(s.siritori(word));
    });
    robot.respond(/show/i, msg => {
        msg.send(s.showsirilist());
    })
};