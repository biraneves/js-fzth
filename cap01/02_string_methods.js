function printLine() {
    console.log('-'.repeat(30));
}

const message = 'w';
const repeatIt = message.repeat(3);
console.log(repeatIt);
printLine();

const beforeAndAfter = '   Hi there   ';
console.log(`1 - trim method: ${beforeAndAfter.trim()}!`);
console.log(`2 - does not change the original content: ${beforeAndAfter}!`);
printLine();

const example = `Hello`;
const newString = example.padStart(10);
console.log(example);
console.log(newString);
printLine();

const firstName = `Andy`;
const lastName = `Garcia`;
console.log(firstName.toLocaleLowerCase());
console.log(lastName.toLocaleUpperCase());
printLine();

const sentence = `I want to be a developer!`;
const index = 7;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
const lastChar = sentence.charAt(sentence.length - 1);
console.log(lastChar);
printLine();

const occupation = `Web Developer`;
if (occupation.includes(`Dev`)) {
    console.log(`Yes, it does!`);
} else {
    console.log(`Nope, I can't find Dev here!`);
}
printLine();

const myOccupation = `Developer`;
console.log(myOccupation.slice(0, 3));
console.log(myOccupation.slice(2));
printLine();

const originalString = `Mozilla`;
const updatedString = originalString.replace(`Mo`, `God`);
console.log(updatedString);
console.log(originalString);
printLine();

let text = `Hello World`;
const splittedArray = text.split(` `);
console.log(splittedArray);
printLine();

const message1 = `Ana`;
const message2 = `maria`;
console.log(message1.concat(message2));
printLine();
