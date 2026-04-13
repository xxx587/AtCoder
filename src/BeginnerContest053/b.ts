import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf-8');

const main = () => {
	const input: string = stdInput.trim();
	const start: number = input.indexOf('A');
	const end: number = input.lastIndexOf('Z');
	console.log(end - start + 1);
};

main();
