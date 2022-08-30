function printLine() {
    console.log('-'.repeat(30));
}

let simpleString = `my name is Jack Rayan!`;
let regExp = /[A-Z]/g;
console.log(simpleString.search(regExp));
printLine();

let simpleString1 = `my name is jack rayan!`;
let regExp1 = /[A-Z]/g;
console.log(simpleString1.search(regExp1));
printLine();

let simpleText = `I love javaScript, but javaScript can be difficult to learn!`;
let output = simpleText.replace(/javaScript/g, `JavaScript`);
console.log(output);
printLine();

const regExp2 = /\d{4}/g;
const myText = `I was born in 1990. Do you know anyone that is born in 1990?`;
const output1 = myText.replace(regExp2, `1973`);
console.log(output1);
printLine();

let testString1 = `This James Bond movie was great! I love watching James Bond movies with my brother.`;
let output2 = testString1
    .replace(/James Bond/gi, `Star Wars`)
    .replace(/brother/gi, `girlfriend`);
console.log(output2);
printLine();

const testString2 = myText;
const regExp3 = /\d{4}/g;
function replacerFn() {
    return `1987`;
}
console.log(testString2.replace(regExp3, replacerFn));
printLine();

const testString3 = `I hate JavaScript and I hate RegEx as well!`;
const regExp4 = /hate/g;
function replacerFn1(match) {
    console.log(match);
    return `love`;
}
console.log(testString3.replace(regExp4, replacerFn1));
printLine();

const testString4 = testString3;
const regExp5 = /hat(e)/g;
function replacerFn2(match, p1) {
    console.log(`The matched string ${match}, capturing ${p1}`);
    return `love`;
}
console.log(testString4.replace(regExp5, replacerFn2));
printLine();

const testString5 = testString3;
const regExp6 = /hat(e)/g;
function replacerFn3(match, p1, offset) {
    console.log(
        `The matched string ${match}, capturing ${p1} at this index: ${offset}`,
    );
    return `love`;
}
console.log(testString5.replace(regExp6, replacerFn3));
printLine();

const testString6 = testString3;
const regExp7 = /hat(e)/g;
function replacerFn4(match, p1, offset, string) {
    console.log(
        `The matched string ${match}, capturing ${p1} at this index: ${offset} in ${string}`,
    );
    return `love`;
}
console.log(testString6.replace(regExp7, replacerFn4));
printLine();
