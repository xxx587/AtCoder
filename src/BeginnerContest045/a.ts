import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [a, b, h]: number[] = stdInput.trim().split(/\s+/).map(Number);
	console.log(((a + b) * h) / 2);
};

main();
