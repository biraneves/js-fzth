function printLine() {
    console.log('-'.repeat(15));
}

const message = 'Hello';
console.log(message.length); // 5
printLine();

const smile = '😈';
console.log(smile.length); // 2
printLine();

const message1 = '\u0048\u0065\u006C\u006C\u006F';
console.log(message1 === 'Hello');
console.log(message1.length);
console.log(message1);
printLine();

let euroSymbol = '€';
let smileSymbol = '😄';
console.log(`Euro symbol has a length of ${euroSymbol.length}`);
console.log(`The smile symbol has a length of ${smileSymbol.length}`);
printLine();

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
printLine();

const myCodePoints = [9731, 9733, 9842, 0x2f804];
console.log(String.fromCodePoint(...myCodePoints));
printLine();

const message2 = 'Hello, World!';
for (let i = 0; i < message2.length; i++) {
    let codePoint = message2.codePointAt(i);
    console.log(codePoint);
}
printLine();
