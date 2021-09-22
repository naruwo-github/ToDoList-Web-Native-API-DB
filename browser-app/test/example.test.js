// Jestを用いたテストを書くためのサンプルファイル
// 通常、ファイル○○.jsのテストをする際は、○○.test.jsと命名するらしい
// 現状、ここではJestの使い方を簡単にまとめたサンプルテストを記述する

const sum = require('./example');

test('properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 5)).toEqual(10);
    expect(sum(3, 3)).not.toBe(100);
    // expect().XXX();のXXXは色々あるよ
});