import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input: string = stdInput.trim();
	const alphabet: string[] = 'aeiou'.split('');
	console.log(alphabet.includes(input) ? 'vowel' : 'consonant');
};

main();
